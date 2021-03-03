import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { BreakPointService } from '../_core/services';
import { menuList } from './menu';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit, OnDestroy {
  public menuItems = menuList;
  public isHandset$ = this._bpService.isHandset();
  public sidebarMode!: MatDrawerMode;
  private _destroy$ = new Subject();

  constructor(public _bpService: BreakPointService) { }

  ngOnInit() {
    this.isHandset$.pipe(
      takeUntil(this._destroy$),
      tap(isHandset => this.sidebarMode = isHandset ? 'over' : 'side')
    )
      .subscribe();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
