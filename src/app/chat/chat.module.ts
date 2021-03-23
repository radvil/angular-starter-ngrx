import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { RadCardModule } from '../_shared/components';
import { RadCommonModule } from '../_shared/pipes';
import { ChatComponent } from './chat.component';
import { ChatEmptyComponent } from './chat-empty/chat-empty.component';
import { ConversationComponent } from './conversation/conversation.component';


@NgModule({
  declarations: [ChatComponent, ChatEmptyComponent, ConversationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChatComponent,
        children: [
          {
            path: '',
            redirectTo: 'start-conversation'
          },
          {
            path: 'start-conversation',
            component: ChatEmptyComponent,
            data: { title: 'Start Conversation' }
          },
          {
            path: ':conversationId',
            component: ConversationComponent,
            data: { title: 'Conversation' }
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
