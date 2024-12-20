import Image from "next/image";
import BackButton from "../_components/BackButton";
import Post from "../_components/Post";
import * as styles from "./profile.css";

export default function Page() {
  const user = {
    id: "soonyong2",
    nickname: "순용",
    image: "/xlogo.png",
  };
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <BackButton />
        <h3 className={styles.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={styles.userZone}>
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
        <button className={styles.followButton}>팔로우</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
