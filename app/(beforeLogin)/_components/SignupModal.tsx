"use client";
import BackButton from "@/app/(afterLogin)/_components/BackButton";
import * as styles from "./signup.css";
import Form from "next/form";
import { useActionState } from "react";
import { submitSignup } from "../_lib/signup.action";

export default function SignupModal() {
  const [state, formAction, isPending] = useActionState(submitSignup, {
    message: "",
  });

  const showMessage = (message: string | null) => {
    if (message === "no_id") {
      return "아이디를 입력하세요.";
    }
    if (message === "no_name") {
      return "닉네임을 입력하세요.";
    }
    if (message === "no_password") {
      return "비밀번호를 입력하세요.";
    }
    if (message === "no_image") {
      return "이미지를 업로드하세요.";
    }
    if (message === "user_exists") {
      return "이미 사용 중인 아이디입니다.";
    }
    return message;
  };

  return (
    <>
      <div className={styles.modalBackground}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <BackButton />
            <div>계정을 생성하세요.</div>
          </div>
          <Form className={styles.modalForm} action={formAction}>
            <div className={styles.modalBody}>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="id">
                  아이디
                </label>
                <input
                  id="id"
                  name="id"
                  className={styles.input}
                  type="text"
                  placeholder=""
                  required
                  defaultValue={state.id as string}
                />
              </div>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="name">
                  닉네임
                </label>
                <input
                  name="name"
                  id="name"
                  className={styles.input}
                  type="text"
                  placeholder=""
                  required
                  defaultValue={state.nickname as string}
                />
              </div>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="password">
                  비밀번호
                </label>
                <input
                  name="password"
                  id="password"
                  className={styles.input}
                  type="password"
                  placeholder=""
                  required
                  defaultValue={state.password as string}
                />
              </div>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="image">
                  프로필
                </label>
                <input
                  name="image"
                  id="image"
                  className={styles.input}
                  type="file"
                  accept="image/*"
                  required
                  defaultValue={state.image as string}
                />
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button
                type="submit"
                className={styles.actionButton}
                disabled={isPending}
              >
                가입하기
              </button>
              <div className={styles.error}>{showMessage(state?.message)}</div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
