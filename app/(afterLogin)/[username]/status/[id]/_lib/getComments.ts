import { QueryFunction } from "@tanstack/query-core";
import type { Post } from "@/model/post";

export const getComments: QueryFunction<
  Post[],
  [_1: string, _2: string, _3: string]
> = async ({ queryKey }) => {
  const [_1, id] = queryKey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}/comments`,
    {
      next: {
        tags: ["posts", id, "comments"],
      },
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
