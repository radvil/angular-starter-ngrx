import { Injectable } from "@angular/core";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { sales } from "./sales.db";
import { ISales } from "./sales.interface";

@Injectable({ providedIn: 'root' })
export class SalesService {
  public sales$ = new BehaviorSubject<ISales[]>(sales);

  constructor() { }

  getSalesHistory() {
    return this.sales$.pipe(catchError(err => throwError(err)));
  }
}