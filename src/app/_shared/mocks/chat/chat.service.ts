import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { sortByLatest } from '../../utils/sort-comparer';
import { conversations } from './conversation.db';
import { IConversation } from './conversation.interface';
import { messages } from './message.db';

interface State {
  conversations: IConversation[];
  isLoading: boolean;
}

const initalState: State = {
  conversations: mergeChatsToConversation(conversations).sort(sortByLatest),
  isLoading: false
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  private readonly _state = new BehaviorSubject<State>(initalState);
  public conversations$ = this.state$.pipe(map(state => state.conversations));
  public isLoading$ = this.state$.pipe(map(state => state.isLoading));

  get state$() {
    return this._state.asObservable();
  }

  constructor() {}

  getConversations(): Observable<IConversation[]> {
    return this.conversations$;
  }
}

function mergeChatsToConversation(conversations: IConversation[]) {
  return conversations.map((conv) => {
    conv.chats = filterChatsByConversationId(conv.id);
    return conv;
  });
}

function filterChatsByConversationId(convId: string) {
  return messages.filter((m) => m.conversationId === convId);
}
