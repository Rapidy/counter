import { Logs, User } from '../../types';
import { RootState } from '../store';
import { removeUser } from './userSlice';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  logs: [] as Logs[],
  users: [] as User[]
};

export const counterLogSlice = createSlice({
  name: 'counterLog',
  initialState,
  reducers: {
    setCounterLog: (state, action: PayloadAction<{ logs: Logs[]; users: User[] }>) => {
      state.logs = action.payload.logs;
      state.users = action.payload.users;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      removeUser,
      (state, action: PayloadAction<{ id: string; authorId: string }>) => {
        const removedUser = state.users.find((user) => user.id === action.payload.id);
        const user = state.users.find((user) => user.id === action.payload.authorId);

        if (user && removedUser) {
          state.logs[state.logs.length - 1].messages.push({
            user,
            type: 4,
            subject: removedUser,
            date: new Date()
          });
        }
      }
    );
  }
});

export const { setCounterLog } = counterLogSlice.actions;

export const getCounterLog = (state: RootState) => state.counterLog.logs;

export default counterLogSlice.reducer;
