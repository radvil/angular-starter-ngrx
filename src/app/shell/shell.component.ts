import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { BreakPointService } from '../_core/services';
import { $_theme, Theme } from '../_core/settings';
import { AppState } from '../_core/state';
import { menuList } from './menu';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit, OnDestroy {
  public menuItems = menuList;
  public isHandset$ = this._bpService.isHandset();
  public theme$!: Observable<Theme>;
  public sidebarMode!: MatDrawerMode;
  private _destroy$ = new Subject();

  constructor(
    public _bpService: BreakPointService,
    private _store: Store<AppState>
  ) { }

  ngOnInit() {
    this.theme$ = this._store.select($_theme);
    this.isHandset$.pipe(
      tap(isHandset => this.sidebarMode = isHandset ? 'over' : 'side'),
      takeUntil(this._destroy$),
    )
      .subscribe();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
