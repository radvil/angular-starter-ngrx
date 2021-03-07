import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Theme } from 'src/app/_core/settings';

@Component({
  selector: 'app-themes-dialog',
  templateUrl: './themes-dialog.component.html',
  styleUrls: ['./themes-dialog.component.scss']
})
export class ThemesDialogComponent implements OnInit {
  public themes!: { [key: string]: string };

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: { themes: Theme[] }) {
    if (data.themes) {
      this.themes = this.data.themes.reduce((curr, next) => {
        curr[next] = next === 'rad-blue-theme' ? "blue" : "black";
        return curr;
      }, {} as { [key: string]: string });
    }
  }

  ngOnInit(): void {
  }

}
