import { createAction, props } from "@ngrx/store"
import { AuthUser } from "./auth.model"

export enum AuthActionTypes {
  GET_AUTH_USER = '[Auth/Api] Get AuthUser',
  GET_AUTH_USER_SUCCESS = '[Auth/Api] Get AuthUser Success',
  GET_AUTH_USER_FAILURE = '[Auth/Api] Get AuthUser Failure',
}

export const GetAuthUser = createAction(
  AuthActionTypes.GET_AUTH_USER,
)
export const GetAuthUserSuccess = createAction(
  AuthActionTypes.GET_AUTH_USER_SUCCESS,
  props<{ user: AuthUser }>()
)
export const GetAuthUserFailure = createAction(
  AuthActionTypes.GET_AUTH_USER_FAILURE,
  props<{ error: Error }>()
)
