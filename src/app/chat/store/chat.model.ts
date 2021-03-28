import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { IConversation, IMessage } from "src/app/_shared/mocks";
import { sortByLatest, sortByOldest } from 'src/app/_shared/utils/sort-comparer';

/**
 * Conversation Model
 */
export const conversationAdapter = createEntityAdapter<IConversation>({
  selectId: conversation => conversation.id,
  sortComparer: sortByLatest,
});

export interface ConversationState extends EntityState<IConversation> {
  isLoading: boolean;
  isLoaded: boolean;
  selectedId: string | null;
  error: any;
}

export const iConversationState = conversationAdapter.getInitialState({
  isLoading: false,
  isLoaded: false,
  selectedId: null,
  error: null
}) as ConversationState;


/**
 * Message Model
 */
export const messageAdapter = createEntityAdapter<IMessage>({
  selectId: message => message.id,
  sortComparer: sortByOldest,
});

export interface MessageState extends EntityState<IMessage> {
  isLoading: boolean;
  isLoaded: boolean;
  selectedId: string | null;
  conversationId: string | null;
  error: any;
}

export const iMessageState = messageAdapter.getInitialState({
  isLoading: false,
  isLoaded: false,
  selectedId: null,
  conversationId: null,
  error: null
}) as MessageState;