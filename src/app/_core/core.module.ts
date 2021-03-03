import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// 3rd parties libs
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { environment } from 'src/environments/environment';
import { metaReducers, reducer } from './state';
import { RouterStateService } from './services/router-serializer';
import { SettingsEffects } from './settings/settings.effects';

const PROVIDERS = [
  { provide: RouterStateSerializer, useClass: RouterStateService }
];

@NgModule({
  providers: [...PROVIDERS],
  imports: [
    HttpClientModule,

    // 3rd parties
    StoreModule.forRoot(reducer, { metaReducers }),
    EffectsModule.forRoot([SettingsEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'Angular Test',
      logOnly: environment.production
    }),
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
