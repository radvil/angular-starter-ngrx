import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { $AuthUser } from 'src/app/_core/auth/auth.selectors';
import { AppState } from 'src/app/_core/state';
import { ConfirmDialogComponent } from 'src/app/_shared/components';
import { IMessage, MessageDto } from 'src/app/_shared/mocks';
import { NotificationService } from 'src/app/_shared/services';
import { DrawerService } from '../drawer.service';
import { ChatState } from '../store';
import {
  ClearMessages,
  DeleteMessage,
  GetConversationById,
  GetMessagesByConversation,
  NewMessage,
} from '../store/chat.actions';
import {
  $ConversationById,
  $MessagesByConversation,
  $MessagesIsLoading,
} from '../store/chat.selectors';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
})
export class ConversationComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject();
  private _convId!: string;
  public currentUser$ = this._store.select($AuthUser);
  public conversation$ = this._store.select($ConversationById);
  public isLoading$ = this._store.select($MessagesIsLoading);
  public messages$ = this._store.select($MessagesByConversation);
  public contextMenuPosition = { x: '0px', y: '0px' };
  @ViewChild(MatMenuTrigger, { static: true }) contextMenu!: MatMenuTrigger;
  public newMessage = '';

  constructor(
    private _route: ActivatedRoute,
    private _drawerService: DrawerService,
    private _store: Store<AppState | ChatState>,
    private _dialog: MatDialog,
    private _notification: NotificationService
  ) {}

  ngOnInit(): void {
    this._route.params.pipe(takeUntil(this._destroy$)).subscribe((params) => {
      this._convId = params['conversationId'];
      this._store.dispatch(GetConversationById({ selectedId: this._convId }));
      this._store.dispatch(
        GetMessagesByConversation({ conversationId: this._convId })
      );
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  toggleDrawer() {
    this._drawerService.toggle();
  }

  clearChat() {
    const dialog = this._dialog
      .open(ConfirmDialogComponent, {
        width: '444px',
        data: {
          message: 'Are You Sure ? Note that you can not undo this operation.',
        },
      })
      .beforeClosed()
      .pipe(
        filter((confirmed) => confirmed),
        takeUntil(this._destroy$)
      );

    dialog.subscribe(() => {
      this._store.dispatch(ClearMessages({ conversationId: this._convId }));
      this._notification.success('Chats has been cleared!');
    });

  }

  onContextMenu(event: MouseEvent, item: IMessage) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { item };
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }

  deleteMessage(message: IMessage) {
    const dialog = this._dialog
      .open(ConfirmDialogComponent, {
        width: '444px',
        data: {
          message: 'Are You Sure ? Note that you can not undo this operation.',
        },
      })
      .beforeClosed()
      .pipe(
        filter((confirmed) => confirmed),
        takeUntil(this._destroy$)
      );

    dialog.subscribe(() => {
      this._store.dispatch(DeleteMessage({ selectedId: message.id }));
      this._notification.success('Message deleted!');
    });
  }

  sendMessage(senderId: string, receiverId: string): void {
    const dto: MessageDto = {
      conversationId: this._convId,
      message: this.newMessage,
      senderId,
      receiverId,
    };
    this._store.dispatch(NewMessage({ dto }));
    this.newMessage = '';
  }
}
