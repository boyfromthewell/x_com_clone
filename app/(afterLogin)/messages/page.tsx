import Room from "./_components/Room";
import * as styles from "./page.css";

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
