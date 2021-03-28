import { createReducer, on } from '@ngrx/store';
import {
  conversationAdapter,
  iConversationState,
  iMessageState,
  messageAdapter,
} from './chat.model';
import * as convAction from './chat.actions';

export const conversationReducer = createReducer(
  iConversationState,

  on(convAction.GetConversations, (state) => {
    return { ...state, isLoaded: false, isLoading: true };
  }),
  on(convAction.GetConversationsSuccess, (state, { conversations }) => {
    return conversationAdapter.setAll(conversations, {
      ...state,
      isLoaded: true,
      isLoading: false,
    });
  }),
  on(convAction.GetConversationsFailure, (state, { error }) => {
    return { ...state, isLoading: false, error };
  }),

  on(convAction.GetConversationById, (state, { selectedId }) => {
    return { ...state, isLoaded: false, isLoading: true, selectedId };
  }),
  on(convAction.GetConversationByIdSuccess, (state, { conversation }) => {
    return conversationAdapter.upsertOne(conversation, {
      ...state,
      isLoaded: true,
      isLoading: false,
    });
  })
);

export const messageReducer = createReducer(
  iMessageState,

  on(convAction.GetMessagesByConversation, (state, { conversationId }) => {
    return { ...state, isLoaded: false, isLoading: true, conversationId };
  }),
  on(convAction.GetMessagesByConversationSuccess, (state, { messages }) => {
    return messageAdapter.setAll(messages, {
      ...state,
      isLoaded: true,
      isLoading: false,
    });
  }),
  on(convAction.GetMessagesByConversationFailure, (state, { error }) => {
    return { ...state, isLoading: false, error };
  }),

  on(convAction.ClearMessages, (state, { conversationId }) => {
    const messageIds = Object.keys(state.entities).reduce((prev, current) => {
      if (state.entities[current]?.conversationId === conversationId) {
        prev.push(current);
      }
      console.log(prev.length);
      return prev;
    }, [] as string[]);

    return messageAdapter.removeMany(messageIds, {
      ...state,
      isLoaded: false,
      isLoading: true,
    });
  }),

  on(convAction.DeleteMessage, (state, { selectedId }) => {
    return messageAdapter.removeOne(selectedId, {
      ...state,
      isLoaded: false,
      isLoading: true,
    });
  }),

  on(convAction.NewMessage, (state) => {
    return {
      ...state,
      isLoaded: false,
      isLoading: true,
    };
  }),

  on(convAction.NewMessageSuccess, (state, { newMessage: message }) => {
    return messageAdapter.addOne(message, {
      ...state,
      isLoaded: true,
      isLoading: false,
    });
  }),

  on(convAction.NewMessageFailure, (state, { error }) => {
    return {
      ...state,
      isLoaded: false,
      isLoading: false,
      error,
    };
  })
);
