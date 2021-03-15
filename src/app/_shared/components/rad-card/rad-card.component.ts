import {
  Component,
  ContentChild,
  HostListener,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { RadCardDirective } from './rad-card.directive';

@Component({
  selector: 'rad-card',
  host: {
    class: 'rad-card',
  },
  template: ` <ng-content></ng-content> `,
  styleUrls: ['./rad-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RadCardComponent {
  constructor(private _rd: Renderer2) {}

  @ContentChild(RadCardDirective) floatIcon!: RadCardDirective;

  @HostListener('mouseenter')
  displayFloatIcon() {
    if (this.floatIcon) {
      this._rd.setStyle(this.floatIcon.el, 'display', 'block');
    }
  }

  @HostListener('mouseleave')
  hideFloatIcon() {
    if (this.floatIcon) {
      this._rd.setStyle(this.floatIcon.el, 'display', 'none');
    }
  }
}
