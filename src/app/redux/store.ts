import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import userReducer from './slices/userSlice';
import counterLogReducer from './slices/counterLogSlice';
import notificationReducer from './slices/notificationSlice';

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
