import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public images = [
    'assets/images/portrait.png',
    'assets/images/portrait.png',
    'assets/images/portrait.png',
    'assets/images/portrait.png',
    'assets/images/portrait.png',
    'assets/images/portrait.png',
    'assets/images/portrait.png',
    'assets/images/portrait.png',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  clickUser(event: Event) {
    console.log(event);
  }

}
