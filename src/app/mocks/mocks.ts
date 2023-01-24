import { logType } from '../types';

export const users = [
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
    totalAmount: 800
  }
];

export const counters = [
  {
    id: '1',
    name: 'counter1',
    totalAmount: 1500,
    users
  },
  {
    id: '2',
    name: 'counter2',
    totalAmount: 1000,
    users
  }
];

export const logs = [
  {
    user: users[1],
    type: logType.Accept,
    date: new Date(2023, 1, 2, 2, 24, 3)
  },
  {
    user: users[3],
    type: logType.RemoveGoal,
    date: new Date(2023, 1, 2, 2, 24, 2)
  },
  {
    user: users[3],
    type: logType.SetGoal,
    date: new Date(2023, 1, 3, 2, 24, 1)
  },
  {
    type: logType.ReachGoal,
    date: new Date(2023, 1, 3, 2, 24, 1)
  },
  {
    user: users[1],
    type: logType.Kick,
    subject: users[3],
    date: new Date(2023, 1, 4, 2, 24, 1)
  },
  {
    user: users[2],
    type: logType.createInvitation,
    date: new Date(2023, 1, 4, 2, 24, 1)
  },
  {
    user: users[0],
    type: logType.AddAmount,
    amount: 500,
    date: new Date(2023, 1, 4, 3, 24, 2)
  },
  {
    user: users[1],
    type: logType.SubstrAmount,
    amount: 200,
    date: new Date(2023, 1, 5, 3, 24, 4)
  },
  {
    user: users[2],
    type: logType.createInvitation,
    date: new Date(2023, 1, 5, 3, 24, 5)
  },
  {
    user: users[1],
    type: logType.SubstrAmount,
    amount: 200,
    date: new Date(2023, 1, 5, 3, 24, 6)
  },
  {
    user: users[1],
    type: logType.SubstrAmount,
    amount: 200,
    date: new Date(2023, 1, 5, 3, 24, 7)
  },
  {
    user: users[1],
    type: logType.SubstrAmount,
    amount: 200,
    date: new Date(2023, 1, 5, 3, 24, 8)
  },
  {
    user: users[0],
    type: logType.AddAmount,
    amount: 500,
    date: new Date(2023, 1, 5, 3, 24, 9)
  },
  {
    user: users[0],
    type: logType.AddAmount,
    amount: 500,
    date: new Date(2023, 1, 5, 3, 24, 10)
  },
  {
    user: users[0],
    type: logType.AddAmount,
    amount: 500,
    date: new Date(2023, 1, 5, 3, 24, 11)
  },
  {
    user: users[1],
    type: logType.SubstrAmount,
    amount: 200,
    date: new Date(2023, 1, 6, 3, 24, 12)
  },
  {
    user: users[1],
    type: logType.SubstrAmount,
    amount: 200,
    date: new Date(2023, 1, 6, 3, 24, 13)
  },
  {
    user: users[0],
    type: logType.AddAmount,
    amount: 500,
    date: new Date(2023, 1, 6, 3, 24, 14)
  },
  {
    user: users[0],
    type: logType.AddAmount,
    amount: 500,
    date: new Date(2023, 1, 6, 3, 4, 15)
  }
];
