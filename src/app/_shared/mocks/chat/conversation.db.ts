import { IConversation } from "./conversation.interface";

// total 10
export const conversations: IConversation[] = [
  {
    id: 'c56d6cb8-ad11-4920-b9dd-a2c17a838b56',
    from: {
      id: '0afbb08e-3be3-4041-a075-72ba141cbd41',
      username: 'brose0',
      name: 'Berkie Rose',
      photo: 'assets/images/portraits/2.png',
      lastSeen: '2020-03-28T05:16:29Z',
      isOnline: true,
    },
    createdAt: '2020-07-14T06:35:48Z',
    updatedAt: '2020-11-06T06:29:50Z',
    chats: [],
  },
  {
    id: '99c104cc-bac2-4b34-8be1-0f29bbac11e1',
    from: {
      id: 'f428ccf3-ac78-4026-a8c0-5014b84d9e2f',
      username: 'sdaily1',
      name: 'Sargent Daily',
      photo: 'assets/images/portraits/2.png',
      lastSeen: '2020-04-28T01:21:46Z',
      isOnline: true,
    },
    createdAt: '2020-05-21T10:57:29Z',
    updatedAt: '2020-05-23T03:51:47Z',
    chats: [],
  },
  {
    id: 'd60b8af5-c12c-4ed2-8250-9754b5d1123b',
    from: {
      id: '9fd37f22-a8b0-4449-add1-8ed681330558',
      username: 'driley2',
      name: 'Dani Riley',
      photo:
        'assets/images/portraits/4.png',
      lastSeen: '2021-01-01T10:28:37Z',
      isOnline: true,
    },
    createdAt: '2020-03-25T04:31:14Z',
    updatedAt: '2020-12-17T15:07:23Z',
    chats: [],
  },
  {
    id: '6a6c4a4e-d32e-41bf-8eb3-fdf639bcf312',
    from: {
      id: 'a69d377d-0da5-4d15-a29a-ee6130c8c030',
      username: 'sle3',
      name: 'Shurlock Le Brom',
      photo: 'assets/images/portraits/5.png',
      lastSeen: '2020-12-13T03:52:11Z',
      isOnline: false,
    },
    createdAt: '2020-05-05T21:23:09Z',
    updatedAt: '2020-05-11T07:41:25Z',
    chats: [],
  },
  {
    id: 'ba19ddda-894e-4fa4-a076-12a713ad830a',
    from: {
      id: '5d614b53-8e42-447c-9068-69f24626dd07',
      username: 'ccoupar4',
      name: 'Cynthie Coupar',
      photo:
        'assets/images/portraits/6.png',
      lastSeen: '2020-11-20T02:36:29Z',
      isOnline: false,
    },
    createdAt: '2020-08-21T15:20:24Z',
    updatedAt: '2020-12-01T08:28:39Z',
    chats: [],
  },
];
