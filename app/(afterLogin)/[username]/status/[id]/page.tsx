import * as styles from "./singlePost.css";
import BackButton from "@/app/(afterLogin)/_components/BackButton";
import CommentForm from "./_components/CommentForm";
import Post from "@/app/(afterLogin)/_components/Post";

export default function Page() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <BackButton />
        <h3 className={styles.headerTitle}>게시하기</h3>
      </div>
      <Post />
      <CommentForm />
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
