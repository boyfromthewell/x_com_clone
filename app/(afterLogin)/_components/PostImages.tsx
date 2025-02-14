import Link from "next/link";
import style from "./postImage.module.css";
import cx from "classnames";
import { MouseEventHandler } from "react";

type Props = {
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
};

export default function PostImages({ post }: Props) {
  const stopPropagation: MouseEventHandler = (e) => {
    e.stopPropagation();
  };

  if (!post.Images) return null;

  if (!post.Images.length) return null;

  if (post.Images.length === 1) {
    return (
      <Link
        href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
        className={cx(style.postImageSection, style.oneImage)}
        style={{
          backgroundImage: `url(${post.Images[0]?.link})`,
          backgroundSize: "contain",
        }}
        onClick={stopPropagation}
      >
        <img src={post.Images[0]?.link} alt="post img" />
      </Link>
    );
  }
  if (post.Images.length === 2) {
    return (
      <div
        className={cx(style.postImageSection, style.twoImage)}
        onClick={stopPropagation}
      >
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[0]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[1]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
      </div>
    );
  }
  if (post.Images.length === 3) {
    return (
      <div
        className={cx(style.postImageSection, style.threeImage)}
        onClick={stopPropagation}
      >
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[0]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
        <div>
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
            style={{
              backgroundImage: `url(${post.Images[1]?.link})`,
              backgroundSize: "cover",
            }}
          ></Link>
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
            style={{
              backgroundImage: `url(${post.Images[2]?.link})`,
              backgroundSize: "cover",
            }}
          ></Link>
        </div>
      </div>
    );
  }
  if (post.Images.length === 4) {
    return (
      <div
        className={cx(style.postImageSection, style.fourImage)}
        onClick={stopPropagation}
      >
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[0]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[1]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[2]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[3].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[3]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
      </div>
    );
  }
  return null;
}
