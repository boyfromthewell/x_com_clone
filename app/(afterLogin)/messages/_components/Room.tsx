"use client";
import * as styles from "../page.css";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import Image from "next/image";
import { Room as IRoom } from "@/model/room";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Room({ room }: { room: IRoom }) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/messages/${room.room}`);
  };
  return (
    <div className={styles.room} onClickCapture={onClick}>
      <div className={styles.roomUserImage}>
        <Image
          width={40}
          height={40}
          src={room.Receiver.image}
          alt=""
          className={styles.roomUserImageImg}
        />
      </div>
      <div className={styles.roomChatInfo}>
        <div>
          <b className={styles.roomChatInfoBold}>{room.Receiver.nickname}</b>
          &nbsp;
          <span>@{room.Receiver.id}</span>
          &nbsp; · &nbsp;
          <span>{dayjs(room.createdAt).fromNow(true)}</span>
        </div>
        <div>{room.content}</div>
      </div>
    </div>
  );
}
