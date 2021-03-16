import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgApexchartsModule } from 'ng-apexcharts';

import { RadTimeModule } from '../_shared/pipes';
import { RadCardModule } from '../_shared/components';
import { DashboardComponent } from './dashboard.component';
import {
  UserChartComponent,
  DashIntroComponent,
  DashMiniChartComponent,
  DashTableComponent,
  DashValueCenterComponent,
  DashOverviewComponent
} from './components';

@NgModule({
  declarations: [
    DashboardComponent,
    UserChartComponent,
    DashIntroComponent,
    DashMiniChartComponent,
    DashTableComponent,
    DashValueCenterComponent,
    DashOverviewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        data: { title: 'Dashboard' },
      },
    ]),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTooltipModule,
    NgApexchartsModule,
    RadCardModule,
    RadTimeModule,
  ],
})
export class DashboardModule {}
