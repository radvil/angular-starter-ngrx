import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTheme,
  ChartComponent,
} from 'ng-apexcharts';

@Component({
  selector: 'dash-mini-chart',
  templateUrl: './dash-mini-chart.component.html',
  styleUrls: ['./dash-mini-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashMiniChartComponent implements OnInit {
  @Input('title') title!: string;
  @Input('subtitle') subtitle!: string;
  @Input('chartColor') themeColor = "#5C77FF";
  @Input('chartTheme') themeMode!: 'light' | 'dark';
  @Input('series') series!: ApexAxisChartSeries;
  public chartOptions!: {
    chart: ApexChart;
    theme: ApexTheme;
    fill: ApexFill;
  };

  @ViewChild('chart') chart!: ChartComponent;

  ngOnInit() {
    this.chartOptions = {
      chart: {
        toolbar: {
          show: false,
        },
        height: 100,
        type: 'area',
        sparkline: {
          enabled: true,
        },
      },
      theme: {
        mode: this.themeMode,
      },
      fill: {
        colors: [this.themeColor],
        opacity: 0.9,
        gradient: {
          gradientToColors: ['white'],
      },
      }
    };
  }
}
