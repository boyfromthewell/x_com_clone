"use client";

import Image from "next/image";
import * as styles from "./logoutButton.css";

export default function LogoutButton() {
  const me = {
    id: "soonyong2",
    nickname: "순용",
    image: "/xlogo.png",
  };

  const onLogout = () => {};
  return (
    <button className={styles.logOutButton} onClick={onLogout}>
      <div className={styles.logOutUserImage}>
        <Image
          src={me.image}
          alt={me.id}
          width={40}
          height={40}
          className={styles.buttonImg}
        />
      </div>
      <div className={styles.logOutUserName}>
        <div style={{ fontWeight: "bold" }}>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
