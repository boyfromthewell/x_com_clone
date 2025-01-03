export async function getPostRecommends({ pageParam }: { pageParam?: number }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/postRecommends?cursor=${pageParam}`,
    {
      next: {
        tags: ["posts", "recommends"],
      },
      cache: "force-cache",
    }
  );
  if (!res.ok) {
    throw new Error("failed fetch data");
  }
  return res.json();
}
