import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tl-friends',
  templateUrl: './tl-friends.component.html',
  styleUrls: ['./tl-friends.component.scss']
})
export class TlFriendsComponent {
  @Input('friends') friends!: Array<{ id: string; username: string; photo: string }>;
  @Output('showAll') showAll = new EventEmitter<any>();
  @Output('show') showById = new EventEmitter<string>();

  constructor() { }
}
