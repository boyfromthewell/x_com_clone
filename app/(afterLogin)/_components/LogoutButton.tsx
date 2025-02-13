"use client";

import Image from "next/image";
import * as styles from "./logoutButton.css";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

export default function LogoutButton({ me }: { me: Session | null }) {
  const onLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  if (!me?.user) return null;

  return (
    <button className={styles.logOutButton} onClick={onLogout}>
      <div className={styles.logOutUserImage}>
        <Image
          src={me.user.image as string}
          alt={me.user?.name as string}
          width={40}
          height={40}
          className={styles.buttonImg}
        />
      </div>
      <div className={styles.logOutUserName}>
        <div className={styles.userNameBold}>{me.user.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </button>
  );
}
