"use client";

import { ChangeEventHandler, FormEvent, useRef, useState } from "react";
import * as styles from "./postForm.css";
import Image from "next/image";
import { Session } from "next-auth";
import TextareaAutosize from "react-textarea-autosize";
import { Post } from "@/model/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function PostForm({ me }: { me: Session | null }) {
  const imageRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState<
    Array<{ dataUrl: string; file: File } | null>
  >([]);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (e: FormEvent) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append("content", content);
      preview.forEach((p) => {
        if (p) {
          formData.append("images", p.file);
        }
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
      if (queryClient.getQueryData(["posts", "recommends"])) {
        queryClient.setQueryData(
          ["posts", "recommends"],
          (prevData: { pages: Post[][] }) => {
            const shallow = {
              ...prevData,
              pages: [...prevData.pages],
            };
            shallow.pages[0] = [...shallow.pages[0]];
            shallow.pages[0].unshift(newPost);
            return shallow;
          }
        );
      }
      if (queryClient.getQueryData(["posts", "followings"])) {
        queryClient.setQueryData(
          ["posts", "followings"],
          (prevData: { pages: Post[][] }) => {
            const shallow = {
              ...prevData,
              pages: [...prevData.pages],
            };
            shallow.pages[0] = [...shallow.pages[0]];
            shallow.pages[0].unshift(newPost);
            return shallow;
          }
        );
      }
    },
    onError(error) {
      console.error(error);
      alert("업로드 중 에러가 발생했습니다.");
    },
  });

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  const onClickButton = () => {
    imageRef.current?.click();
  };

  const onRemoveImage = (index: number) => () => {
    setPreview((prev) => {
      const prevImage = [...prev];
      prevImage[index] = null;
      return prevImage;
    });
  };

  const onUpload: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    if (e.target.files) {
      Array.from(e.target.files).forEach((file, idx) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview((prev) => {
            const prevImage = [...prev];
            prevImage[idx] = {
              dataUrl: reader.result as string,
              file,
            };
            return prevImage;
          });
        };
        reader.readAsDataURL(file);
      });
    }
  };

  return (
    <form className={styles.postForm} onSubmit={mutation.mutate}>
      <div className={styles.postUserSection}>
        <div className={styles.postUserImg}>
          <Image
            src={me?.user?.image as string}
            alt={me?.user?.email as string}
            width={40}
            height={40}
            className={styles.postUserImg}
          />
        </div>
      </div>
      <div className={styles.postInputSection}>
        <TextareaAutosize
          value={content}
          onChange={onChange}
          placeholder="무슨 일이 일어나고 있나요?"
          className={styles.postTextarea}
        />
        <div style={{ display: "flex" }}>
          {preview.map(
            (v, idx) =>
              v && (
                <div key={idx} style={{ flex: 1 }} onClick={onRemoveImage(idx)}>
                  <Image
                    width={120}
                    height={120}
                    src={v.dataUrl}
                    alt="미리보기"
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      maxHeight: 100,
                    }}
                  />
                </div>
              )
          )}
        </div>
        <div className={styles.postButtonSection}>
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
                  className={styles.buttonSvg}
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
      </div>
    </form>
  );
}
