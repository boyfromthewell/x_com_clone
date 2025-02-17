"use client";
import { useQuery } from "@tanstack/react-query";
import type { Post as IPost } from "@/model/post";
import Post from "../../_components/Post";
import { getSearchResult } from "../_lib/getSearchResult";

type Props = {
  searchParams: { q: string; f?: string; pf?: string };
};

export default function SearchResult({ searchParams }: Props) {
  const { data } = useQuery<
    IPost[],
    object,
    IPost[],
    [_1: string, _2: string, Props["searchParams"]]
  >({
    queryKey: ["posts", "search", searchParams],
    queryFn: getSearchResult,
  });
  return data?.map((post) => <Post key={post.postId} post={post} />);
}
