

import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { merge, of } from 'rxjs';

import { LocalStorageService } from '../services';
import { AppState } from '../state';
import * as act from './settings.actions';
import * as sel from './settings.selectors';
import { tap, withLatestFrom } from 'rxjs/operators';

export const SETTINGS_KEY = 'SETTINGS';

const INIT = of('ng-test-init-effect-trigger');

@Injectable()
export class SettingsEffects {
  constructor(
    private _actions$: Actions,
    private _store: Store<AppState>,
    private _overlay: OverlayContainer,
    private _localStorage: LocalStorageService,
    private _ngZone: NgZone,
  ) { }

  public hour = 0;

  changeHour = this._ngZone.runOutsideAngular(() => {
    return setInterval(() => {
      const hour = new Date().getHours();
      if (hour === this.hour) {
        this.hour = hour;
        this._ngZone.run(() => this._store.dispatch(act.ChangeHour({ hour })))
      }
    }, 60_000);
  });

  persistSettings = createEffect(() => {
    return this._actions$.pipe(
      ofType(
        act.ToggleAutoNightMode,
        act.ChangeTheme,
        act.ChangeHour,
      ),
      withLatestFrom(this._store.select(sel.$_settings)),
      tap(([action, settings]) => this._localStorage.setItem(SETTINGS_KEY, settings))
    )
  }, { dispatch: false });

  updateTheme = createEffect(() =>
    merge(INIT, this._actions$.pipe(ofType(act.ChangeTheme)))
      .pipe(
        withLatestFrom(this._store.select(sel.$_effectiveTheme)),
        tap(([action, effectiveTheme]) => {
          const classList = this._overlay.getContainerElement().classList;
          const toBeRemoved = Array.from(classList).filter(c => c.includes('-theme'));
          if (!!toBeRemoved.length) classList.remove(...toBeRemoved);
          classList.add(effectiveTheme);
        })
      ),
    { dispatch: false }
  )
}