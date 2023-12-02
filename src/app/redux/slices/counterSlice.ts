import { Counter, CounterListItem, LocalStorageEnum } from '../../types';
import { RootState } from '../store';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookie from 'js-cookie';

export const fetchCounters = createAsyncThunk(
  'counter/fetchCounters',
  async (_, thunkAPI) => {
    return axios
      .post('https://pleasant-fish-fez.cyclic.app/api/auth/login', {
        username: 'Minimum',
        password: '111111111'
      })
      .then((response) => response.data.token)
      .catch((error) => thunkAPI.rejectWithValue(error.message));
  }
);

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
    renameCounter: (state, action: PayloadAction<CounterListItem>) => {
      state.counters = state.counters.map((counter) => {
        if (counter.id === action.payload.id) {
          counter.name = action.payload.name;
        }
        return counter;
      });
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCounters.fulfilled, (state, action) => {});
    builder.addCase(fetchCounters.rejected, (state, action) => {});
  }
});

export const { setCounters, removeCounter, renameCounter } = counterSlice.actions;

export const getCounters = (state: RootState) => state.counter.counters;
export const getCounter = (state: RootState, id: string) =>
  state.counter.counters.find((counter) => counter.id === id);

export default counterSlice.reducer;
