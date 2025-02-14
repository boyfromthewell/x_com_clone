import * as styles from "./singlePost.css";
import BackButton from "@/app/(afterLogin)/_components/BackButton";
import CommentForm from "./_components/CommentForm";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import SinglePost from "./_components/SinglePost";
import Comments from "./_components/Comments";
import { getComments } from "./_lib/getComments";
import { Metadata } from "next";
import { getUserServer } from "../../_lib/getUserServer";
import { User } from "@/model/user";
import { Post } from "@/model/post";
import { getSinglePostServer } from "./_lib/getSinglePostServer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; username: string }>;
}): Promise<Metadata> {
  const { username, id } = await params;
  const [user, post]: [User, Post] = await Promise.all([
    getUserServer({ queryKey: ["users", username] }),
    getSinglePostServer({ queryKey: ["posts", id] }),
  ]);

  return {
    title: `X에서 ${user.nickname} 님 : ${post.content}`,
    description: post.content,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; username: string }>;
}) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts", id],
    queryFn: getSinglePostServer,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", id, "comments"],
    queryFn: getComments,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={styles.main}>
      <HydrationBoundary state={dehydratedState}>
        <div className={styles.header}>
          <BackButton />
          <h3 className={styles.headerTitle}>게시하기</h3>
        </div>
        <SinglePost id={id} />
        <CommentForm id={id} />
        <div>
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
