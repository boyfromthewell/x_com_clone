import { User } from "./user";

export interface Post {
  postId: number;
  User: User;
  content: string;
  createdAt: Date;
  Images: PostImage[];
}

export interface PostImage {
  link: string;
  imageId: number;
  Post?: Post;
}
