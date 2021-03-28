import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { chatReducer, featureName } from '.';
import { ChatEffects } from './chat.effects';


@NgModule({
  imports: [
    StoreModule.forFeature(featureName, chatReducer),
    EffectsModule.forFeature([ChatEffects])
  ]
})
export class ChatStoreModule { }
