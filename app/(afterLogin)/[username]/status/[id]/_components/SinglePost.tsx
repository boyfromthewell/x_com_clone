"use client";
import { useQuery } from "@tanstack/react-query";
import { getSinglePost } from "../_lib/getSinglePost";
import type { Post as IPost } from "@/model/post";
import Post from "@/app/(afterLogin)/_components/Post";

type Props = {
  id: string;
  noImage?: boolean;
};
export default function SinglePost({ id, noImage }: Props) {
  const { data: post, error } = useQuery<
    IPost,
    Object,
    IPost,
    [_1: string, _2: string]
  >({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
    staleTime: 10 * 3000,
  });
  if (error) {
    return (
      <div
        style={{
          height: 100,
          alignItems: "center",
          fontSize: 31,
          fontWeight: "bold",
          justifyContent: "center",
          display: "flex",
        }}
      >
        게시글을 찾을 수 없습니다.
      </div>
    );
  }
  if (!post) {
    return null;
  }
  return <Post key={post.postId} post={post} noImage={noImage} />;
}
