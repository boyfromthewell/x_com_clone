import { Metadata } from "next";
import Room from "./_components/Room";
import * as styles from "./page.css";
import { auth } from "@/auth";
import { getRooms } from "./_lib/getRooms";

export const metadata: Metadata = {
  title: "쪽지 / X",
  description: "쪽지를 보내보세요.",
};

export default async function Page() {
  const session = await auth();

  const rooms = session?.user?.email ? await getRooms(session.user.email) : [];

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h3>쪽지</h3>
      </div>
      {rooms?.map((room) => (
        <Room key={room.room} room={room} />
      ))}
    </main>
  );
}
