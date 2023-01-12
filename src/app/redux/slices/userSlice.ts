import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';
import { RootState } from '../store';

const initialState = {
  users: [] as User[]
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    removeUser: (state, action: PayloadAction<{ id: string; authorId: string }>) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    }
  }
});

export const { setUsers, removeUser } = userSlice.actions;

export const getUsers = (state: RootState) => state.user.users;

export default userSlice.reducer;
