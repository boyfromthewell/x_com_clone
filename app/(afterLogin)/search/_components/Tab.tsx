"use client";
import { useState } from "react";
import * as styles from "../search.css";
import { useRouter } from "next/navigation";
export default function Tab({ q }: { q: string }) {
  const [current, setCurrent] = useState("hot");
  const router = useRouter();

  const onClickHot = () => {
    setCurrent("hot");
    router.replace(`/search?q=${q}`);
  };

  const onClickNew = () => {
    setCurrent("new");
    router.replace(`/search?q=${q}&f=live`);
  };
  return (
    <div className={styles.homeFixed}>
      <div className={styles.homeTab}>
        <div onClick={onClickHot} className={styles.homeTabItem}>
          인기
          <div className={styles.tabIndicator} hidden={current === "new"}></div>
        </div>
        <div onClick={onClickNew} className={styles.homeTabItem}>
          최신
          <div className={styles.tabIndicator} hidden={current === "hot"}></div>
        </div>
      </div>
    </div>
  );
}
