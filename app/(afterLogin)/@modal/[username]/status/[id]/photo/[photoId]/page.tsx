import * as styles from "./page.css";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_components/CommentForm";
import CloseButton from "./_components/CloseButton";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getSinglePost } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost";
import { getComments } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getComments";
import ImageZone from "./_components/ImageZone";
import SinglePost from "@/app/(afterLogin)/[username]/status/[id]/_components/SinglePost";
import Comments from "@/app/(afterLogin)/[username]/status/[id]/_components/Comments";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", id, "comments"],
    queryFn: getComments,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={styles.container}>
      <HydrationBoundary state={dehydratedState}>
        <CloseButton />
        <ImageZone id={id} />
        <div className={styles.commentZone}>
          <SinglePost id={id} noImage />
          <CommentForm id={id} />
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
