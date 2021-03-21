import { Component, Inject, OnInit } from '@angular/core';
import { DrawerService } from '../drawer.service';

@Component({
  selector: 'app-chat-empty',
  templateUrl: './chat-empty.component.html',
  styleUrls: ['./chat-empty.component.scss']
})
export class ChatEmptyComponent implements OnInit {

  constructor(
    private _drawerService: DrawerService
  ) { }

  ngOnInit(): void {
  }

  toggleDrawer() {
    this._drawerService.toggle();
  }

}
