import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

import { IConversation } from '../_shared/mocks';
import { BreakPointService } from '../_shared/services';
import { DrawerService } from './drawer.service';
import { ChatState } from './store';
import { GetConversations } from './store/chat.actions';
import { $Conversations, $ConvIsLoaded, $ConvIsLoading } from './store/chat.selectors';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, AfterViewInit, OnDestroy {
  private _destroy$ = new Subject();
  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;
  public isHandset = false;
  public conversations$ = this._store.select($Conversations);
  public isLoading$ = this._store.select($ConvIsLoading);
  public isLoaded$ = this._store.select($ConvIsLoaded);

  constructor(
    private _drawerService: DrawerService,
    private _store: Store<ChatState>,
    private _router: Router,
    private _bpService: BreakPointService
  ) {}

  ngOnInit(): void {
    this._store.dispatch(GetConversations());
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  ngAfterViewInit(): void {
    this._drawerService.setDrawer(this.drawer);
    this._bpService.isHandset().subscribe((isHandset) => {
      if (!isHandset) {
        this.drawer.mode = 'side';
        this.drawer.opened = true;
      } else {
        this.isHandset = true;
      }
    });
  }

  goToConversation(conv: IConversation) {
    this._router.navigate(['chat', conv.id]);
    if (this.isHandset) {
      this.drawer.close();
    }
  }
}
