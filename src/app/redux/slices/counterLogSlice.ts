import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Log, User } from '../../types';
import { RootState } from '../store';

import { removeUser } from './userSlice';

const initialState = {
  logs: [] as Log[],
  users: [] as User[]
};

export const counterLogSlice = createSlice({
  name: 'counterLog',
  initialState,
  reducers: {
    setCounterLog: (state, action: PayloadAction<{logs: Log[], users: User[]}>) => {
      state.logs = action.payload.logs;
      state.users = action.payload.users;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(removeUser, (state, action: PayloadAction<{id: string, authorId: string}>) => {
      const remoteUser: User | undefined = state.users.find((user) => user.id === action.payload.id);
      const user: User | undefined = state.users.find((user) => user.id === action.payload.authorId);

      if (user && remoteUser) {
        state.logs.unshift({
          user,
          type: 4,
          remoteUser,
          date: new Date()
        });
      }
    });
  }
});

export const { setCounterLog } = counterLogSlice.actions;

export const getCounterLog = (state: RootState) => state.counterLog.logs;

export default counterLogSlice.reducer;
