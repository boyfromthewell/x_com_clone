"use client";

import Image from "next/image";
import * as styles from "./followRecommend.css";
import cx from "classnames";
import type { User } from "@/model/user";
import Link from "next/link";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { MouseEventHandler } from "react";

interface FollowRecommendProps {
  user: User;
}

export default function FollowRecommend({ user }: FollowRecommendProps) {
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  const followed = !!user.Followers?.find((v) => v.id === session?.user?.email);

  const follow = useMutation({
    mutationFn: (userId: string) => {
      return fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/follow`,
        {
          credentials: "include",
          method: "post",
        }
      );
    },
    onMutate(userId: string) {
      const value: User[] | undefined = queryClient.getQueryData([
        "users",
        "followRecommends",
      ]);
      if (value) {
        const index = value.findIndex((v) => v.id === userId);

        const shallow = [...value];
        shallow[index] = {
          ...shallow[index],
          Followers: [{ id: session?.user?.email as string }],
          _count: {
            ...shallow[index]._count,
            Followers: shallow[index]._count?.Followers + 1,
          },
        };
        queryClient.setQueryData(["users", "followRecommends"], shallow);
      }
      const value2: User | undefined = queryClient.getQueryData([
        "users",
        userId,
      ]);
      if (value2) {
        const shallow = {
          ...value2,
          Followers: [{ id: session?.user?.email as string }],
          _count: {
            ...value2._count,
            Followers: value2._count?.Followers + 1,
          },
        };
        queryClient.setQueryData(["users", userId], shallow);
      }
    },
    onError(error, userId: string) {
      const value: User[] | undefined = queryClient.getQueryData([
        "users",
        "followRecommends",
      ]);
      if (value) {
        const index = value.findIndex((v) => v.id === userId);

        const shallow = [...value];
        shallow[index] = {
          ...shallow[index],
          Followers: shallow[index].Followers.filter(
            (v) => v.id !== session?.user?.email
          ),
          _count: {
            ...shallow[index]._count,
            Followers: shallow[index]._count?.Followers - 1,
          },
        };
        queryClient.setQueryData(["users", "followRecommends"], shallow);
        const value2: User | undefined = queryClient.getQueryData([
          "users",
          userId,
        ]);
        if (value2) {
          const shallow = {
            ...value2,
            Followers: value2.Followers.filter(
              (v) => v.id !== session?.user?.email
            ),
            _count: {
              ...value2._count,
              Followers: value2._count?.Followers - 1,
            },
          };
          queryClient.setQueryData(["users", userId], shallow);
        }
      }
    },
  });

  const unfollow = useMutation({
    mutationFn: (userId: string) => {
      return fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/follow`,
        {
          credentials: "include",
          method: "delete",
        }
      );
    },
    onMutate(userId: string) {
      const value: User[] | undefined = queryClient.getQueryData([
        "users",
        "followRecommends",
      ]);
      if (value) {
        const index = value.findIndex((v) => v.id === userId);

        const shallow = [...value];
        shallow[index] = {
          ...shallow[index],
          Followers: shallow[index].Followers.filter(
            (v) => v.id !== session?.user?.email
          ),
          _count: {
            ...shallow[index]._count,
            Followers: shallow[index]._count?.Followers - 1,
          },
        };
        queryClient.setQueryData(["users", "followRecommends"], shallow);

        const value2: User | undefined = queryClient.getQueryData([
          "users",
          userId,
        ]);

        if (value2) {
          const shallow = {
            ...value2,
            Followers: value2.Followers.filter(
              (v) => v.id !== session?.user?.email
            ),
            _count: {
              ...value2._count,
              Followers: value2._count?.Followers - 1,
            },
          };
          queryClient.setQueryData(["users", userId], shallow);
        }
      }
    },
    onError(error, userId: string) {
      const value: User[] | undefined = queryClient.getQueryData([
        "users",
        "followRecommends",
      ]);
      if (value) {
        const index = value.findIndex((v) => v.id === userId);

        const shallow = [...value];
        shallow[index] = {
          ...shallow[index],
          Followers: [{ id: session?.user?.email as string }],
          _count: {
            ...shallow[index]._count,
            Followers: shallow[index]._count?.Followers + 1,
          },
        };
        queryClient.setQueryData(["users", "followRecommends"], shallow);
      }
      const value2: User | undefined = queryClient.getQueryData([
        "users",
        userId,
      ]);
      if (value2) {
        const shallow = {
          ...value2,
          Followers: [{ id: session?.user?.email as string }],
          _count: {
            ...value2._count,
            Followers: value2._count?.Followers + 1,
          },
        };
        queryClient.setQueryData(["users", userId], shallow);
      }
    },
  });

  const onFollow: MouseEventHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (followed) {
      unfollow.mutate(user.id);
    } else {
      follow.mutate(user.id);
    }
  };

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
        <button
          onClick={onFollow}
          className={cx(styles.followButton, followed && styles.followed)}
        >
          {followed ? "팔로잉" : "팔로우"}
        </button>
      </div>
    </Link>
  );
}
