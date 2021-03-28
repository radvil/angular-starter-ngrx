import { createAction, props } from "@ngrx/store"
import { IConversation, IMessage, MessageDto } from "src/app/_shared/mocks"

/**
 * Conversation Actions
 */
export enum ConvActionTypes {
  GET_CONVERSATIONS = '[Conversation/Api] Get Conversations',
  GET_CONVERSATIONS_SUCCESS = '[Conversation/Api] Get Conversations Success',
  GET_CONVERSATIONS_FAILURE = '[Conversation/Api] Get Conversations Failure',

  GET_CONVERSATION_BY_ID = '[Conversation/Api] Get Conversation By Id',
  GET_CONVERSATION_BY_ID_SUCCESS = '[Conversation/Api] Get Conversation By Id Success',
  GET_CONVERSATION_BY_ID_FAILURE = '[Conversation/Api] Get Conversation By Id Failure',
}

export const GetConversations = createAction(
  ConvActionTypes.GET_CONVERSATIONS,
)
export const GetConversationsSuccess = createAction(
  ConvActionTypes.GET_CONVERSATIONS_SUCCESS,
  props<{ conversations: IConversation[] }>()
)
export const GetConversationsFailure = createAction(
  ConvActionTypes.GET_CONVERSATIONS_FAILURE,
  props<{ error: any }>()
)


export const GetConversationById = createAction(
  ConvActionTypes.GET_CONVERSATION_BY_ID,
  props<{ selectedId: string }>()
)
export const GetConversationByIdSuccess = createAction(
  ConvActionTypes.GET_CONVERSATION_BY_ID_SUCCESS,
  props<{ conversation: IConversation }>()
)
export const GetConversationByIdFailure = createAction(
  ConvActionTypes.GET_CONVERSATION_BY_ID_FAILURE,
  props<{ error: any }>()
)

/**
 * Message Actions
 */
export enum MessageActionTypes {
  GET_MESSAGES_BY_CONVERSATION = '[Message/Api] Get Messages By Conversation',
  GET_MESSAGES_BY_CONVERSATION_SUCCESS = '[Message/Api] Get Messages By Conversation Success',
  GET_MESSAGES_BY_CONVERSATION_FAILURE = '[Message/Api] Get Messages By Conversation Failure',

  DELETE_MESSAGE_BY_ID = '[Message] Delete Messsage By Id',
  CLEAR_MESSAGES = '[] Clear All Messages',

  NEW_MESSAGE = '[Message] New Messsage',
  NEW_MESSAGE_SUCCESS = '[Message] New Messsage Success',
  NEW_MESSAGE_FAILURE = '[Message] New Messsage Failure',
}

export const GetMessagesByConversation = createAction(
  MessageActionTypes.GET_MESSAGES_BY_CONVERSATION,
  props<{ conversationId: string }>()
)
export const GetMessagesByConversationSuccess = createAction(
  MessageActionTypes.GET_MESSAGES_BY_CONVERSATION_SUCCESS,
  props<{ messages: IMessage[] }>()
)
export const GetMessagesByConversationFailure = createAction(
  MessageActionTypes.GET_MESSAGES_BY_CONVERSATION_FAILURE,
  props<{ error: any }>()
)

export const ClearMessages = createAction(
  MessageActionTypes.CLEAR_MESSAGES,
  props<{ conversationId: string }>()
)

export const DeleteMessage = createAction(
  MessageActionTypes.DELETE_MESSAGE_BY_ID,
  props<{ selectedId: string }>()
)

export const NewMessage = createAction(
  MessageActionTypes.NEW_MESSAGE,
  props<{ dto: MessageDto }>()
)
export const NewMessageSuccess = createAction(
  MessageActionTypes.NEW_MESSAGE_SUCCESS,
  props<{ newMessage: IMessage }>()
)
export const NewMessageFailure = createAction(
  MessageActionTypes.NEW_MESSAGE_FAILURE,
  props<{ error: any }>()
)