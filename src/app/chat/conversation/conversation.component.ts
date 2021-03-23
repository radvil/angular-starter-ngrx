import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { ChatService, IMessage } from 'src/app/_shared/mocks';
import { DrawerService } from '../drawer.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject();
  private _convId!: string;
  public messages$!: Observable<IMessage[]>;

  public currentUser = {
    id: "5d614b53-8e42-447c-9068-69f24626dd07",
    username: "vforvodka",
    name: "Vnko Bellamy",
    photo: "assets/images/portraits/1.png",
    isOnline: true,
  }

  constructor(
    private _route: ActivatedRoute,
    private _chatService: ChatService,
    private _drawerService: DrawerService
  ) { }

  ngOnInit(): void {
    this._route.params
      .pipe(
        tap(params => this._convId = params['conversationId']),
        takeUntil(this._destroy$)
      ).subscribe();

    this.messages$ = this._chatService.chats$.pipe(
      map(chats => chats.filter(c => c.conversationId === this._convId))
    );
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  isSelf(chatUserId: string): boolean {
    return this.currentUser.id === chatUserId;
  }

  toggleDrawer() {
    this._drawerService.toggle();
  }

}
