import { Message } from "@/model/message";

type ReqData = {
  pageParam?: number;
  queryKey: [string, { senderId: string; receiverId: string }, string];
};

export default async function getMessages({
  pageParam,
  queryKey,
}: ReqData): Promise<Message[]> {
  const [_, userInfo] = queryKey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userInfo.senderId}/rooms/${userInfo.receiverId}?cursor=${pageParam}`,
    {
      next: {
        tags: ["rooms"],
      },
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
