import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

import { RowItemModule } from '../_shared/components';
import { ProfileComponent } from './profile/profile.component';
import { SocialComponent } from './social.component';
import { TimelineComponent } from './timeline/timeline.component';
import {
  SocialAboutComponent,
  TlIntroComponent,
  TlPhotosComponent,
  TlAddPostComponent,
  TlFriendsComponent,
  TlPostComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: SocialComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { title: 'User Profile' },
      },
      {
        path: 'timeline',
        component: TimelineComponent,
        data: { title: 'User Timeline' },
      },
    ],
  },
];

@NgModule({
  declarations: [
    SocialComponent,
    ProfileComponent,
    TimelineComponent,
    SocialAboutComponent,
    TlIntroComponent,
    TlPhotosComponent,
    TlFriendsComponent,
    TlAddPostComponent,
    TlPostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule,
    MatDividerModule,
    MatRippleModule,
    RowItemModule,
  ],
})
export class SocialModule { }
