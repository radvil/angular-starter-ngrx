import { Component, OnInit } from '@angular/core';

export interface TabItem {
  label: string;
  icon: string;
  route: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  public tabItems: TabItem[] = [
    {
      label: 'About',
      icon: 'account_circle',
      route: '/social/profile',
    },
    {
      label: 'Timeline',
      icon: 'whatshot',
      route: '/social/timeline',
    },
    {
      label: 'Friends',
      icon: 'people',
      route: 'xxx',
      disabled: true,
    },
    {
      label: 'Photos',
      icon: 'photo',
      route: 'xxx',
      disabled: true,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
