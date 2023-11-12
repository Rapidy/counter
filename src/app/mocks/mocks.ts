import {
  Counter,
  Logs,
  LogTypeEnum,
  Notification,
  NotificationTypeEnum,
  User
} from '../types';

export const users: User[] = [
  {
    id: '1',
    name: 'Sashka',
    avatarUrl:
      'https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg',
    totalAmount: 500
  },
  {
    id: '2',
    name: 'Nikitka',
    avatarUrl: 'https://a.d-cd.net/9c1d81u-960.jpg',
    totalAmount: 600
  },
  {
    id: '3',
    name: 'Artopka',
    avatarUrl:
      'https://mobimg.b-cdn.net/v3/fetch/0d/0d9c680abe34874711efeafa5df0320c.jpeg',
    totalAmount: 700
  },
  {
    id: '4',
    name: 'Durak',
    avatarUrl: '',
    totalAmount: 1100
  }
];

export const counters: Counter[] = [
  {
    id: '1',
    name: 'counter1',
    totalAmount: 300,
    users,
    goal: {
      currentAmount: 300,
      goalAmount: 500
    }
  },
  {
    id: '2',
    name: 'counter2',
    totalAmount: 1000,
    users
  }
];

export const logs: Logs[] = [
  {
    date: new Date(2023, 8, 20),
    messages: [
      {
        user: users[1],
        type: LogTypeEnum.Accept,
        date: new Date(2023, 8, 20, 2, 24, 3)
      },
      {
        user: users[1],
        type: LogTypeEnum.CreateInvitation,
        date: new Date(2023, 8, 20, 2, 24, 3)
      },
      {
        user: users[1],
        type: LogTypeEnum.SetGoal,
        date: new Date(2023, 8, 20, 2, 24, 3),
        amount: 2000
      }
    ]
  },
  {
    date: new Date(2023, 8, 21),
    messages: [
      {
        user: users[1],
        type: LogTypeEnum.Accept,
        date: new Date(2023, 8, 20, 2, 24, 3)
      },
      {
        type: LogTypeEnum.ReachGoal,
        date: new Date(2023, 8, 20, 2, 24, 3),
        amount: 2000
      },
      {
        user: users[1],
        type: LogTypeEnum.RemoveGoal,
        date: new Date(2023, 8, 20, 2, 24, 3),
        amount: 2000
      }
    ]
  },
  {
    date: new Date(2023, 8, 23),
    messages: [
      {
        user: users[1],
        type: LogTypeEnum.AddAmount,
        date: new Date(2023, 8, 20, 2, 24, 3),
        amount: 500
      },
      {
        user: users[1],
        type: LogTypeEnum.SubstrAmount,
        date: new Date(2023, 8, 20, 2, 24, 3),
        amount: 300
      },
      {
        user: users[1],
        type: LogTypeEnum.Kick,
        date: new Date(2023, 8, 20, 2, 24, 3),
        subject: users[0]
      }
    ]
  }
];

export const notifications: Notification[] = [
  {
    id: '1',
    title: 'Просто какой то длинный заголовок',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, corporis dolorum eos id ipsum iure laboriosam maiores minus modi repudiandae.',
    isViewed: false,
    type: NotificationTypeEnum.SystemInformation
  },
  {
    id: '2',
    title: 'Короткий заголовок',
    description: 'Lorem ipsum dolor sit sam maiores minus modi repudiandae.',
    isViewed: false,
    type: NotificationTypeEnum.Invitation
  },
  {
    id: '3',
    title: 'Просто какой то длинный заголовок',
    description: 'Lorem ipsum dolor sit amet',
    isViewed: false,
    type: NotificationTypeEnum.Kick
  },
  {
    id: '4',
    title: 'Заголовок',
    description: 'Lorem ipsum dolor sit iure laboriosam maiores minus modi repudiandae.',
    isViewed: true,
    type: NotificationTypeEnum.ReachGoal
  },
  {
    id: '5',
    title: 'Заголовок',
    description: 'Lorem ipsum dolor sit iure laboriosam maiores minus modi repudiandae.',
    isViewed: true,
    type: NotificationTypeEnum.ReachGoal
  },
  {
    id: '6',
    title: 'Заголовок',
    description: 'Lorem ipsum dolor sit iure laboriosam maiores minus modi repudiandae.',
    isViewed: true,
    type: NotificationTypeEnum.SystemInformation
  },
  {
    id: '7',
    title: 'Заголовок',
    description: 'Lorem ipsum dolor sit iure laboriosam maiores minus modi repudiandae.',
    isViewed: true,
    type: NotificationTypeEnum.Kick
  }
];
