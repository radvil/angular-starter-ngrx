import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

import { RadCardModule } from '../_shared/components';
import { DashboardComponent } from './dashboard.component';
import { UserChartComponent, DashIntroComponent, DashMiniChartComponent } from './components';


@NgModule({
  declarations: [DashboardComponent, UserChartComponent, DashIntroComponent, DashMiniChartComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        data: { title: 'Dashboard' }
      }
    ]),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgApexchartsModule,
    RadCardModule
  ]
})
export class DashboardModule { }
