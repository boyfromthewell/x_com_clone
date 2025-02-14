"use client";
import * as styles from "../page.css";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Post as IPost } from "@/model/post";
import { getSinglePost } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost";
import ActionButtons from "@/app/(afterLogin)/_components/ActionButtons";
type Props = {
  id: string;
};
export default function ImageZone({ id }: Props) {
  const { data: post } = useQuery<
    IPost,
    object,
    IPost,
    [_1: string, _2: string]
  >({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
    staleTime: 10 * 3000,
  });

  if (!post?.Images[0]) {
    return null;
  }

  return (
    <div className={styles.imageZone}>
      <img
        src={post.Images[0].link}
        alt={post.content}
        className={styles.hiddenImage}
      />
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${post.Images[0].link})` }}
      />
      <div className={styles.buttonZone}>
        <div className={styles.buttonInner}>
          <ActionButtons white post={post} />
        </div>
      </div>
    </div>
  );
}
