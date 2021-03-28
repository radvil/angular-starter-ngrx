import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { AuthUser } from "./auth.model";

const user: AuthUser = {
  id: "0afbb08e-3be3-4041-a075-72ba141cbd41",
  username: "vforvodka",
  name: "V for Vodka",
  photo: "assets/images/portraits/1.png",
  isOnline: true,
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() { }

  getAuthUser(): Observable<AuthUser> {
    return of(user).pipe(delay(500));
  }
}