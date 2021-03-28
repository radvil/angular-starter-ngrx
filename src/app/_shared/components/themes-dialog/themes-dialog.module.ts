import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesDialogComponent } from './themes-dialog.component';
import { MatRippleModule } from '@angular/material/core';



@NgModule({
  declarations: [ThemesDialogComponent],
  imports: [CommonModule, MatRippleModule],
  exports: [ThemesDialogComponent]
})
export class ThemesDialogModule { }
