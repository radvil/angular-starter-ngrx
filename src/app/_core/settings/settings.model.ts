export enum Theme {
  LIGHT_THEME = 'rad-light-theme',
  DARK_THEME = 'rad-dark-theme'
}

export interface SettingsState {
  theme: Theme;
  isAutoNightMode: boolean;
  nightTheme: Theme;
  hour: number;
}

export const initialSettingsState = <SettingsState>{
  theme: Theme.LIGHT_THEME,
  isAutoNightMode: true,
  nightTheme: Theme.DARK_THEME,
  hour: 0
}