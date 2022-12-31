import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Counter } from '../../types';
import { RootState } from '../store';

const initialState = {
  counters: [] as Counter[]
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCounters: (state, action: PayloadAction<Counter[]>) => {
      state.counters = action.payload;
    },
    removeCounter: (state, action: PayloadAction<string>) => {
      state.counters = state.counters.filter((counter) => counter.id !== action.payload);
    },
    renameCounter: (state, action: PayloadAction<{id: string, name: string}>) => {
      state.counters = state.counters.map(counter => {
        if(counter.id === action.payload.id) {
          counter.name = action.payload.name;
        }
        return counter;
      });
    }
  }
});

export const { setCounters, removeCounter, renameCounter } = counterSlice.actions;

export const getCounters = (state: RootState) => state.counter.counters;

export default counterSlice.reducer;
