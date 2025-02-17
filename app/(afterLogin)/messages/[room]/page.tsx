import * as styles from "./page.css";
import { auth } from "@/auth";
import { QueryClient } from "@tanstack/react-query";
import { getUserServer } from "../../[username]/_lib/getUserServer";
import UserInfo from "./_components/UserInfo";
import MessageForm from "./_components/MessageForm";
import WebSocket from "./_components/WebSocket";

export default async function ChatRoom({
  params,
}: {
  params: Promise<{ room: string }>;
}) {
  const { room } = await params;
  const session = await auth();
  const queryClient = new QueryClient();
  const ids = room.split("-").filter((v) => v !== session?.user?.email);

  if (!ids[0]) {
    return null;
  }
  await queryClient.prefetchQuery({
    queryKey: ["users", ids[0]],
    queryFn: getUserServer,
  });

  return (
    <main className={styles.main}>
      <WebSocket />
      <UserInfo id={ids[0]} />
      <MessageForm id={ids[0]} />
    </main>
  );
}
