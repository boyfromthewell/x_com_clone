"use client";
import {
  DefaultError,
  InfiniteData,
  useInfiniteQuery,
  useQueryClient,
} from "@tanstack/react-query";
import * as styles from "../page.css";
import cx from "classnames";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";
import { useInView } from "react-intersection-observer";
import { Message } from "@/model/message";
import getMessages from "../_lib/getMessages";
import useSocket from "../_lib/useSocket";
import { useEffect, useRef, useState } from "react";
import { useMessageStore } from "@/store/message";

export default function MessageList({ id }: { id: string }) {
  const [socket] = useSocket();

  const { data: session } = useSession();
  const {
    data: messages,
    isFetching,
    hasPreviousPage,
    fetchPreviousPage,
  } = useInfiniteQuery<
    Message[],
    DefaultError,
    InfiniteData<Message[]>,
    [string, { senderId: string; receiverId: string }, string],
    number
  >({
    queryKey: [
      "rooms",
      { senderId: session?.user?.email!, receiverId: id },
      "messages",
    ],
    queryFn: getMessages,
    initialPageParam: 0,
    getPreviousPageParam: (firstPage) =>
      firstPage.length < 10 ? undefined : firstPage.at(0)?.messageId,
    getNextPageParam: (lastPage) =>
      lastPage.length < 10 ? undefined : lastPage.at(-1)?.messageId,
    enabled: !!(session?.user?.email && id),
  });

  const { shouldGoDown, setGoDown } = useMessageStore();
  const listRef = useRef<HTMLDivElement>(null);
  const [pageRendered, setPageRendered] = useState(false);
  const [adjustingScroll, setAdjustingScroll] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.resetQueries({
      queryKey: [
        "rooms",
        { senderId: session?.user?.email!, receiverId: id },
        "messages",
      ],
    });
  }, [queryClient, session?.user?.email, id]);

  useEffect(() => {
    if (inView) {
      if (!isFetching && hasPreviousPage && !adjustingScroll) {
        const prevHeight = listRef.current?.scrollHeight || 0;
        fetchPreviousPage().then(() => {
          setAdjustingScroll(true);
          setTimeout(() => {
            if (listRef.current) {
              listRef.current.scrollTop =
                listRef.current.scrollHeight - prevHeight;
            }
            setAdjustingScroll(false);
          }, 0);
        });
      }
    }
  }, [inView, isFetching, hasPreviousPage, fetchPreviousPage, adjustingScroll]);

  let hasMessages = !!messages;
  useEffect(() => {
    if (hasMessages) {
      setTimeout(() => {
        if (listRef.current) {
          listRef.current.scrollTop = listRef.current?.scrollHeight;
        }
      }, 100);
      setPageRendered(true);
    }
  }, [hasMessages]);

  useEffect(() => {
    if (shouldGoDown) {
      if (listRef.current) {
        listRef.current.scrollTop = listRef.current?.scrollHeight;
        setGoDown(false);
      }
    }
  }, [shouldGoDown, setGoDown]);

  useEffect(() => {
    socket?.on("receiveMessage", async (data) => {
      const exMessages = queryClient.getQueryData([
        "rooms",
        {
          senderId: session?.user?.email,
          receiverId: id,
        },
        "messages",
      ]) as InfiniteData<Message[]>;
      if (exMessages && typeof exMessages === "object") {
        const newMessages = {
          ...exMessages,
          pages: [...exMessages.pages],
        };
        const lastPage = newMessages.pages.at(-1);
        const newLastPage = lastPage ? [...lastPage] : [];
        newLastPage.push(data);
        newMessages.pages[newMessages.pages.length - 1] = newLastPage;
        queryClient.setQueryData(
          [
            "rooms",
            { senderId: session?.user?.email, receiverId: id },
            "messages",
          ],
          newMessages
        );
        setGoDown(true);
      }
    });

    return () => {
      socket?.off("receiveMessage");
    };
  }, [socket]);

  return (
    <div className={styles.list} ref={listRef}>
      {!adjustingScroll && pageRendered && (
        <div ref={ref} style={{ height: 1 }} />
      )}
      {messages?.pages?.map((page) =>
        page.map((m) => {
          if (m.senderId === session?.user?.email) {
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
        })
      )}
    </div>
  );
}
