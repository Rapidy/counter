import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Log } from '../../types';
import { RootState } from '../store';

import { removeUser } from './userSlice';

const initialState = {
  logs: [] as Log[]
};

export const counterLogSlice = createSlice({
  name: 'counterLog',
  initialState,
  reducers: {
    setCounterLog: (state, action: PayloadAction<Log[]>) => {
      state.logs = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(removeUser, (state, action) => {
      state.logs.unshift({
        user: {
          id: '3',
          name: 'Artopka',
          avatarUrl:
            'https://mobimg.b-cdn.net/v3/fetch/0d/0d9c680abe34874711efeafa5df0320c.jpeg',
          totalAmount: 700
        },
        type: 4,
        date: new Date()
      });
    });
  }
});

export const { setCounterLog } = counterLogSlice.actions;

export const getCounterLog = (state: RootState) => state.counterLog.logs;

export default counterLogSlice.reducer;
