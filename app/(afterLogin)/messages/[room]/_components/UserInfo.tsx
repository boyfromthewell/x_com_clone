"use client";
import * as styles from "../page.css";
import { getUser } from "@/app/(afterLogin)/[username]/_lib/getUser";
import BackButton from "@/app/(afterLogin)/_components/BackButton";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function UserInfo({ id }: { id: string }) {
  const { data: user } = useQuery({
    queryKey: ["users", id],
    queryFn: getUser,
  });
  if (!user) {
    return null;
  }
  return (
    <>
      <div className={styles.header}>
        <BackButton />
        <div>
          <h2 className={styles.headerTitle}>{user.nickname}</h2>
        </div>
      </div>
      <Link href={"/" + user.id} className={styles.userInfo}>
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
    </>
  );
}
