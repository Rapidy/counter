export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  totalAmount: number;
}

export interface Counter {
  id: string;
  name: string;
}

export enum logType {
  AddAmount,
  SubstrAmount,
  Invite,
  Accept,
  Kick,
  SetGoal,
  ReachGoal
}

export interface Log {
  user: User;
  type: logType;
  amount?: number;
  date: Date;
}
