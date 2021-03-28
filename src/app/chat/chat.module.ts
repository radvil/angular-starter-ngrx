import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

import { RadCardModule } from '../_shared/components';
import { RadCommonModule } from '../_shared/pipes';
import { ChatEmptyComponent } from './chat-empty/chat-empty.component';
import { ChatComponent } from './chat.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ChatStoreModule } from './store/chat-store.module';
import { NewChatDialogComponent } from './new-chat-dialog/new-chat-dialog.component';


@NgModule({
  declarations: [ChatComponent, ChatEmptyComponent, ConversationComponent, NewChatDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    MatRippleModule,
    RadCardModule,
    RadCommonModule,
    ChatStoreModule,
  ],
})
export class ChatModule { }
