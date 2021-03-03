import { createAction, props } from "@ngrx/store";
import { Theme } from "./settings.model";

export const ChangeTheme = createAction(
  '[Settings] Change Theme',
  props<{ theme: Theme }>()
);

export const ToggleAutoNightMode = createAction(
  '[Settings] Toggle Auto Night Mode',
  props<{ isAutoNightMode: boolean }>()
)

export const ChangeHour = createAction(
  '[Settings] Change Hour',
  props<{ hour: number }>()
)