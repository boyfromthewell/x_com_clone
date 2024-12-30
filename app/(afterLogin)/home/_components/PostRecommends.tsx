"use client";
import { useQuery } from "@tanstack/react-query";
import { getPostRecommends } from "../_lib/getPostRecommends";
import Post from "@/app/(afterLogin)/_components/Post";
import type { Post as IPost } from "@/model/post";

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
