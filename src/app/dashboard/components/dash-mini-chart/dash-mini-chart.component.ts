import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTheme,
  ApexLegend,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexGrid
} from 'ng-apexcharts';

@Component({
  selector: 'dash-mini-chart',
  templateUrl: './dash-mini-chart.component.html',
  styleUrls: ['./dash-mini-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashMiniChartComponent {
  @ViewChild('chart') chart!: ChartComponent;

  public chartOptions!: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    theme: ApexTheme;
  };

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Page Views',
          data: [53, 22, 50, 33, 63, 54, 25],
        },
      ],
      chart: {
        toolbar: {
          show: false,
        },
        height: 100,
        type: 'area',
        sparkline: {
          enabled: true
        }
      },
      theme: {
        mode: 'light',
        palette: 'palette6',
      },
    };
  }
}
