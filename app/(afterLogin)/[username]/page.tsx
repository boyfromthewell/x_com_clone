import Image from "next/image";
import BackButton from "../_components/BackButton";
import Post from "../_components/Post";
import * as styles from "./profile.css";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getUser } from "./_lib/getUser";
import { getUserPosts } from "./_lib/getUserPosts";
import UserInfo from "./_components/UserInfo";
import UserPosts from "./_components/UserPosts";

export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users", username],
    queryFn: getUser,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", "users", "recommends"],
    queryFn: getUserPosts,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={styles.main}>
      <HydrationBoundary state={dehydratedState}>
        <UserInfo username={username} />
        <div>
          <UserPosts username={username} />
        </div>
      </HydrationBoundary>
    </main>
  );
}
