import {
  Counter,
  Log,
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

export const logs: Log[] = [
  {
    user: users[1],
    type: LogTypeEnum.Accept,
    date: new Date(2023, 8, 20, 2, 24, 3)
  },
  {
    user: users[3],
    type: LogTypeEnum.RemoveGoal,
    date: new Date(2023, 8, 20, 2, 24, 2)
  },
  {
    user: users[3],
    type: LogTypeEnum.SetGoal,
    date: new Date(2023, 8, 20, 2, 24, 1)
  },
  {
    type: LogTypeEnum.ReachGoal,
    date: new Date(2023, 1, 3, 2, 24, 1)
  },
  {
    user: users[1],
    type: LogTypeEnum.Kick,
    subject: users[3],
    date: new Date(2023, 1, 4, 2, 24, 1)
  },
  {
    user: users[2],
    type: LogTypeEnum.CreateInvitation,
    date: new Date(2023, 1, 4, 2, 24, 1)
  },
  {
    user: users[0],
    type: LogTypeEnum.AddAmount,
    amount: 15500,
    date: new Date(2023, 1, 4, 3, 24, 2)
  },
  {
    user: users[1],
    type: LogTypeEnum.SubstrAmount,
    amount: 2200,
    date: new Date(2023, 8, 13, 3, 24, 4)
  },
  {
    user: users[2],
    type: LogTypeEnum.CreateInvitation,
    date: new Date(2023, 8, 21, 3, 24, 5)
  },
  {
    user: users[1],
    type: LogTypeEnum.SubstrAmount,
    amount: 200,
    date: new Date(2023, 8, 12, 3, 24, 6)
  },
  {
    user: users[1],
    type: LogTypeEnum.SubstrAmount,
    amount: 200,
    date: new Date(2023, 8, 14, 3, 24, 7)
  },
  {
    user: users[1],
    type: LogTypeEnum.SubstrAmount,
    amount: 200,
    date: new Date(2023, 8, 14, 3, 24, 8)
  },
  {
    user: users[0],
    type: LogTypeEnum.AddAmount,
    amount: 500,
    date: new Date(2023, 1, 5, 3, 24, 9)
  },
  {
    user: users[0],
    type: LogTypeEnum.AddAmount,
    amount: 500,
    date: new Date(2023, 1, 5, 3, 24, 10)
  },
  {
    user: users[0],
    type: LogTypeEnum.AddAmount,
    amount: 500,
    date: new Date(2023, 1, 5, 3, 24, 11)
  },
  {
    user: users[1],
    type: LogTypeEnum.SubstrAmount,
    amount: 200,
    date: new Date(2023, 1, 6, 3, 24, 12)
  },
  {
    user: users[1],
    type: LogTypeEnum.SubstrAmount,
    amount: 200,
    date: new Date(2023, 1, 6, 3, 24, 13)
  },
  {
    user: users[0],
    type: LogTypeEnum.AddAmount,
    amount: 500,
    date: new Date(2023, 1, 6, 3, 24, 14)
  },
  {
    user: users[0],
    type: LogTypeEnum.AddAmount,
    amount: 500,
    date: new Date(2023, 1, 6, 3, 4, 15)
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
