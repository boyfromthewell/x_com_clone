import { User } from "./user";

export interface Room {
  room: string;
  Receiver: User;
  content: string;
  createdAt: Date;
}
