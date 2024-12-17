"use client";
import * as styles from "./tab.css";
import { useState } from "react";

export default function Tab() {
  const [tab, setTab] = useState("rec");

  const onClickRec = () => {
    setTab("rec");
  };
  const onClickFol = () => {
    setTab("fol");
  };

  return (
    <div className={styles.homeFixed}>
      <div className={styles.homeText}>홈</div>
      <div className={styles.homeTab}>
        <div onClick={onClickRec} className={styles.homeTabDiv}>
          추천
          <div className={styles.tabIndicator} hidden={tab === "fol"}></div>
        </div>
        <div onClick={onClickFol} className={styles.homeTabDiv}>
          팔로우 중
          <div className={styles.tabIndicator} hidden={tab === "rec"}></div>
        </div>
      </div>
    </div>
  );
}
