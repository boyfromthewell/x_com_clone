"use client";
import { User } from "@/model/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser } from "../_lib/getUser";
import BackButton from "../../_components/BackButton";
import * as styles from "../profile.css";
import { MouseEventHandler } from "react";
import Image from "next/image";
import cx from "classnames";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";

export default function UserInfo({
  username,
  session,
}: {
  username: string;
  session: Session | null;
}) {
  const { data: user, error } = useQuery<
    User,
    Object,
    User,
    [_1: string, _2: string]
  >({
    queryKey: ["users", username],
    queryFn: getUser,
  });

  const queryClient = useQueryClient();

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
        if (index > -1) {
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
        if (index > -1) {
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
        }

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
        if (index > -1) {
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
        }

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
        if (index > -1) {
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

  if (!user) {
    return null;
  }

  const onFollow: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (followed) {
      unfollow.mutate(user?.id);
    } else {
      follow.mutate(user?.id);
    }
  };

  const followed = user.Followers?.find((v) => v.id === session?.user?.email);

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
          {user.id !== session?.user?.email && (
            <button
              onClick={onFollow}
              className={cx(styles.followButton, followed && styles.followed)}
            >
              {followed ? "팔로잉" : "팔로우"}
            </button>
          )}
        </div>
        <div className={styles.userFollower}>
          <div>{user._count.Followers} 팔로워</div>
          &nbsp;
          <div>{user._count.Followings} 팔로우 중</div>
        </div>
      </div>
    </>
  );
}
