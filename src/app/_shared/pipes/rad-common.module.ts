import { NgModule } from '@angular/core';
import { RelativeTimePipe } from './rad-time/relative-time.pipe';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [RelativeTimePipe, TruncatePipe],
  exports: [RelativeTimePipe, TruncatePipe],
})
export class RadCommonModule { }
