import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadCardComponent } from './rad-card.component';
import { RadCardDirective } from './rad-card.directive';


@NgModule({
  declarations: [RadCardComponent, RadCardDirective],
  imports: [CommonModule],
  exports: [RadCardComponent, RadCardDirective]
})
export class RadCardModule { }
