import { IMessage } from "./message.interface";

export interface IConversation {
  id: string;
  from: IUserChat;
  createdAt: string | Date;
  updatedAt: string | Date;
  chats: IMessage[];
}

export interface IUserChat {
  id: string;
  username: string;
  name: string;
  photo: string;
  lastSeen: string | Date;
  isOnline: boolean;
}