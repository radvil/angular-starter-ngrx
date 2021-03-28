import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { conversations } from './conversation.db';
import { IConversation } from './conversation.interface';
import { messages } from './message.db';
import { IMessage, MessageDto } from './message.interface';

@Injectable({ providedIn: 'root' })
export class ChatService {
  getConversations(): Observable<IConversation[]> {
    return of(conversations).pipe(
      map((convs) =>
        convs.map((c) => {
          c.chats = messages.filter((m) => m.conversationId === c.id);
          return c;
        })
      ),
    );
  }

  getConversationById(selectedId: string): Observable<IConversation> {
    const conv = conversations.find(c => c.id === selectedId)!;
    const chats = messages.filter(m => m.conversationId === selectedId);
    return of({ ...conv, chats });
  }

  getMessagesByConversation(convId: string): Observable<IMessage[]> {
    return of(messages).pipe(
      map(messages => messages.filter(m => m.conversationId === convId)),
    );
  }

  addNewMessage(dto: MessageDto) {
    const newMessage: IMessage = {
      id: `${Math.floor(Math.random() * 10e9)}`,
      ...dto,
      createdAt: new Date().toISOString(),
      hasSeen: false
    };
    return of(newMessage);
  }
}
