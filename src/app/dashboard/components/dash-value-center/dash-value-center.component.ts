import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ValueCenterColor } from '../../interfaces/value-center-theme.type';

@Component({
  selector: 'dash-value-center',
  templateUrl: './dash-value-center.component.html',
  styleUrls: ['./dash-value-center.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashValueCenterComponent {
  @Input('color') themeColor: ValueCenterColor = "default";
  @Input('icons') icons: [string, string] = ['people', 'keyboard_arrow_up'];
  @Input('title') title = "title";
  @Input('subtitle') subtitle = "subtitle";
  @Input('footerText') footerText = "footerText";
}
