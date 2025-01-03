import PostForm from "./_components/PostForm";
import Tab from "./_components/Tab";
import TabProvider from "./_components/TabProvider";
import * as styles from "./home.css";

import { Suspense } from "react";
import Loading from "./loading";
import TabDeciderSuspense from "./_components/TabDeciderSuspense";

export default async function Home() {
  return (
    <main className={styles.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Suspense fallback={<Loading />}>
          <TabDeciderSuspense />
        </Suspense>
      </TabProvider>
    </main>
  );
}
