import { faker } from "@faker-js/faker";
import * as styles from "./page.css";
import Link from "next/link";
import cx from "classnames";

import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

import dayjs from "dayjs";
import BackButton from "../../_components/BackButton";
import Image from "next/image";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function ChatRoom() {
  const user = {
    id: "hero",
    nickname: "영웅",
    image: faker.image.avatar(),
  };
  const messages = [
    {
      messageId: 1,
      roomId: 123,
      id: "soonyong2",
      content: "안녕하세요.",
      createdAt: new Date(),
    },
    {
      messageId: 2,
      roomId: 123,
      id: "hero",
      content: "안녕히가세요.",
      createdAt: new Date(),
    },
  ];
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <BackButton />
        <div>
          <h2 className={styles.headerTitle}>{user.nickname}</h2>
        </div>
      </div>
      <Link href={user.nickname} className={styles.userInfo}>
        <Image
          width={64}
          height={64}
          className={styles.userInfoImage}
          src={user.image}
          alt={user.id}
        />
        <div>
          <b>{user.nickname}</b>
        </div>
        <div>@{user.id}</div>
      </Link>
      <div>
        {messages.map((m) => {
          if (m.id === "soonyong2") {
            return (
              <div
                key={m.messageId}
                className={cx(styles.message, styles.myMessage)}
              >
                <div className={styles.messageType["MY"]}>{m.content}</div>
                <div className={styles.date}>
                  {dayjs(m.createdAt).format("YYYY년 MM월 DD일 A HH시 mm분")}
                </div>
              </div>
            );
          }
          return (
            <div
              key={m.messageId}
              className={cx(styles.message, styles.yourMessage)}
            >
              <div className={styles.messageType["YOUR"]}>{m.content}</div>
              <div className={styles.date}>
                {dayjs(m.createdAt).format("YYYY년 MM월 DD일 A HH시 mm분")}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
