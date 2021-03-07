export enum Theme {
  BLUE_THEME = 'rad-blue-theme',
  BLACK_THEME = 'rad-black-theme'
}

export interface SettingsState {
  theme: Theme;
  isAutoNightMode: boolean;
  nightTheme: Theme;
  hour: number;
}

export const initialSettingsState = <SettingsState>{
  theme: Theme.BLUE_THEME,
  isAutoNightMode: true,
  nightTheme: Theme.BLACK_THEME,
  hour: 0
}