"use client";
import { ReactNode } from "react";
import * as styles from "./post.css";
import { useRouter } from "next/navigation";

interface Props {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Images: any[];
  };
}

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    <article className={styles.post} onClickCapture={onClick}>
      {children}
    </article>
  );
}
