"use client";

import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";
import * as styles from "./postForm.css";
import Image from "next/image";

export default function PostForm() {
  const imageRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState("");
  const me = {
    id: "soonyong2",
    image: "/xlogo.png",
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  const onClickButton = () => {
    imageRef.current?.click();
  };

  return (
    <form className={styles.postForm} onSubmit={onSubmit}>
      <div className={styles.postUserSection}>
        <div className={styles.postUserImg}>
          <Image
            src={me.image}
            alt={me.id}
            width={40}
            height={40}
            className={styles.postUserImg}
          />
        </div>
      </div>
      <div className={styles.postInputSection}>
        <textarea
          value={content}
          onChange={onChange}
          placeholder="무슨 일이 일어나고 있나요?"
          className={styles.postTextarea}
        />
        <div className={styles.postButtonSection}>
          <div className={styles.footerButtons}>
            <div className={styles.footerButtonLeft}>
              <input
                type="file"
                name="imageFiles"
                multiple
                hidden
                ref={imageRef}
              />
              <button
                className={styles.uploadButton}
                type="button"
                onClick={onClickButton}
              >
                <svg
                  width={24}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={styles.buttonSvg}
                >
                  <g>
                    <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                  </g>
                </svg>
              </button>
            </div>
            <button className={styles.actionButton} disabled={!content}>
              게시하기
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}