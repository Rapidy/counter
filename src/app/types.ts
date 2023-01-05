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

export interface Log {
  username: string;
  type: number;
  description: string;
  date: number;
}