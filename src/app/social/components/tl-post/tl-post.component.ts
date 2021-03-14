import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'tl-post',
  templateUrl: './tl-post.component.html',
  styleUrls: ['./tl-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TlPostComponent {
  @Input('user') user!: { id: string; username: string; photo: string };
  constructor() { }
}
