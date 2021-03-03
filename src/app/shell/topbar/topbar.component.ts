import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BreakPointService } from 'src/app/_core/services';
import { $_theme, ChangeTheme, Theme, ToggleAutoNightMode, } from 'src/app/_core/settings';
import { AppState } from 'src/app/_core/state';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit, OnDestroy {
  public hidden = false;
  public isHandset$!: Observable<boolean>;
  private _currentTheme!: Theme;
  private _destroy$ = new Subject();
  @Output('toggleSideBar') clickMenu = new EventEmitter();

  constructor(
    private _route: ActivatedRoute,
    private _bpService: BreakPointService,
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this._store
      .select($_theme)
      .pipe(takeUntil(this._destroy$))
      .subscribe(theme => {
        this._currentTheme = theme;
      });

    this.isHandset$ = this._bpService.isHandset();
    // TODO GEt current route and match to hide topbar
    // console.log(this._route.children);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  toggleDarkMode(): void {
    const theme = (this._currentTheme === Theme.DARK_THEME)
      ? Theme.LIGHT_THEME
      : Theme.DARK_THEME
    this._store.dispatch(ChangeTheme({ theme }));
  }

}
