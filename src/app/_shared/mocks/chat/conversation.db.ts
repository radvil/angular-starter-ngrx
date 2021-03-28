import { users } from '../users/user.db';
import { IConversation } from './conversation.interface';

// total 10
export const conversations: IConversation[] = [
  {
    id: 'c56d6cb8-ad11-4920-b9dd-a2c17a838b56',
    from: {
      ...users[0],
      lastSeen: '2020-03-28T05:16:29Z',
    },
    createdAt: '2020-07-14T06:35:48Z',
    updatedAt: '2020-11-06T06:29:50Z',
    chats: [],
  },
  {
    id: '99c104cc-bac2-4b34-8be1-0f29bbac11e1',
    from: {
      ...users[1],
      lastSeen: '2020-04-28T01:21:46Z',
    },
    createdAt: '2020-05-21T10:57:29Z',
    updatedAt: '2020-05-23T03:51:47Z',
    chats: [],
  },
  {
    id: 'd60b8af5-c12c-4ed2-8250-9754b5d1123b',
    from: {
      ...users[2],
      lastSeen: '2021-01-01T10:28:37Z',
    },
    createdAt: '2020-03-25T04:31:14Z',
    updatedAt: '2020-12-17T15:07:23Z',
    chats: [],
  },
  {
    id: '6a6c4a4e-d32e-41bf-8eb3-fdf639bcf312',
    from: {
      ...users[3],
      lastSeen: '2020-12-13T03:52:11Z',
    },
    createdAt: '2020-05-05T21:23:09Z',
    updatedAt: '2020-05-11T07:41:25Z',
    chats: [],
  },
  {
    id: 'ba19ddda-894e-4fa4-a076-12a713ad830a',
    from: {
      ...users[4],
      lastSeen: '2020-11-20T02:36:29Z',
    },
    createdAt: '2020-08-21T15:20:24Z',
    updatedAt: '2020-12-01T08:28:39Z',
    chats: [],
  },
];
