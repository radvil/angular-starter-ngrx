import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rad-card',
  host: {
    class: 'rad-card'
  },
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./rad-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RadCardComponent {
  constructor() { }

}
