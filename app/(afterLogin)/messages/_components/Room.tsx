"use client";
import * as styles from "../page.css";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import Image from "next/image";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Room() {
  const router = useRouter();
  const user = {
    id: "hero",
    nickname: "영웅",
    Messages: [
      { roomId: 123, content: "안녕하세요.", createdAt: new Date() },
      { roomId: 123, content: "제주 삼다수~", createdAt: new Date() },
    ],
  };
  const onClick = () => {
    router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
  };
  return (
    <div className={styles.room} onClickCapture={onClick}>
      <div className={styles.roomUserImage}>
        <Image
          width={40}
          height={40}
          src={faker.image.avatar()}
          alt=""
          className={styles.roomUserImageImg}
        />
      </div>
      <div className={styles.roomChatInfo}>
        <div>
          <b className={styles.roomChatInfoBold}>{user.nickname}</b>
          &nbsp;
          <span>@{user.id}</span>
          &nbsp; · &nbsp;
          <span>{dayjs(user.Messages?.at(-1)?.createdAt).fromNow(true)}</span>
        </div>
        <div>{user.Messages?.at(-1)?.content}</div>
      </div>
    </div>
  );
}
