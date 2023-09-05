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
  goal?: Goal;
}

export type CounterListItem = Pick<Counter, 'id' | 'name'>;

export enum logType {
  AddAmount,
  SubstrAmount,
  CreateInvitation,
  Accept,
  Kick,
  SetGoal,
  ReachGoal,
  RemoveGoal
}

export interface Log {
  user?: User;
  type: logType;
  amount?: number;
  subject?: User;
  date: Date;
}

export interface Goal {
  currentAmount: number;
  goalAmount: number;
}

export interface Notification {
  id: string;
  title: string;
  description: string;
  isViewed: boolean;
}
