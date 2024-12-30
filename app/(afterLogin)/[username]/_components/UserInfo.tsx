"use client";
import { User } from "@/model/user";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../_lib/getUser";
import BackButton from "../../_components/BackButton";
import * as styles from "../profile.css";
import { MouseEventHandler } from "react";
import Image from "next/image";

export default function UserInfo({ username }: { username: string }) {
  const { data: user, error } = useQuery<
    User,
    Object,
    User,
    [_1: string, _2: string]
  >({
    queryKey: ["users", username],
    queryFn: getUser,
  });

  const onFollow: MouseEventHandler<HTMLButtonElement> = (e) => {};

  if (error) {
    return (
      <>
        <div className={styles.header}>
          <BackButton />
          <h3 className={styles.headerTitle}>프로필</h3>
        </div>
        <div className={styles.userZone}>
          <div className={styles.userImage}></div>
          <div className={styles.userName}>
            <div className={styles.userNameSub}>@{username}</div>
          </div>
        </div>
        <div
          style={{
            height: 100,
            alignItems: "center",
            fontSize: 31,
            fontWeight: "bold",
            justifyContent: "center",
            display: "flex",
          }}
        >
          계정이 존재하지 않음
        </div>
      </>
    );
  }

  if (!user) {
    return null;
  }
  return (
    <>
      <div className={styles.header}>
        <BackButton />
        <h3 className={styles.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={styles.userZone}>
        <div className={styles.userRow}>
          <div className={styles.userImage}>
            <Image
              src={user.image}
              alt={user.id}
              width={134}
              height={134}
              className={styles.userImageImg}
            />
          </div>
          <div className={styles.userName}>
            <div className={styles.userNameBold}>{user.nickname}</div>
            <div className={styles.userNameSub}>@{user.id}</div>
          </div>
          <button onClick={onFollow} className={styles.followButton}>
            팔로우
          </button>
        </div>
      </div>
    </>
  );
}
