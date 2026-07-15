import { NotificationType } from "@/features/notifications/types";

export const getNotificationImage = (type: NotificationType) => {
  switch (type) {

    case "order":
      return "https://d.hs-bd.com/wp-content/uploads/2026/06/title-2.png";

    case "cart":
      return "https://d.hs-bd.com/wp-content/uploads/2026/06/title-2.png";

    case "delivery":
      return "https://d.hs-bd.com/wp-content/uploads/2026/06/title.png";

    case "offer":
      return "https://d.hs-bd.com/wp-content/uploads/2026/06/title-1.png";

    case "promotion":
      return "https://d.hs-bd.com/wp-content/uploads/2026/06/title-4.png";

    case "review":
      return "https://d.hs-bd.com/wp-content/uploads/2026/06/Star.png";

    case "account":
      return "https://d.hs-bd.com/wp-content/uploads/2026/07/title.png";

    case "system":
      return "https://d.hs-bd.com/wp-content/uploads/2026/07/title-1.png";

    case "remainder":
      return "https://d.hs-bd.com/wp-content/uploads/2026/07/title-2.png";

    case "booking":
      return "https://d.hs-bd.com/wp-content/uploads/2026/07/title-2.png";

    default:
      return "https://d.hs-bd.com/wp-content/uploads/2026/06/notification-bing.png";
  }
};
