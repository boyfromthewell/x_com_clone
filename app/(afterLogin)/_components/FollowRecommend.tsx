"use client";

import Image from "next/image";
import * as styles from "./followRecommend.css";

export default function FollowRecommend() {
  const user = {
    id: "kim",
    nickname: "김정은",
    image: "/kimjungeun.webp",
  };

  const onFollow = () => {};

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.userLogo}>
          <Image
            src={user.image}
            alt={user.id}
            width={40}
            height={40}
            className={styles.userLogoImg}
          />
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.title}>{user.nickname}</div>
        <div className={styles.count}>@{user.id}</div>
      </div>
      <div className={styles.followButtonSection}>
        <button onClick={onFollow} className={styles.followButton}>
          팔로우
        </button>
      </div>
    </div>
  );
}
