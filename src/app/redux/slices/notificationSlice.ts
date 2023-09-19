import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Notification } from '../../types';
import { RootState } from '../store';

const initialState = {
  notifications: [] as Notification[]
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotifications: (state, action: PayloadAction<Notification[]>) => {
      state.notifications = action.payload;
    },
    viewNotifications: (state) => {
      state.notifications = state.notifications.map((notification) => {
        if (!notification.isViewed) {
          return { ...notification, isViewed: true };
        }

        return notification;
      });
    },
    clearNotifications: (state) => {
      state.notifications = [];
    }
  }
});

export const { setNotifications, viewNotifications, clearNotifications } =
  notificationSlice.actions;

export const getNotifications = (state: RootState) => state.notification.notifications;

export default notificationSlice.reducer;
