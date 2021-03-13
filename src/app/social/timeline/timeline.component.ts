import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  public photos = [
    'assets/images/portraits/1.png',
    'assets/images/portraits/2.png',
    'assets/images/portraits/3.png',
    'assets/images/portraits/4.png',
    'assets/images/portraits/5.png',
    'assets/images/portraits/6.png',
    'assets/images/portraits/7.png',
    'assets/images/portraits/8.png',
    'assets/images/portraits/9.png'
  ];
  public friends: Array<{ id: string, username: string, photo: string }> = [
    {
      id: '1',
      username: 'User 1',
      photo: 'assets/images/portraits/1.png'
    },
    {
      id: '2',
      username: 'User 1',
      photo: 'assets/images/portraits/2.png',
    },
    {
      id: '3',
      username: 'User 2',
      photo: 'assets/images/portraits/3.png',
    },
    {
      id: '4',
      username: 'User 3',
      photo: 'assets/images/portraits/4.png',
    },
    {
      id: '5',
      username: 'User 4',
      photo: 'assets/images/portraits/5.png',
    },
    {
      id: '6',
      username: 'User 5',
      photo: 'assets/images/portraits/6.png',
    },
    {
      id: '7',
      username: 'User 6',
      photo: 'assets/images/portraits/7.png',
    },
    {
      id: '8',
      username: 'User 7',
      photo: 'assets/images/portraits/8.png',
    },
    {
      id: '9',
      username: 'User 8',
      photo: 'assets/images/portraits/9.png',
    },
  ];
  public currentUser = {
    id: "1",
    username: "V for Vodka",
    photo: "assets/images/portraits/1.png"
  }

  constructor() { }

  ngOnInit(): void {
  }

  showAllPhotos() {
    alert('Showwing all photos...');
  }

  showAllFriends() {
    alert('Showing all friends...')
  }

  showFriend(userId: string) {
    alert('Showing user with id' + userId);
  }

}
