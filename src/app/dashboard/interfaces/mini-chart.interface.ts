import { ApexAxisChartSeries } from "ng-apexcharts";
export interface IMiniChart {
  chartTheme: 'light' | 'dark';
  title: string;
  subtitle: string;
  series: ApexAxisChartSeries
}