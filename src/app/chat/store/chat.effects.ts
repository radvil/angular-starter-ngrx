import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ChatService } from 'src/app/_shared/mocks';
import * as chatActions from './chat.actions';

@Injectable()
export class ChatEffects {
  constructor(private _actions: Actions, private _chatService: ChatService) {}

  getConvs$ = createEffect(() =>
    this._actions.pipe(
      ofType(chatActions.GetConversations),
      switchMap(() =>
        this._chatService.getConversations().pipe(
          map((conversations) =>
            chatActions.GetConversationsSuccess({ conversations })
          ),
          catchError((error) =>
            of(chatActions.GetConversationsFailure({ error }))
          )
        )
      )
    )
  );

  getConvById$ = createEffect(() =>
    this._actions.pipe(
      ofType(chatActions.GetConversationById),
      switchMap(({ selectedId }) =>
        this._chatService.getConversationById(selectedId).pipe(
          map((conversation) =>
            chatActions.GetConversationByIdSuccess({ conversation })
          ),
          catchError((error) =>
            of(chatActions.GetConversationByIdFailure({ error }))
          )
        )
      )
    )
  );

  getMessagesByConversation$ = createEffect(() =>
    this._actions.pipe(
      ofType(chatActions.GetMessagesByConversation),
      switchMap(({ conversationId }) =>
        this._chatService.getMessagesByConversation(conversationId).pipe(
          map((messages) =>
            chatActions.GetMessagesByConversationSuccess({ messages })
          ),
          catchError((error) => of(error))
        )
      )
    )
  );

  addNewMessage$ = createEffect(() =>
    this._actions.pipe(
      ofType(chatActions.NewMessage),
      switchMap(({ dto }) =>
        this._chatService.addNewMessage(dto).pipe(
          map((newMessage) => chatActions.NewMessageSuccess({ newMessage })),
          catchError((error) => of(chatActions.NewMessageFailure({ error })))
        )
      )
    )
  );
}
