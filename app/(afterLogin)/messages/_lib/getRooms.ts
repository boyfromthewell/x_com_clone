import { Room } from "@/model/room";
import { cookies } from "next/headers";

export async function getRooms(id: string): Promise<Room[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${id}/rooms`,
    {
      next: {
        tags: ["rooms"],
      },
      headers: { Cookie: (await cookies()).toString() },
      credentials: "include",
    }
  );
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
}
