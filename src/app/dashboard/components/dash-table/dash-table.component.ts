import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { SalesService, ISales, SalesStatus } from 'src/app/_shared/mocks';

@Component({
  selector: 'dash-table',
  templateUrl: './dash-table.component.html',
  styleUrls: ['./dash-table.component.scss'],
})
export class DashTableComponent implements OnInit {
  public salesDataSource!: MatTableDataSource<ISales>;
  public displayedColumns: string[] = ['status', 'product', 'price', 'date'];
  private _destroy$ = new Subject();

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private _salesService: SalesService) {}

  ngOnInit(): void {
    this._salesService
      .getSalesHistory()
      .pipe(
        tap((res) => {
          this.salesDataSource = new MatTableDataSource(res);
          this.salesDataSource.sort = this.sort;
          this.salesDataSource.paginator = this.paginator;
        }),
        takeUntil(this._destroy$)
      )
      .subscribe();
  }

  getStatusIcon(status: SalesStatus): string {
    switch (status) {
      case SalesStatus.MISSING_PAYMENT:
        return 'money_off';
      case SalesStatus.PENDING_PAYMENT:
        return 'payments';
      case SalesStatus.READY_TO_SHIP:
        return 'local_shipping';
      default:
        return 'checked';
    }
  }

  getStatusColor(status: SalesStatus): string {
    return status === SalesStatus.READY_TO_SHIP
      ? '#4caf50'
      : status === SalesStatus.PENDING_PAYMENT
      ? '#ff9800'
      : 'red';
  }
}
