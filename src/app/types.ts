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

export enum LogTypeEnum {
  AddAmount,
  SubstrAmount,
  CreateInvitation,
  Accept,
  Kick,
  SetGoal,
  ReachGoal,
  RemoveGoal
}

export interface LogItem {
  user?: User;
  type: LogTypeEnum;
  amount?: number;
  subject?: User;
  date: Date;
}

export interface Logs {
  date: Date;
  messages: LogItem[];
}

export interface Goal {
  currentAmount: number;
  goalAmount: number;
}

export enum NotificationTypeEnum {
  SystemInformation = 'SystemInformation',
  Invitation = 'Invitation',
  Kick = 'Kick',
  ReachGoal = 'ReachGoal'
}

export interface Notification {
  id: string;
  title: string;
  description: string;
  isViewed: boolean;
  type: NotificationTypeEnum;
}
