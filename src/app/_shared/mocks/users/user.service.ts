import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { users } from './user.db';
import { User } from './user.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() {}

  private readonly _searchResult = new Subject<User[]>();

  public get searchResult$() {
    return this._searchResult.asObservable();
  }

  searchUser(term: string) {
    if (term) {
      const result = users.filter((user) => {
        return user.name.toLowerCase().split(' ').join('').includes(term);
      });
      this._searchResult.next(result);
      return of('ok');
    } else {
      this._searchResult.next([]);
      return;
    }
  }
}
