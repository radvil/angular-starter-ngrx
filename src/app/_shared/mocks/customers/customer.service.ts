import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, throwError } from "rxjs";
import { delay, tap } from "rxjs/operators";
import { sortByLatest } from "../../utils/sort-comparer";
import { CustomerLabel, IColumnSub, ICustomer } from "./customer.interface";
import { customers } from "./customers.db";


@Injectable()
export class CustomerService {
  private _customerSub = new BehaviorSubject<ICustomer[]>(
    customers.sort(sortByLatest)
  );
  private _isLoading = new BehaviorSubject<boolean>(false);
  private _columnSub = new BehaviorSubject<IColumnSub[]>([
    { columnName: 'selections', show: false },
    { columnName: 'photo', show: true },
    { columnName: 'name', show: true },
    { columnName: 'firstName', show: false },
    { columnName: 'lastName', show: false },
    { columnName: 'contact', show: true },
    { columnName: 'address', show: true },
    { columnName: 'street', show: false },
    { columnName: 'zipCode', show: false },
    { columnName: 'city', show: false },
    { columnName: 'labels', show: true },
    { columnName: 'createdAt', show: true },
    { columnName: 'action', show: true }
  ]);
  private _labelSub = new BehaviorSubject<CustomerLabel[]>([
    CustomerLabel.NEW,
    CustomerLabel.LEAD,
    CustomerLabel.IN_PROGRESS,
    CustomerLabel.COMPLETED
  ]);

  constructor() { }

  getCustomers(): Observable<ICustomer[]> {
    return this._customerSub.asObservable().pipe(
      delay(500),
      tap(_ => this._isLoading.next(false))
    );
  }

  addCustomer(newCustomer: ICustomer) {
    newCustomer.labels = [CustomerLabel.NEW];
    this.updateCustomerState([...this._customerSub.value, newCustomer]);
  }

  updateCustomer(customer: ICustomer) {
    const foundIndex = this._customerSub.value.findIndex(c => c.id === customer.id);
    this._customerSub.value.splice(foundIndex, 1);

    const newState = [...this._customerSub.value, customer];
    this.updateCustomerState(newState);
  }

  deleteCustomer(customerId: string) {
    this.updateCustomerState(this._customerSub.value?.filter(c => c.id !== customerId));
  }

  deleteMultiCustomers(customerIds: string[]) {
    customerIds.forEach(id => {
      const filtered = this._customerSub.value?.filter(c => c.id !== id);
      this.updateCustomerState(filtered);
    });
  }

  getColumnOptions() {
    return this._columnSub.asObservable();
  }

  toggleColumn(index: number) {
    this._columnSub.value[index].show = !this._columnSub.value[index].show;
    this._columnSub.next(this._columnSub.value);
  }

  getLabelOptions() {
    return this._labelSub.asObservable();
  }

  updateCustomerState(customers: ICustomer[]) {
    this._customerSub.next(
      customers?.sort(sortByLatest)
    );
  }

  updateCustomerLabel(customerId: string, newLabel: CustomerLabel) {
    const found = this._customerSub.value?.find(c => c.id === customerId);
    if (found) {
      const updated = this._customerSub.value?.map(c => {
        if (c.id === customerId) {
          if (!c.labels?.includes(newLabel)) {
            c.labels = [...c.labels, newLabel];
          } else {
            c.labels = c.labels.filter(l => l !== newLabel);
          }
        }
        return c;
      });
      this.updateCustomerState(updated);
    } else {
      throwError(() => of({
        status: 404,
        message: 'Not found'
      }));
    }
  }
}