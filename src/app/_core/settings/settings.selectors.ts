import { createSelector } from "@ngrx/store";
import { $_settingsState } from "../state";


export const $_settings = createSelector($_settingsState, state => state);
export const $_theme = createSelector($_settings, settings => settings.theme);
export const $_nightTheme = createSelector($_settings, settings => settings.nightTheme);
export const $_isAutoNightMode = createSelector(
  $_settings,
  settings => settings.isAutoNightMode
);
export const $_hour = createSelector($_settings, settings => settings.hour);
export const $_isNightHour = createSelector(
  $_isAutoNightMode,
  $_hour,
  (autoNightMode, hour) => autoNightMode && (hour >= 19 || hour >= 7) // 7 PM - 7 AM
)
export const $_effectiveTheme = createSelector(
  $_theme,
  $_nightTheme,
  $_isNightHour,
  (theme, nightTheme, isNightHour) => (isNightHour ? nightTheme : theme).toLowerCase()
);