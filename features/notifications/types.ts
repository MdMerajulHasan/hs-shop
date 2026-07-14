export type NotificationType =
  | "order"
  | "offer"
  | "system"
  | "promotion"
  | "review"
  | "delivery"
  | "account"
  | "announcment"
  | "remainder"
  | "booking";

export interface AppNotification {
  id: string;

  title: string;

  body: string;

  type: NotificationType;

  isRead: boolean;

  createdAt: number;

  actionLabel?: string;

  orderId?: string;
}
