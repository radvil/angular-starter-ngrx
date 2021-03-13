import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tl-photos',
  template: `
    <mat-card>
      <div class="card-header">
        <h2>Photos</h2>
        <p class="link" (click)="$event ? showAll.emit($event): null">See All Photos</p>
      </div>
      <mat-divider></mat-divider>
      <div class="item-grid-container">
        <div matRipple class="item" *ngFor="let i of images">
          <img [src]="i" alt="photo" />
        </div>
      </div>
    </mat-card>
  `,
  styleUrls: ['./tl-photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TlPhotosComponent {
  @Input('images') images!: Array<string>;
  @Output('showAll') showAll = new EventEmitter<any>();

  constructor() { }

}
