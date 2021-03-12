import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RowItemComponent } from './row-item.component';


@NgModule({
  declarations: [RowItemComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [RowItemComponent],
})
export class RowItemModule { }
