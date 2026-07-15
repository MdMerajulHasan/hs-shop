export type Review = {
    id: string;
    productId: string;

    userName: string;
    userImage: string;

    rating: number;
    review: string;

    createdAt: number;
};

export const REVIEWS: Review[] = [
    {
        id: "1",
        productId: "1",
        userName: "John Doe",
        userImage: "https://i.pravatar.cc/150?img=1",
        rating: 5,
        review: "Amazing pizza! Crispy crust and fresh toppings.",
        createdAt: new Date("2026-06-20").getTime(),
    },
    {
        id: "2",
        productId: "1",
        userName: "Sarah",
        userImage: "https://i.pravatar.cc/150?img=2",
        rating: 4.5,
        review: "Very tasty. Will definitely order again.",
        createdAt: new Date("2026-06-20").getTime(),
    },
    {
        id: "3",
        productId: "2",
        userName: "David",
        userImage: "https://i.pravatar.cc/150?img=3",
        rating: 4,
        review: "One of the best burgers I've had.",
        createdAt: new Date("2026-06-20").getTime(),
    },
];