import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChatState, featureName } from '.';
import { conversationAdapter, messageAdapter } from './chat.model';

const {
  selectEntities: convEntity,
  selectAll: convAll,
} = conversationAdapter.getSelectors();

export const $ChatState = createFeatureSelector<ChatState>(featureName);

/**
 * Conversations selectors
 */
export const $ConvState = createSelector($ChatState, (s) => s.conversations);

export const $Conversations = createSelector($ConvState, convAll);

export const $ConversationEntities = createSelector($ConvState, convEntity);

export const $ConvSelectedId = createSelector($ConvState, (s) => s.selectedId);

export const $ConvIsLoading = createSelector($ConvState, (s) => s.isLoading);

export const $ConvIsLoaded = createSelector($ConvState, (s) => s.isLoaded);

export const $ConvError = createSelector($ConvState, (s) => s.error);

export const $ConversationById = createSelector(
  $ConversationEntities,
  $ConvSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);

/**
 * Message selectors
 */
const {
  selectEntities: messageEntity,
  selectAll: messageAll,
} = messageAdapter.getSelectors();

export const $MessageState = createSelector($ChatState, (s) => s.messages);

export const $Messages = createSelector($MessageState, messageAll);

export const $MessagesEntity = createSelector($MessageState, messageEntity);

export const $MessagesSelectedId = createSelector($MessageState, (s) => s.selectedId);

export const $MessagesIsLoading = createSelector($MessageState, (s) => s.isLoading);

export const $MessagesIsLoaded = createSelector($MessageState, (s) => s.isLoaded);

export const $MessagesError = createSelector($MessageState, (s) => s.error);

export const $MessagesByConversation = createSelector(
  $Messages,
  $ConvSelectedId,
  (messages, convId) => convId ? messages.filter(m => m.conversationId === convId) : undefined
);
