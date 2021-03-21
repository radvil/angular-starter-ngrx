import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService, IMessage, IUserChat } from '../_shared/mocks';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
