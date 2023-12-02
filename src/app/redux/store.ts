import counterLogReducer from './slices/counterLogSlice';
import counterReducer from './slices/counterSlice';
import notificationReducer from './slices/notificationSlice';
import userReducer from './slices/userSlice';
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    counterLog: counterLogReducer,
    notification: notificationReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
