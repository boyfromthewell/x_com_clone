"use client";

import Image from "next/image";
import * as styles from "./followRecommend.css";
import { MouseEventHandler } from "react";
import type { User } from "@/model/user";
import Link from "next/link";

interface FollowRecommendProps {
  user: User;
}

export default function FollowRecommend({ user }: FollowRecommendProps) {
  const onFollow: MouseEventHandler<HTMLButtonElement> = (e) => {};

  return (
    <Link href={`/${user.id}`} className={styles.container}>
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
    </Link>
  );
}
