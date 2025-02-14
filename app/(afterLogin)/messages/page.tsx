import { Metadata } from "next";
import Room from "./_components/Room";
import * as styles from "./page.css";

export const metadata: Metadata = {
  title: "쪽지 / X",
  description: "쪽지를 보내보세요.",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h3>쪽지</h3>
      </div>
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
    </main>
  );
}
