import { ActionReducerMap } from '@ngrx/store';

import { ConversationState, MessageState } from './chat.model';
import { conversationReducer, messageReducer } from './chat.reducer';

export const featureName = 'chat';

export interface ChatState {
  conversations: ConversationState;
  messages: MessageState
}

export const chatReducer: ActionReducerMap<ChatState> = {
  conversations: conversationReducer,
  messages: messageReducer
}