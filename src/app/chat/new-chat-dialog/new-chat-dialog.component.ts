import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { fromEvent, Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { AuthUser } from 'src/app/_core/auth/auth.model';
import { $AuthUser } from 'src/app/_core/auth/auth.selectors';
import { AppState } from 'src/app/_core/state';
import { User, UserService } from 'src/app/_shared/mocks';
import { NotificationService } from 'src/app/_shared/services';
import { ChatState } from '../store';
import { NewMessage } from '../store/chat.actions';

@Component({
  selector: 'app-new-chat-dialog',
  templateUrl: './new-chat-dialog.component.html',
  styleUrls: ['./new-chat-dialog.component.scss'],
})
export class NewChatDialogComponent implements OnInit, AfterViewInit {
  private _destroy$ = new Subject();
  public filteredUsers$!: Observable<User[]>;
  public mode: 'SEARCH' | 'CHAT' = 'SEARCH';
  @ViewChild('searchInput') input!: ElementRef<HTMLInputElement>;
  public selectedUser!: User;
  public authUser!: AuthUser;
  public form: FormGroup = new FormGroup({
    message: new FormControl(''),
    senderId: new FormControl(''),
    receiverId: new FormControl(''),
  });

  constructor(
    private _userService: UserService,
    private _store: Store<AppState | ChatState>,
    private _notification: NotificationService,
    public dialogRef: MatDialogRef<NewChatDialogComponent>
  ) { }

  ngOnInit(): void {
    this.filteredUsers$ = this._userService.searchResult$;
    this._store.select($AuthUser).subscribe((u) => {
      if (u) {
        this.authUser = u;
        this.form.patchValue({ senderId: u.id });
      }
    });
  }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        map((event) => (event.target as HTMLInputElement).value),
        tap((value) => {
          this._userService.searchUser(value);
        }),
        takeUntil(this._destroy$)
      )
      .subscribe();
  }

  openChat(user: User) {
    this.mode = 'CHAT';
    this.selectedUser = user;
    this.form.patchValue({ receiverId: user.id });
  }

  submit() {
    this._store.dispatch(NewMessage({ dto: this.form.value }));
    this._notification.success('Success!');
    this.dialogRef.close();
  }
}
