import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';

import { RowItemModule } from '../_shared/components';
import { SocialAboutComponent } from './components/social-about/social-about.component';
import { ProfileComponent } from './profile/profile.component';
import { SocialComponent } from './social.component';
import { TimelineComponent } from './timeline/timeline.component';


const routes: Routes = [
  {
    path: '',
    component: SocialComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { title: 'User Profile' }
      },
      {
        path: 'timeline',
        component: TimelineComponent,
        data: { title: 'User Timeline' }
      },
    ]
  }
];

@NgModule({
  declarations: [
    SocialComponent,
    ProfileComponent,
    TimelineComponent,
    SocialAboutComponent,
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

    RowItemModule,
  ]
})
export class SocialModule { }
