import { Component, Inject, OnInit } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { Store } from '@ngrx/store';
import { $_theme, ChangeTheme, Theme } from 'src/app/_core/settings';
import { AppState } from 'src/app/_core/state';

@Component({
  selector: 'app-themes-dialog',
  template: `
    <div class="themes_container">
      <div
        *ngFor="let themeName of data?.themes"
        [style.backgroundColor]="themes[themeName]"
        matRipple
        class="theme"
        [class.active]="themeName === activeTheme"
        (click)="changeTheme(themeName)"
      >
        {{ themes[themeName] }}
      </div>
    </div>
  `,
})
export class ThemesDialogComponent implements OnInit {
  public themes!: { [key: string]: string };
  public activeTheme!: string;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { themes: Theme[] },
    public sheetRef: MatBottomSheetRef<ThemesDialogComponent>,
    private _store: Store<AppState>
  ) {
    if (data.themes) {
      this.themes = this.data.themes.reduce((curr, next) => {
        curr[next] = next === 'rad-blue-theme' ? 'blue' : 'black';
        return curr;
      }, {} as { [key: string]: string });
    }
  }

  ngOnInit(): void {
    this._store.select($_theme).subscribe(t => this.activeTheme = t);
  }

  changeTheme(themeName: Theme) {
    this._store.dispatch(ChangeTheme({ theme: themeName }));
  }
}
