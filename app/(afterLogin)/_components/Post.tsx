import Link from "next/link";
import * as styles from "./post.css";
import ActionButtons from "./ActionButtons";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import PostArticle from "./PostArticle";
import PostImages from "./PostImages";
import type { Post as IPost } from "@/model/post";
import { MouseEventHandler } from "react";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Post({
  noImage,
  post,
}: {
  noImage?: boolean;
  post: IPost;
}) {
  const target = post;

  const stopPropagation: MouseEventHandler = (e) => {
    e.stopPropagation();
  };
  return (
    <PostArticle post={target}>
      <div className={styles.postWrapper}>
        <div className={styles.postUserSection}>
          <Link
            href={`/${target.User.id}`}
            className={styles.postUserImageWrapper}
            onClick={stopPropagation}
          >
            <Image
              src={target.User.image}
              alt={target.User.nickname}
              width={40}
              height={40}
              className={styles.postUserImg}
            />
            <div className={styles.postShade} />
          </Link>
        </div>
        <div className={styles.postBody}>
          <div className={styles.postMeta}>
            <Link href={`/${target.User.id}`} onClick={stopPropagation}>
              <span className={styles.postUserName}>
                {target.User.nickname}
              </span>
              &nbsp;
              <span className={styles.postUserText}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={styles.postUserDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          {!noImage && (
            <div style={{ marginTop: 12 }}>
              <PostImages post={target} />
            </div>
          )}

          <ActionButtons post={target} />
        </div>
      </div>
    </PostArticle>
  );
}
