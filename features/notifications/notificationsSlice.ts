import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppNotification } from "./types";

interface NotificationState {
  notifications: AppNotification[];
}

const initialState: NotificationState = {
  notifications: [],
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification(state, action: PayloadAction<AppNotification>) {
      state.notifications.unshift(action.payload);
    },

    markAsRead(state, action: PayloadAction<string>) {
      const item = state.notifications.find((n) => n.id === action.payload);

      if (item) item.isRead = true;
    },

    markAllAsRead(state) {
      state.notifications.forEach((n) => {
        n.isRead = true;
      });
    },

    deleteNotification(state, action: PayloadAction<string>) {
      state.notifications = state.notifications.filter(
        (n) => n.id !== action.payload,
      );
    },

    clearNotifications(state) {
      state.notifications = [];
    },
  },
});

export const {
  addNotification,
  markAsRead,
  markAllAsRead,
  deleteNotification,
  clearNotifications,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
