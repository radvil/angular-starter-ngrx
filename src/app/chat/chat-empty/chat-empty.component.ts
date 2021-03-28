import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DrawerService } from '../drawer.service';
import { NewChatDialogComponent } from '../new-chat-dialog/new-chat-dialog.component';

@Component({
  selector: 'app-chat-empty',
  templateUrl: './chat-empty.component.html',
  styleUrls: ['./chat-empty.component.scss']
})
export class ChatEmptyComponent implements OnInit {

  constructor(
    private _drawerService: DrawerService,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  toggleDrawer() {
    this._drawerService.toggle();
  }

  openNewChatDialog() {
    this._dialog.open(NewChatDialogComponent, {
      width: '444px',
      panelClass: 'new-chat-panel'
    });
  }

}
