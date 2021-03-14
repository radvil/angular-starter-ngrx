import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tl-add-post',
  templateUrl: './tl-add-post.component.html',
  styleUrls: ['./tl-add-post.component.scss']
})
export class TlAddPostComponent implements OnInit {
  @Input() user!: { id: string, username: string, photo: string };

  constructor() { }

  ngOnInit(): void {
  }

}
