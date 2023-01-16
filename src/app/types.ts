export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  totalAmount: number;
}

export interface Counter {
  id: string;
  name: string;
  totalAmount: number;
  users: User[];
}

export type CounterListItem = Pick<Counter, 'id' | 'name'>;

export enum logType {
  AddAmount,
  SubstrAmount,
  createInvitation,
  Accept,
  Kick,
  SetGoal,
  ReachGoal,
  RemoveGoal
}

export interface Log {
  user: User;
  type: logType;
  amount?: number;
  subject?: User;
  date: Date;
}
