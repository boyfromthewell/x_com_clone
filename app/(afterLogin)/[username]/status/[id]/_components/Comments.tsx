"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { Post as IPost } from "@/model/post";
import { getComments } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getComments";
import Post from "@/app/(afterLogin)/_components/Post";

type Props = {
  id: string;
};
export default function Comments({ id }: Props) {
  const queryClient = useQueryClient();
  const post = queryClient.getQueryData(["posts", id]);

  const { data } = useQuery<
    IPost[],
    Object,
    IPost[],
    [_1: string, _2: string, _3: string]
  >({
    queryKey: ["posts", id, "comments"],
    queryFn: getComments,
    enabled: !!post,
  });
  if (post) {
    return data?.map((post) => <Post post={post} key={post.postId} />);
  }
  return null;
}
