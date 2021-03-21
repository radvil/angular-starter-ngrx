import { Injectable } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";

@Injectable({ providedIn: 'root' })
export class DrawerService {
  private _drawer!: MatDrawer;

  constructor() { }

  setDrawer(drawer: MatDrawer) {
    this._drawer = drawer;
  }

  toggle(): void {
    this._drawer?.toggle();
  }
}