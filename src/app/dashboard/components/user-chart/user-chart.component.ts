import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  ChartComponent as ApexChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexTheme,
  ApexLegend,
  ApexGrid,
} from 'ng-apexcharts';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { $_theme, Theme } from 'src/app/_core/settings';
import { AppState } from 'src/app/_core/state';

export interface ChartOptions {
  stroke: ApexStroke;
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  theme: ApexTheme;
  legend: ApexLegend;
  grid: ApexGrid;
};

@Component({
  selector: 'user-chart',
  templateUrl: './user-chart.component.html',
  styleUrls: ['./user-chart.component.scss'],
})
export class UserChartComponent implements OnInit, OnDestroy {
  @ViewChild('chart') chart!: ApexChartComponent;
  public chartOptions!: ChartOptions;
  private _chartMode!: "light" | "dark" | undefined;
  private _destroy$ = new Subject();

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this._store
      .select($_theme)
      .pipe(takeUntil(this._destroy$))
      .subscribe((th) => {
        this._chartMode = (th === Theme.BLACK_THEME) ? 'dark' : 'light';
      });

    this._initChart();
  }

  private _initChart(): void {
    this.chartOptions = {
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: ['navy', 'deeppink'],
        width: 2,
        dashArray: 0,
      },
      series: [
        {
          name: 'users',
          data: [53, 22, 50, 33, 63, 54, 25, 77, 81, 45, 66, 77],
        },
        {
          name: 'session',
          data: [5, 23, 44, 77, 43, 18, 36, 54, 9, 18, 33, 55],
        },
      ],
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2020-03-02',
          '2020-04-04',
          '2020-05-14',
          '2020-06-18',
          '2020-07-20',
          '2020-08-02',
          '2020-09-04',
          '2020-10-14',
          '2020-11-18',
          '2020-12-20',
          '2021-01-02',
          '2021-02-04',
        ],
      },
      theme: {
        mode: this._chartMode,
        palette: 'palette6',
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        floating: false,
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial',
        fontWeight: 400,
      },
      grid: {
        strokeDashArray: 3
      }
    };
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
