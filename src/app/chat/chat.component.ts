import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { ChatService, IConversation } from '../_shared/mocks';
import { DrawerService } from './drawer.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;
  public conversations$!: Observable<IConversation[]>;
  public isLoading$!: Observable<boolean>;

  constructor(
    private _drawerService: DrawerService,
    private _chatService: ChatService
  ) { }

  ngOnInit(): void {
    this._drawerService.setDrawer(this.drawer);
    this.conversations$ = this._chatService.getConversations();
    this.isLoading$ = this._chatService.isLoading$;
  }

}
