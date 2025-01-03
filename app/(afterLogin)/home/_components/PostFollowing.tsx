"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_components/Post";
import type { Post as IPost } from "@/model/post";
import { getFollowingPosts } from "../_lib/getFollowingPosts";

export default function PostFollowing() {
  const { data } = useSuspenseQuery<IPost[]>({
    queryKey: ["posts", "followings"],
    queryFn: getFollowingPosts,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
