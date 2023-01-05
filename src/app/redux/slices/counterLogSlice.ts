import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Log } from '../../types';
import { RootState } from '../store';

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
  }
});

export const { setCounterLog } = counterLogSlice.actions;

export const getCounterLog = (state: RootState) => state.counterLog.logs;

export default counterLogSlice.reducer;
