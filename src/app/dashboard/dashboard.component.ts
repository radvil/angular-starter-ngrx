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
  public pageViewsChartConfig!: IMiniChart;
  public uniqueUsersChartConfig!: IMiniChart;

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this._store
      .select($_theme)
      .pipe(
        takeUntil(this._destroy$)
      )
      .subscribe(theme => {
        const pageViewsNumbers = [53, 22, 50, 33, 63, 54, 25];
        const uniqueUsersNumbers = [15, 64, 99, 121, 77, 33, 111];

        this.pageViewsChartConfig = {
          title: pageViewsNumbers.reduce((a, b) => a + b).toString(),
          subtitle: "Page Views",
          chartTheme: theme === Theme.BLACK_THEME ? 'dark' : 'light',
          series: [
            { name: "Page Views", data:  pageViewsNumbers}
          ]
        };

        this.uniqueUsersChartConfig = {
          title: uniqueUsersNumbers.reduce((a, b) => a + b).toString(),
          subtitle: "Unique Users",
          chartTheme: theme === Theme.BLACK_THEME ? 'dark' : 'light',
          series: [
            { name: "Unique Users", data: uniqueUsersNumbers }
          ]
        }
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
