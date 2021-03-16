import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { $_theme, Theme } from '../_core/settings';
import { AppState } from '../_core/state';
import { IMiniChart } from './interfaces/mini-chart.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private _destroy$ = new Subject();
  public chartThemeMode!: "light" | "dark";
  public pageViewsChartConfig!: IMiniChart;
  public uniqueUsersChartConfig!: IMiniChart;
  public overviewSeries!: any;
  public overviewXAxis!: any;

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this._store
      .select($_theme)
      .pipe(
        takeUntil(this._destroy$)
      )
      .subscribe(theme => {
        this.chartThemeMode = theme === Theme.BLACK_THEME ? 'dark' : 'light';
        this._initChartValues();
      });

  }

  private _initChartValues(): void {
    const pageViewsNumbers = [53, 22, 50, 33, 63, 54, 25];
    const uniqueUsersNumbers = [15, 64, 9, 121, 77, 33, 99];
    this.overviewSeries = [{ name: 'users', data: uniqueUsersNumbers }];
    this.overviewXAxis = {
      type: 'datetime',
      categories: [
        '2020-09-04',
        '2020-10-14',
        '2020-11-18',
        '2020-12-20',
        '2021-01-02',
        '2021-02-04',
      ]
    };

    this.pageViewsChartConfig = {
      title: pageViewsNumbers.reduce((a, b) => a + b).toString(),
      subtitle: "Page Views",
      chartTheme: this.chartThemeMode!,
      series: [
        { name: "Page Views", data: pageViewsNumbers }
      ]
    };

    this.uniqueUsersChartConfig = {
      title: uniqueUsersNumbers.reduce((a, b) => a + b).toString(),
      subtitle: "Unique Users",
      chartTheme: this.chartThemeMode!,
      series: [
        { name: "Unique Users", data: uniqueUsersNumbers }
      ]
    }
  };

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
