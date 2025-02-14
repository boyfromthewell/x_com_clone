"use client";
import { MouseEventHandler, ReactNode } from "react";
import * as styles from "./post.css";
import { useRouter } from "next/navigation";
import { Post } from "@/model/post";

interface Props {
  children: ReactNode;
  post: Post;
}

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();
  let target = post;
  if (post.Original) {
    target = post.Original;
  }

  const onClick: MouseEventHandler = () => {
    router.push(`/${target.User.id}/status/${target.postId}`);
  };

  return (
    <article className={styles.post} onClick={onClick}>
      {children}
    </article>
  );
}
