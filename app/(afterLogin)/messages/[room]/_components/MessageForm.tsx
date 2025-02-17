"use client";
import { useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import {
  ChangeEventHandler,
  FormEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";
import TextareaAutosize from "react-textarea-autosize";
import * as styles from "./messageForm.css";
import useSocket from "../_lib/useSocket";

export default function MessageForm({ id }: { id: string }) {
  const [content, setContent] = useState("");
  const [socket] = useSocket();

  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const onChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = () => {
    socket?.emit("sendMessage", {
      senderId: session?.user?.email,
      receiverId: id,
      content,
    });
    setContent("");
  };

  useEffect(() => {
    socket?.on("receiveMessage", (data) => {
      console.log(data);
    });

    return () => {
      socket?.off("receiveMessage");
    };
  }, []);

  const onEnter: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {};

  return (
    <div className={styles.formZone}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <TextareaAutosize
          value={content}
          onChange={onChangeContent}
          onKeyDown={onEnter}
          placeholder="새 쪽지 작성하기"
          className={styles.textarea}
        />
        <button
          className={styles.submitButton}
          type="submit"
          disabled={!content?.trim()}
        >
          <svg
            viewBox="0 0 24 24"
            width={18}
            aria-hidden="true"
            fill="rgb(29, 155, 240)"
            className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-z80fyv r-19wmn03"
          >
            <g>
              <path d="M2.504 21.866l.526-2.108C3.04 19.719 4 15.823 4 12s-.96-7.719-.97-7.757l-.527-2.109L22.236 12 2.504 21.866zM5.981 13c-.072 1.962-.34 3.833-.583 5.183L17.764 12 5.398 5.818c.242 1.349.51 3.221.583 5.183H10v2H5.981z"></path>
            </g>
          </svg>
        </button>
      </form>
    </div>
  );
}
