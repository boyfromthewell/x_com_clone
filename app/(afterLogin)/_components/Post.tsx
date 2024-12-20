import Link from "next/link";
import * as styles from "./post.css";
import ActionButtons from "./ActionButtons";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import PostArticle from "./PostArticle";
import { faker } from "@faker-js/faker";
import PostImages from "./PostImages";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Post({ noImage }: { noImage?: boolean }) {
  const target = {
    postId: 1,
    User: {
      id: "nuclear",
      nickname: "김정은",
      image: "/kimjungeun.webp",
    },
    content: "ㅠㅠ",
    createdAt: new Date(),
    Images: [] as any,
  };
  if (Math.random() > 0.5 && !noImage) {
    target.Images.push(
      { imageId: 1, link: faker.image.urlLoremFlickr() },
      { imageId: 2, link: faker.image.urlLoremFlickr() },
      { imageId: 3, link: faker.image.urlLoremFlickr() }
    );
  }

  return (
    <PostArticle post={target}>
      <div className={styles.postWrapper}>
        <div className={styles.postUserSection}>
          <Link
            href={`/${target.User.id}`}
            className={styles.postUserImageWrapper}
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
            <Link href={`/${target.User.id}`}>
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
          <div style={{ marginTop: 12 }}>
            <PostImages post={target} />
          </div>
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
