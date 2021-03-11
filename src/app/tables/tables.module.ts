import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { TablesComponent } from './tables.component';
import { ConfirmDialogModule, CustomerFormModule } from '../_shared/components';


@NgModule({
  declarations: [TablesComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    RouterModule.forChild([
      { path: '', component: TablesComponent, data: { title: 'Tables' } }
    ]),

    ConfirmDialogModule,
    CustomerFormModule,
  ]
})
export class TablesModule { }
