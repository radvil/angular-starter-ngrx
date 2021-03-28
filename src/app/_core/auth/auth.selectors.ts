import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.model";

export const $AuthState = createFeatureSelector<AuthState>('auth');

export const $AuthUser = createSelector($AuthState, s => s.user);

export const $AuthIsLoading = createSelector($AuthState, s => s.isLoading);

export const $AuthIsLoaded = createSelector($AuthState, s => s.isLoaded);

export const $AuthError = createSelector($AuthState, s => s.error);