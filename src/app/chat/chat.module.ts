import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { RadCardModule } from '../_shared/components';
import { RadCommonModule } from '../_shared/pipes';
import { ChatEmptyComponent } from './chat-empty/chat-empty.component';
import { ChatComponent } from './chat.component';


@NgModule({
  declarations: [ChatComponent, ChatEmptyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChatComponent,
        children: [
          {
            path: '',
            component: ChatEmptyComponent,
            data: { title: 'Start Conversation' }
          }
        ]
      },
    ]),
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    RadCardModule,
    RadCommonModule,
  ],
})
export class ChatModule { }
