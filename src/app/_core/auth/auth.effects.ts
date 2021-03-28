import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { of } from "rxjs"
import { switchMap, map, catchError } from "rxjs/operators"
import * as AuthActions from './auth.actions';
import { AuthService } from "./auth.service";

@Injectable()
export class AuthEffects {
  constructor(
    private _actions$: Actions,
    private _authService: AuthService,
  ) { }

  getAuthUser$ = createEffect(() => this._actions$.pipe(
    ofType(AuthActions.GetAuthUser),
    switchMap(() => {
      return this._authService.getAuthUser().pipe(
        map((user) => AuthActions.GetAuthUserSuccess({ user })),
        catchError(error => of(AuthActions.GetAuthUserFailure({ error })))
      )
    })
  ));
}