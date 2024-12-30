export async function getPostRecommends() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/postRecommends`,
    {
      next: {
        tags: ["posts", "recommends"],
      },
    }
  );
  if (!res.ok) {
    throw new Error("failed fetch data");
  }
  return res.json();
}
