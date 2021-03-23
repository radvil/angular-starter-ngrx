import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { sortByLatest } from '../../utils/sort-comparer';
import { conversations } from './conversation.db';
import { IConversation } from './conversation.interface';
import { messages } from './message.db';
import { IMessage } from './message.interface';

interface State {
  conversations: IConversation[];
  chats: IMessage[];
  isLoading: boolean;
}

const initalState: State = {
  conversations: conversations,
  chats: messages,
  isLoading: false
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  private readonly _state = new BehaviorSubject<State>(initalState);

  public conversations$ = this.state$.pipe(
    map(state => {
      return state.conversations
        .map((conv) => {
          const chats = this._state.value.chats;
          conv.chats = chats.filter(c => c.conversationId === conv.id);
          return conv;
        })
        .sort(sortByLatest);
    })
  );
  public chats$ = this.state$.pipe(map(state => state.chats.sort(sortByLatest)));
  public isLoading$ = this.state$.pipe(map(state => state.isLoading));

  get state$() {
    return this._state.asObservable();
  }

  constructor() { }

  getConversations(): Observable<IConversation[]> {
    const currentState = this._state.value;
    this._state.next({ ...currentState, isLoading: true });
    return this.conversations$.pipe(
      delay(500),
      tap(res => res && this._state.next({ ...currentState, isLoading: false }))
    );
  }
}