import PostForm from "./_components/PostForm";
import Tab from "./_components/Tab";
import TabProvider from "./_components/TabProvider";
import * as styles from "./home.css";

import { Suspense } from "react";
import Loading from "./loading";
import TabDeciderSuspense from "./_components/TabDeciderSuspense";
import { auth } from "@/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "홈 / X",
  description: "홈",
};

export default async function Home() {
  const session = await auth();
  return (
    <main className={styles.main}>
      <TabProvider>
        <Tab />
        <PostForm me={session} />
        <Suspense fallback={<Loading />}>
          <TabDeciderSuspense />
        </Suspense>
      </TabProvider>
    </main>
  );
}
