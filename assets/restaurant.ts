export type Restaurant = {
    id: string;
    name: string;
    logo: string;
    address: string;

    estimatedDeliveryTime: string;
    estimatedDeliveryDescription: string;

    deliveryFee: number;
    minimumOrder: number;
    freeDeliveryAbove: number;

    rating: number;
    totalReviews: number;
    isOpen: boolean;
};

export const RESTAURANT: Restaurant = {
    id: "res-001",
    name: "Food Express",
    logo: "https://d.hs-bd.com/wp-content/uploads/2026/06/logo.png",
    address: "House #12, Road #5, Dhanmondi, Dhaka",
    estimatedDeliveryTime: "25-35 min",
    estimatedDeliveryDescription:
        "Your order is prepared fresh and delivered within 25-35 minutes.",
    deliveryFee: 60,
    minimumOrder: 200,
    freeDeliveryAbove: 500,
    rating: 4.8,
    totalReviews: 3250,
    isOpen: true,
};