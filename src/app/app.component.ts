import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAuthUser } from './_core/auth/auth.actions';
import { AppState } from './_core/state';

@Component({
  selector: 'app-root',
  template: `
    <app-shell></app-shell>
  `
})
export class AppComponent {
  constructor(private _store: Store<AppState>){
    _store.dispatch(GetAuthUser());
  }
}
