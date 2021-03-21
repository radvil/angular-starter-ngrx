export interface IMessage {
  id: string;
  conversationId: string;
  senderId: string;
  receiverId: string;
  message: string;
  hasSeen: boolean;
  createdAt: string | Date;
}