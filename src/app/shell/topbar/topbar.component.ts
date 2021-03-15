import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { BreakPointService } from 'src/app/_core/services';
import { $_theme, ChangeTheme, Theme } from 'src/app/_core/settings';
import { AppState } from 'src/app/_core/state';
import { ThemesDialogComponent } from 'src/app/_shared/components';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit, OnDestroy {
  public hidden = false;
  public isHandset$!: Observable<boolean>;
  public currentTheme!: Theme;
  private _destroy$ = new Subject();
  @Output('toggleSideBar') clickMenu = new EventEmitter();
  @ViewChild('topMenu', {static:true}) topMenu!: ElementRef<HTMLButtonElement>;

  constructor(
    private _route: ActivatedRoute,
    private _bpService: BreakPointService,
    private _store: Store<AppState>,
    public bottomSheet: MatBottomSheet,
  ) { }

  get toolbarColor(): string {
    return this.currentTheme === Theme.BLUE_THEME ? "primary" : "";
  }

  ngOnInit(): void {
    this._store
      .select($_theme)
      .pipe(takeUntil(this._destroy$))
      .subscribe(theme => {
        this.currentTheme = theme;
      });

    this.isHandset$ = this._bpService.isHandset();
    // TODO GEt current route and match to hide topbar
    // console.log(this._route.children);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  openThemeMenu(): void {
    this.bottomSheet.open(ThemesDialogComponent, {
      panelClass: 'themes-menu-dialog',
      data: {
        themes: [Theme.BLUE_THEME, Theme.BLACK_THEME]
      }
    });
  }

  onToggleDarkMode(): void {
    const theme = (this.currentTheme === Theme.BLACK_THEME)
      ? Theme.BLUE_THEME
      : Theme.BLACK_THEME
    this._store.dispatch(ChangeTheme({ theme }));
  }

}
