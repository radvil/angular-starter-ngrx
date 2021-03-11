import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fromEvent, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { BreakPointService } from '../_core/services';

import {
  ConfirmDialogComponent,
  CustomerFormComponent,
  ICustomerDialogData,
} from '../_shared/components';
import {
  IColumnSub,
  ICustomer,
  CustomerService,
  CustomerLabel,
} from '../_shared/mocks';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  providers: [CustomerService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablesComponent implements OnInit, AfterViewInit, OnDestroy {
  private _destroy$ = new Subject();
  public customersDataSource!: MatTableDataSource<ICustomer>;
  public customerSelections = new SelectionModel<ICustomer>(true, []);
  public headerMode!: string;
  public isHandset!: boolean;
  public columnOptions!: IColumnSub[];
  public visibleColumns!: string[];
  public labelOptions!: CustomerLabel[];
  public totalResults = 0;
  public contextMenuPosition = { x: '0px', y: '0px' };
  
  @ViewChild(MatSort, { static: true }) public sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) public paginator!: MatPaginator;
  @ViewChild(MatMenuTrigger, { static: true }) contextMenu!: MatMenuTrigger;

  constructor(
    private _customerService: CustomerService,
    private _dialog: MatDialog,
    private _bpService: BreakPointService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this._customerService
      .getLabelOptions()
      .pipe(
        tap((labels) => {
          this.labelOptions = labels;
        }),
        takeUntil(this._destroy$),
      )
      .subscribe();

    this._customerService
      .getColumnOptions()
      .pipe(
        tap((items) => {
          this.columnOptions = items;
          this.visibleColumns = this.columnOptions
          .filter((c) => !!c.show)
          .map((c) => c.columnName);
        }),
        takeUntil(this._destroy$),
      )
      .subscribe();

    this._customerService
      .getCustomers()
      .pipe(
        tap((customers) => {
          this.customersDataSource = new MatTableDataSource(customers);
          this.customersDataSource.paginator = this.paginator;
          this.customersDataSource.sort = this.sort;
        }),
        takeUntil(this._destroy$),
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    if (this.selectionsLength) {
      this.headerMode = 'SELECT';
    }

    this._bpService
      .isHandset()
      .pipe(takeUntil(this._destroy$))
      .subscribe((isHandset) => (this.isHandset = isHandset));
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public toggleColumnVisibility(index: number) {
    this._customerService.toggleColumn(index);
  }

  get selectionsLength(): number {
    return this.customerSelections.selected.length;
  }

  get searchResultText(): string {
    return this.totalResults ? `${this.totalResults} matched results` : '🎵 🎵';
  }

  /** Whether the number of selected elements matches the total number of rows. */
  get isAllSelected(): boolean {
    return this.selectionsLength === this.customersDataSource.data.length;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAndSwitchMode(customer?: ICustomer) {
    if (!~this.visibleColumns.indexOf('selections')) {
      const columnIndex = this.columnOptions.findIndex(c => c.columnName === 'selections');
      this.toggleColumnVisibility(columnIndex);
    }

    if (customer && 'id' in customer) {
      this.customerSelections.toggle(customer);
    } else {
      this.isAllSelected
        ? this.customerSelections.clear()
        : this.customersDataSource.data?.forEach((c) =>
          this.customerSelections.select(c)
        );
    }
    this.headerMode = 'SELECT';
  }

  undoSelection() {
    this.headerMode = 'DEFAULT';

    if (~this.visibleColumns.indexOf('selections')) {
      const columnIndex = this.columnOptions.findIndex(c => c.columnName === 'selections');
      this.toggleColumnVisibility(columnIndex);
    }
    if (this.customerSelections.selected.length) {
      this.customerSelections.clear();
    }
    if (this.customersDataSource.filter) {
      this.customersDataSource.filter = '';
      this.totalResults = 0;
    }
  }

  deleteSelections(singleId?: string): void {
    const selectionIds = this.customerSelections.selected?.map((row) => row.id);
    const word = selectionIds.length > 1 ? 'customers' : 'customer';
    const dialogBeforeClosed$ = this._dialog
      .open(ConfirmDialogComponent, {
        data: { message: `Delete selected ${word} ?` },
        width: '300px',
      })
      .beforeClosed()
      .pipe(
        filter((confirmed) => confirmed),
        tap(() => {
          if (singleId) {
            this._customerService.deleteCustomer(singleId);
          } else if (selectionIds.length) {
            this._customerService.deleteMultiCustomers(selectionIds);
            this.customerSelections.clear();
          }
        }),
        takeUntil(this._destroy$)
      );

    dialogBeforeClosed$.subscribe();
  }

  search(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    fromEvent(input, 'keyup')
      .pipe(
        filter(() => this.headerMode === 'SEARCH'),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.customersDataSource.filter = input.value.trim().toLowerCase();
          /* need to check whether input is not empty to update totalResults */
          if (input.value) {
            this.totalResults = this.customersDataSource.filteredData.length;
          } else {
            this.totalResults = 0;
          }
        }),
        takeUntil(this._destroy$),
      )
      .subscribe();
  }

  getCustomerFullname(customer: ICustomer): string {
    return `${customer.firstName} ${customer.lastName}`;
  }

  getCustomerAddress(customer: ICustomer): string {
    const { city, street, zipCode } = customer.address;
    return `${street}, ${zipCode} ${city}`;
  }

  hasLabel(customer: ICustomer, labelName: CustomerLabel): boolean {
    return customer.labels?.includes(labelName);
  }

  getContextMenuSelectText(customer: ICustomer) {
    console.log(this.customerSelections.isSelected(customer))
  }

  updateCustomerLabel(customerId: string, labelName: CustomerLabel): void {
    this._customerService.updateCustomerLabel(customerId, labelName);
  }

  openCustomerForm(mode: 'NEW' | 'EDIT', customer?: ICustomer) {
    const dialogBeforeClosed$ = this._dialog
      .open(CustomerFormComponent, {
        data: <ICustomerDialogData>{
          customer: (mode === 'EDIT' || customer) ? customer : null,
          mode: mode,
        },
        panelClass: ['rad-dialog-overlay'],
      })
      .beforeClosed()
      .pipe(
        filter((formValue) => !!formValue),
        tap((formValue: ICustomer) => {
          if (mode === 'NEW') {
            this._customerService.addCustomer(formValue);
          }
          else if (mode === 'EDIT' && customer) {
            formValue = { ...customer, ...formValue };
            this._customerService.updateCustomer(formValue);
          }
        }),
        takeUntil(this._destroy$),
      );

    dialogBeforeClosed$.subscribe(() => {
      this._snackBar.open('Success', 'close', { duration: 3000 });
    });
  }

  onContextMenu(event: MouseEvent, customer: ICustomer) {
      event.preventDefault();
      this.contextMenuPosition.x = event.clientX + 'px';
      this.contextMenuPosition.y = event.clientY + 'px';
      this.contextMenu.menuData = { item: customer };
      this.contextMenu.menu.focusFirstItem('mouse');
      this.contextMenu.openMenu();
  }
}
