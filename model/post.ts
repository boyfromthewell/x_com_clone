import { User } from "./user";

interface UserId {
  userId: string;
}

export interface Post {
  postId: number;
  User: User;
  content: string;
  createdAt: Date;
  Images: PostImage[];
  Hearts: UserId[];
  Reposts: UserId[];
  Comments: UserId[];
  _count: {
    Hearts: number;
    Reposts: number;
    Comments: number;
  };
  Original?: Post; // 재게시
  Parent?: Post; // 답글
}

export interface PostImage {
  link: string;
  imageId: number;
  Post?: Post;
}
