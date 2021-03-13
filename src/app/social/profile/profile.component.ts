import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public images = [
    'assets/images/portraits/1.png',
    'assets/images/portraits/2.png',
    'assets/images/portraits/3.png',
    'assets/images/portraits/4.png',
    'assets/images/portraits/5.png',
    'assets/images/portraits/6.png',
    'assets/images/portraits/7.png',
    'assets/images/portraits/8.png',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  clickUser(event: Event) {
    console.log(event);
  }

}
