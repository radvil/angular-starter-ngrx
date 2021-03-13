import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tl-intro',
  templateUrl: './tl-intro.component.html',
  styleUrls: ['./tl-intro.component.scss']
})
export class TlIntroComponent implements OnInit {
  public images = [
    'assets/images/portraits/6.png',
    'assets/images/portraits/2.png',
    'assets/images/portraits/3.png'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
