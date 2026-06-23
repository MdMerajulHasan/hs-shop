export type Product = {
    id: string;
    name: string;
    title: string;
    image: string;
    price: number;
    oldPrice: number;
    discount: number;
    badge: string;
    rating: number;
    totalReviews: number;
    description: string;
    sku: string;
    stock: number;

    sizes: {
        id: string;
        label: string;
        price: number;
    }[];

    ingredients: string[];

    reviews: {
        id: string;
        name: string;
        rating: number;
        review: string;
        image: string;
    }[];

    similarItems: {
        id: string;
        name: string;
        price: number;
        image: string;
    }[];
};

export const PRODUCTS: Product[] = [
    {
        id: "1",
        name: "Pizza",
        title: "Chicken Supreme Pizza",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/lunchItems.png",
        price: 18.88,
        oldPrice: 32.88,
        discount: 40,
        badge: "NEW DEAL",
        rating: 4.9,
        totalReviews: 1268,
        description:
            "Fresh hand-tossed pizza with mozzarella cheese, chicken, pepperoni.",
        sku: "PZ-1001",
        stock: 248,
        sizes: [
            { id: "1", label: '4.5"', price: 18.88 },
            { id: "2", label: '6"', price: 22.88 },
            { id: "3", label: '8"', price: 28.88 },
            { id: "4", label: '12"', price: 36.88 },
            { id: "5", label: '18"', price: 49.88 },
        ],
        ingredients: ["Cheese", "Chicken", "Sauce", "Dough"],
        reviews: [],
        similarItems: [],
    },
    {
        id: "2",
        name: "Pizza",
        title: "Chicken Supreme Pizza",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/breakfast.png",
        price: 18.88,
        oldPrice: 32.88,
        discount: 40,
        badge: "NEW DEAL",
        rating: 4.9,
        totalReviews: 1268,
        description:
            "Fresh hand-tossed pizza with mozzarella cheese, chicken, pepperoni.",
        sku: "PZ-1001",
        stock: 248,
        sizes: [
            { id: "1", label: '4.5"', price: 18.88 },
            { id: "2", label: '6"', price: 22.88 },
            { id: "3", label: '8"', price: 28.88 },
            { id: "4", label: '12"', price: 36.88 },
            { id: "5", label: '18"', price: 49.88 },
        ],
        ingredients: ["Cheese", "Chicken", "Sauce", "Dough"],
        reviews: [],
        similarItems: [],
    },
    {
        id: "3",
        name: "Pizza",
        title: "Chicken Supreme Pizza",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/dinner.png",
        price: 18.88,
        oldPrice: 32.88,
        discount: 40,
        badge: "NEW DEAL",
        rating: 4.9,
        totalReviews: 1268,
        description:
            "Fresh hand-tossed pizza with mozzarella cheese, chicken, pepperoni.",
        sku: "PZ-1001",
        stock: 248,
        sizes: [
            { id: "1", label: '4.5"', price: 18.88 },
            { id: "2", label: '6"', price: 22.88 },
            { id: "3", label: '8"', price: 28.88 },
            { id: "4", label: '12"', price: 36.88 },
            { id: "5", label: '18"', price: 49.88 },
        ],
        ingredients: ["Cheese", "Chicken", "Sauce", "Dough"],
        reviews: [],
        similarItems: [],
    },
];