import { createReducer, on, Action } from "@ngrx/store";
import { AuthState, iAuthState } from "./auth.model";
import * as AuthActions from './auth.actions';

const reducer = createReducer(
  iAuthState,

  on(AuthActions.GetAuthUser, state => ({
    ...state,
    isLoading: true,
    isLoaded: false,
  })),
  on(AuthActions.GetAuthUserSuccess, (state, { user }) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    user,
  })),
  on(AuthActions.GetAuthUserFailure, (state, action) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    error: action.error,
  })),
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}