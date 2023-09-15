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
    viewNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.map((notification) => {
        if (notification.id === action.payload) {
          notification.isViewed = true;
        }

        return notification;
      });
    },
    viewAllNotifications: (state) => {
      state.notifications = state.notifications.map((notification) => ({
        ...notification,
        isViewed: true
      }));
    },
    clearNotifications: (state) => {
      state.notifications = [];
    }
  }
});

export const {
  setNotifications,
  viewNotification,
  viewAllNotifications,
  clearNotifications
} = notificationSlice.actions;

export const getNotifications = (state: RootState) => state.notification.notifications;

export default notificationSlice.reducer;
