export const getFollowRecommends = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/followRecommends`,
    {
      next: {
        tags: ["users", "followRecommends"],
      },
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
