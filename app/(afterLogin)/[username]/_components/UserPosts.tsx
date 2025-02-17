"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { Post as IPost } from "@/model/post";
import { getUserPosts } from "../_lib/getUserPosts";
import Post from "../../_components/Post";

export default function UserPosts({ username }: { username: string }) {
  const { data } = useQuery<
    IPost[],
    object,
    IPost[],
    [_1: string, _2: string, _3: string]
  >({
    queryKey: ["posts", "users", username],
    queryFn: getUserPosts,
    staleTime: 10 * 3000,
  });

  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["users", username]);
  if (user) {
    return data?.map((post) => <Post key={post.postId} post={post} />);
  }
  return null;
}
