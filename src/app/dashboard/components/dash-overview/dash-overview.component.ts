import { Component, Input, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexTheme,
  ApexXAxis,
} from 'ng-apexcharts';

interface IOverviewChartOption {
  grid?: ApexGrid;
  chart?: ApexChart;
  series: ApexAxisChartSeries;
  xAxis: ApexXAxis;
  theme: ApexTheme;
  dataLabels?: ApexDataLabels;
  fill: ApexFill;
}

@Component({
  selector: 'dash-overview',
  templateUrl: './dash-overview.component.html',
  styleUrls: ['./dash-overview.component.scss'],
})
export class DashOverviewComponent implements OnInit {
  public chartOptions!: IOverviewChartOption;
  @Input('series') series!: ApexAxisChartSeries;
  @Input('chartThemeMode') themeMode: 'dark' | 'light' = 'light';
  @Input('xAxis') xAxis!: ApexXAxis;

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      series: this.series,
      chart: {
        toolbar: { show: false },
        height: 350,
        type: 'area',
      },
      grid: { strokeDashArray: 3 },
      theme: { mode: this.themeMode },
      dataLabels: { enabled: false },
      xAxis: this.xAxis!,
      fill: {
        colors: undefined,
        opacity: 0,
        type: 'solid',
      }
    };
  }
}
