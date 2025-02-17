"use client";
import Image from "next/image";
import * as styles from "./modal.css";
import {
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useRef,
  useState,
} from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import TextareaAutoSize from "react-textarea-autosize";
import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Post } from "@/model/post";
import { useModalStore } from "@/store/modal";
import Link from "next/link";

export default function TweetModal() {
  const [content, setContent] = useState("");
  const imageRef = useRef<HTMLInputElement>(null);
  const { data: me } = useSession();
  const router = useRouter();
  const [preview, setPreview] = useState<
    Array<{
      dataUrl: string;
      file: File;
    } | null>
  >([]);

  const queryClient = useQueryClient();
  const { mode, data: parent, reset } = useModalStore();

  const newPost = useMutation({
    mutationFn: async (e: FormEvent) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("content", content);
      preview.forEach((p) => {
        if (p) formData.append("images", p.file);
      });
      return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
        method: "post",
        credentials: "include",
        body: formData,
      });
    },
    async onSuccess(response) {
      const newPost = await response.json();
      setContent("");
      setPreview([]);
      const queryCache = queryClient.getQueryCache();
      const queryKeys = queryCache.getAll().map((cache) => cache.queryKey);

      queryKeys.forEach((queryKey) => {
        if (queryKey[0] === "posts") {
          const value: Post | InfiniteData<Post[]> | undefined =
            queryClient.getQueryData(queryKey);
          if (value && "pages" in value) {
            const obj = value.pages
              .flat()
              .find((v) => v.postId === parent?.postId);
            if (obj) {
              // 존재는 하는지
              // const pageIndex = value.pages.findIndex((page) =>
              //   page.includes(obj)
              // );
              // const index = value.pages[pageIndex].findIndex(
              //   (v) => v.postId === parent?.postId
              // );

              const shallow = {
                ...value,
                pages: [...value.pages],
              };
              shallow.pages[0] = [...shallow.pages[0]];
              shallow.pages[0].unshift(newPost); // 새 게시글 추가
              queryClient.setQueryData(queryKey, shallow);
            }
          }
        }
      });
      await queryClient.invalidateQueries({
        queryKey: ["trends"],
      });
    },
    onError(error) {
      console.error(error);
      alert("업로드 중 에러가 발생했습니다.");
    },
    onSettled() {
      router.back();
    },
  });

  const comment = useMutation({
    mutationFn: (e: FormEvent) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("content", content);
      preview.forEach((p) => {
        if (p) formData.append("images", p.file);
      });
      return fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${parent?.postId}/comments`,
        {
          method: "post",
          credentials: "include",
          body: formData,
        }
      );
    },
    async onSuccess(response) {
      const newPost = await response.json();
      setContent("");
      setPreview([]);
      const queryCache = queryClient.getQueryCache();
      const queryKeys = queryCache.getAll().map((cache) => cache.queryKey);

      queryKeys.forEach((queryKey) => {
        if (queryKey[0] === "posts") {
          const value: Post | InfiniteData<Post[]> | undefined =
            queryClient.getQueryData(queryKey);
          if (value && "pages" in value) {
            const obj = value.pages
              .flat()
              .find((v) => v.postId === parent?.postId);
            if (obj) {
              // 존재는 하는지
              const pageIndex = value.pages.findIndex((page) =>
                page.includes(obj)
              );
              const index = value.pages[pageIndex].findIndex(
                (v) => v.postId === parent?.postId
              );

              const shallow = { ...value };
              value.pages = { ...value.pages };
              value.pages[pageIndex] = [...value.pages[pageIndex]];
              shallow.pages[pageIndex][index] = {
                ...shallow.pages[pageIndex][index],
                Comments: [{ userId: me?.user?.email as string }],
                _count: {
                  ...shallow.pages[pageIndex][index]._count,
                  Comments: shallow.pages[pageIndex][index]._count.Comments + 1,
                },
              };
              shallow.pages[0].unshift(newPost); // 새 답글 추가
              queryClient.setQueryData(queryKey, shallow);
            }
          } else if (value) {
            // 싱글 포스트인 경우
            if (value.postId === parent?.postId) {
              const shallow = {
                ...value,
                Comments: [{ userId: me?.user?.email as string }],
                _count: {
                  ...value._count,
                  Comments: value._count.Comments + 1,
                },
              };
              queryClient.setQueryData(queryKey, shallow);
            }
          }
        }
      });
      await queryClient.invalidateQueries({
        queryKey: ["trends"],
      });
    },
    onError(err) {
      console.error(err);
      alert("업로드 중 에러가 발생했습니다.");
    },
    onSettled() {
      reset();
      router.back();
    },
  });

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  const onClickClose = () => {
    router.back();
  };

  const onClickButton = () => {
    imageRef.current?.click();
  };

  const onRemoveImage = (index: number) => () => {
    setPreview((prevPreview) => {
      const prev = [...prevPreview];
      prev[index] = null;
      return prev;
    });
  };

  const onUpload: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    if (e.target.files) {
      Array.from(e.target.files).forEach((file, index) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview((prevPreview) => {
            const prev = [...prevPreview];
            prev[index] = {
              dataUrl: reader.result as string,
              file,
            };
            return prev;
          });
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    if (mode === "new") {
      newPost.mutate(e);
    } else {
      comment.mutate(e);
    }
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClickClose}>
          <svg
            width={24}
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
          >
            <g>
              <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
            </g>
          </svg>
        </button>
        <form className={styles.modalForm} onSubmit={onSubmit}>
          {mode === "comment" && parent && (
            <div className={styles.modalOriginal}>
              <div className={styles.postUserSection}>
                <div className={styles.postUserImage}>
                  <Image
                    width={40}
                    height={40}
                    src={parent.User.image}
                    alt={parent.User.id}
                    className={styles.postUserImageImg}
                  />
                </div>
              </div>
              <div>
                {parent.content}
                <div>
                  <Link
                    href={`/${parent.User.id}`}
                    style={{ color: "rgb(29, 155, 240)" }}
                  >
                    @{parent.User.id}
                  </Link>{" "}
                  님에게 보내는 답글
                </div>
              </div>
            </div>
          )}
          <div className={styles.modalBody}>
            <div className={styles.postUserSection}>
              <div className={styles.postUserImage}>
                <Image
                  src={me?.user?.image as string}
                  alt={me?.user?.email as string}
                  width={40}
                  height={40}
                  className={styles.postUserImageImg}
                />
              </div>
            </div>
            <div className={styles.inputDiv}>
              <TextareaAutoSize
                className={styles.input}
                placeholder={
                  mode === "comment"
                    ? "답글 게시하기"
                    : "무슨 일이 일어나고 있나요?"
                }
                value={content}
                onChange={onChange}
              />
              <div style={{ display: "flex" }}>
                {preview.map(
                  (v, index) =>
                    v && (
                      <div
                        key={index}
                        style={{ flex: 1 }}
                        onClick={onRemoveImage(index)}
                      >
                        <img
                          src={v.dataUrl}
                          alt="미리보기"
                          style={{
                            width: "100%",
                            objectFit: "contain",
                            maxHeight: 100,
                          }}
                        />
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
          <div className={styles.modalFooter}>
            <div className={styles.modalDivider} />
            <div className={styles.footerButtons}>
              <div className={styles.footerButtonLeft}>
                <input
                  type="file"
                  name="imageFiles"
                  multiple
                  hidden
                  ref={imageRef}
                  onChange={onUpload}
                />
                <button
                  className={styles.uploadButton}
                  type="button"
                  onClick={onClickButton}
                >
                  <svg
                    width={24}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className={styles.uploadButtonSvg}
                  >
                    <g>
                      <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                    </g>
                  </svg>
                </button>
              </div>
              <button className={styles.actionButton} disabled={!content}>
                게시하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
