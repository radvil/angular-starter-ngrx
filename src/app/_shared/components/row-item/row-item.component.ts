import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-row-item',
  template: `
    <div class="row-list-item">
      <div class="side-icon">
        <mat-icon *ngIf="!imageSrc; else image" [color]="iconColor">
          {{ iconName }}
        </mat-icon>
        <ng-template #image>
          <img [src]="imageSrc" (click)="clickImage.emit($event)" width="40" />
        </ng-template>
      </div>
      <div class="text">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./row-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowItemComponent {
  @Input('iconName') iconName!: string;
  @Input('iconColor') iconColor!: string;
  @Input('src') imageSrc!: string;
  @Output() clickImage = new EventEmitter<any>();

  constructor() {
  }

}
