import { Action, createReducer, on } from "@ngrx/store";
import { initialSettingsState, SettingsState } from "./settings.model";
import * as act from './settings.actions';

const reducer = createReducer(
  initialSettingsState,
  on(
    act.ChangeHour,
    act.ToggleAutoNightMode,
    act.ChangeHour,
    (state, action) => ({...state, action})
  ),
)

export function settingsReducer(state: SettingsState | undefined, action: Action) {
  return reducer(state, action);
}