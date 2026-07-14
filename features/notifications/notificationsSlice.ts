import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppNotification } from "./types";

interface NotificationState {
  notifications: AppNotification[];
}

const initialState: NotificationState = {
  notifications: [
    {
      id: "1",
      title: "Order Received",
      body: "We've successfully received your order #HS1025.",
      type: "order",
      isRead: false,
      createdAt: Date.now() - 2 * 60 * 1000, // 2 minutes ago
      actionLabel: "View Order",
      orderId: "HS1025",
    },
    {
      id: "2",
      title: "Preparing Your Food",
      body: "Our chefs have started preparing your order.",
      type: "order",
      isRead: false,
      createdAt: Date.now() - 15 * 60 * 1000,
      actionLabel: "Track Order",
      orderId: "HS1025",
    },
    {
      id: "3",
      title: "Out for Delivery",
      body: "Your order is on the way. Estimated arrival: 15 minutes.",
      type: "delivery",
      isRead: false,
      createdAt: Date.now() - 30 * 60 * 1000,
      actionLabel: "Track Rider",
      orderId: "HS1025",
    },
    {
      id: "4",
      title: "Order Delivered",
      body: "Enjoy your meal! Thank you for choosing HS Restaurant.",
      type: "delivery",
      isRead: true,
      createdAt: Date.now() - 60 * 60 * 1000,
      actionLabel: "Rate Order",
      orderId: "HS1025",
    },
    {
      id: "5",
      title: "Flat 20% OFF",
      body: "Use coupon HS20 and enjoy 20% off on your next order.",
      type: "offer",
      isRead: false,
      createdAt: Date.now() - 3 * 60 * 60 * 1000,
      actionLabel: "Claim Now",
    },
    {
      id: "6",
      title: "Weekend Pizza Festival",
      body: "Buy 1 Large Pizza and get another at 50% OFF this weekend.",
      type: "promotion",
      isRead: true,
      createdAt: Date.now() - 24 * 60 * 60 * 1000,
      actionLabel: "Order Now",
    },
    {
      id: "7",
      title: "Rate Your Experience",
      body: "How was your last order? We'd love your feedback.",
      type: "review",
      isRead: false,
      createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000,
      actionLabel: "Rate",
      orderId: "HS1023",
    },
    {
      id: "8",
      title: "Password Changed",
      body: "Your account password has been updated successfully.",
      type: "account",
      isRead: true,
      createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000,
    },
    {
      id: "9",
      title: "New Version Available",
      body: "Update HS Restaurant to enjoy our latest features and improvements.",
      type: "system",
      isRead: false,
      createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000,
      actionLabel: "Update",
    },
  ],
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
