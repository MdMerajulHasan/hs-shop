export type Category =
    | "Burger"
    | "Chinese"
    | "Pizza"
    | "Kebab"
    | "Snacks"
    | "Donuts"
    | "Coffee"
    | "Juice"
    | "Combo";

export type MealType =
    | "Breakfast"
    | "Lunch"
    | "Dinner"
    | "Snack";

export type MenuType =
    | "Appetizers"
    | "Main Courses"
    | "Desserts"
    | "Drinks & Beverages";

export interface ProductSize {
    id: string;
    value: string;
    label: string;
    price: number;
}

export interface Branch {
    branchId: string,
    available: boolean,
    stock: number,
}

export interface Product {
    id: string;
    itemType?: string;

    name: string;
    title: string;
    image: string;

    category: Category;
    menu: MenuType;
    mealType: MealType;

    isCombo: boolean;
    comboItems?: string[];

    price: number;
    oldPrice: number;
    discount: number;

    badge: string;

    rating: number;
    totalReviews: number;

    description: string;
    ingredients: string[];

    sku: string;
    stock: number;

    isFavorite: boolean;
    isAvailable: boolean;
    isFeatured: boolean;
    isPopular: boolean;

    calories: number;
    preparationTime: number;

    sizes: ProductSize[];
    branches: Branch[];
}

export const PRODUCTS: Product[] = [
    {
        id: "1",
        name: "Burger",
        title: "Spicy Chicken Burger",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-3.png",

        category: "Burger",
        menu: "Main Courses",
        mealType: "Lunch",

        isCombo: false,

        price: 12.99,
        oldPrice: 18.99,
        discount: 32,

        badge: "HOT",

        rating: 4.8,
        totalReviews: 862,

        description: "Juicy chicken burger with spicy sauce.",

        ingredients: [
            "Chicken",
            "Burger Bun",
            "Lettuce",
            "Cheese",
            "Sauce"
        ],

        sku: "BG-1001",
        stock: 150,

        isFavorite: false,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 620,
        preparationTime: 12,

        sizes: [
            {
                id: "1",
                value: "regular",
                label: "Regular",
                price: 12.99,
            },
            {
                id: "2",
                value: "large",
                label: "Large",
                price: 16.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
            {
                branchId: "4",
                available: true,
                stock: 30,
            },
            {
                branchId: "5",
                available: false,
                stock: 0,
            },
            {
                branchId: "6",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "2",
        name: "Pizza",
        title: "Chicken Supreme Pizza",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/pizza-no-bg.png",

        category: "Pizza",
        menu: "Main Courses",
        mealType: "Dinner",

        isCombo: false,

        price: 18.88,
        oldPrice: 32.88,
        discount: 40,

        badge: "NEW DEAL",

        rating: 4.9,
        totalReviews: 1268,

        description: "Fresh hand tossed pizza with mozzarella cheese and chicken.",

        ingredients: [
            "Chicken",
            "Cheese",
            "Dough",
            "Sauce"
        ],

        sku: "PZ-1001",
        stock: 248,

        isFavorite: false,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 840,
        preparationTime: 18,

        sizes: [
            {
                id: "1",
                value: "4.5",
                label: "4.5 Inch",
                price: 18.88,
            },
            {
                id: "2",
                value: "6",
                label: "6 Inch",
                price: 24.88,
            },
            {
                id: "3",
                value: "8",
                label: "8 Inch",
                price: 32.88,
            },
            {
                id: "4",
                value: "12",
                label: "12 Inch",
                price: 42.88,
            },
        ],
        branches: [
            {
                branchId: "7",
                available: true,
                stock: 30,
            },
            {
                branchId: "8",
                available: false,
                stock: 0,
            },
            {
                branchId: "9",
                available: true,
                stock: 18,
            },
            {
                branchId: "10",
                available: true,
                stock: 30,
            },
            {
                branchId: "11",
                available: false,
                stock: 0,
            },
            {
                branchId: "1",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "3",
        name: "Chinese",
        title: "Chicken Hakka Noodles",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/chinese.jpg",

        category: "Chinese",
        menu: "Main Courses",
        mealType: "Dinner",

        isCombo: false,

        price: 15.99,
        oldPrice: 20.99,
        discount: 24,

        badge: "CHEF SPECIAL",

        rating: 4.7,
        totalReviews: 533,

        description: "Authentic Chinese noodles with vegetables.",

        ingredients: [
            "Noodles",
            "Chicken",
            "Capsicum",
            "Soy Sauce"
        ],

        sku: "CH-1001",
        stock: 95,

        isFavorite: false,
        isAvailable: true,
        isFeatured: false,
        isPopular: true,

        calories: 690,
        preparationTime: 15,

        sizes: [
            {
                id: "1",
                value: "regular",
                label: "Regular",
                price: 15.99,
            },
        ],
        branches: [
            {
                branchId: "2",
                available: true,
                stock: 30,
            },
            {
                branchId: "3",
                available: false,
                stock: 0,
            },
            {
                branchId: "4",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "4",
        name: "Kebab",
        title: "Chicken Seekh Kebab",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/kebab.webp",

        category: "Kebab",
        menu: "Main Courses",
        mealType: "Dinner",

        isCombo: false,

        price: 14.99,
        oldPrice: 18.99,
        discount: 21,

        badge: "BEST SELLER",

        rating: 4.9,
        totalReviews: 654,

        description: "Tender grilled kebabs served with mint sauce.",

        ingredients: [
            "Chicken",
            "Spices",
            "Mint"
        ],

        sku: "KB-1001",
        stock: 110,

        isFavorite: false,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 480,
        preparationTime: 14,

        sizes: [
            {
                id: "1",
                value: "6-pieces",
                label: "6 Pieces",
                price: 14.99,
            },
        ],
        branches: [
            {
                branchId: "5",
                available: true,
                stock: 30,
            },
            {
                branchId: "6",
                available: false,
                stock: 0,
            },
            {
                branchId: "7",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "5",
        name: "Snacks",
        title: "French Fries",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/frenchfry-scaled.jpg",
        category: "Snacks",
        menu: "Appetizers",
        mealType: "Snack",

        isCombo: false,

        price: 6.49,
        oldPrice: 8.49,
        discount: 24,

        badge: "CRISPY",

        rating: 4.6,
        totalReviews: 723,

        description: "Golden crispy french fries.",

        ingredients: [
            "Potato",
            "Salt"
        ],

        sku: "SN-1001",
        stock: 260,

        isFavorite: true,
        isAvailable: true,
        isFeatured: false,
        isPopular: true,

        calories: 310,
        preparationTime: 8,

        sizes: [
            {
                id: "1",
                label: "Medium",
                value: "medium",
                price: 6.49,
            },
            {
                id: "2",
                value: "large",
                label: "Large",
                price: 8.49,
            },
        ],
        branches: [
            {
                branchId: "8",
                available: true,
                stock: 30,
            },
            {
                branchId: "9",
                available: false,
                stock: 0,
            },
            {
                branchId: "10",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "6",
        name: "Donuts",
        title: "Chocolate Donut",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/donut.jpg",

        category: "Donuts",
        menu: "Desserts",
        mealType: "Snack",

        isCombo: false,

        price: 5.99,
        oldPrice: 7.49,
        discount: 20,

        badge: "SWEET",

        rating: 4.7,
        totalReviews: 438,

        description: "Soft donut topped with chocolate glaze.",

        ingredients: [
            "Flour",
            "Chocolate",
            "Sugar"
        ],

        sku: "DN-1001",
        stock: 175,

        isFavorite: false,
        isAvailable: true,
        isFeatured: false,
        isPopular: true,

        calories: 280,
        preparationTime: 6,

        sizes: [
            {
                id: "1",
                value: "single",
                label: "Single",
                price: 5.99,
            },
        ],
        branches: [
            {
                branchId: "11",
                available: true,
                stock: 30,
            },
            {
                branchId: "1",
                available: false,
                stock: 0,
            },
            {
                branchId: "2",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "7",
        name: "Coffee",
        title: "Cappuccino",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/coffee.jpg",

        category: "Coffee",
        menu: "Drinks & Beverages",
        mealType: "Breakfast",

        isCombo: false,

        price: 4.99,
        oldPrice: 6.49,
        discount: 23,

        badge: "HOT DRINK",

        rating: 4.8,
        totalReviews: 590,

        description: "Freshly brewed cappuccino.",

        ingredients: [
            "Coffee",
            "Milk"
        ],

        sku: "CF-1001",
        stock: 350,

        isFavorite: false,
        isAvailable: true,
        isFeatured: false,
        isPopular: true,

        calories: 120,
        preparationTime: 5,

        sizes: [
            {
                id: "1",
                value: "small",
                label: "Small",
                price: 4.99,
            },
            {
                id: "2",
                value: "large",
                label: "Large",
                price: 6.49,
            },
        ],
        branches: [
            {
                branchId: "3",
                available: true,
                stock: 30,
            },
            {
                branchId: "4",
                available: false,
                stock: 0,
            },
            {
                branchId: "5",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "8",
        name: "Juice",
        title: "Fresh Orange Juice",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/juice-scaled.jpg",

        category: "Juice",
        menu: "Drinks & Beverages",
        mealType: "Breakfast",

        isCombo: false,

        price: 5.99,
        oldPrice: 7.99,
        discount: 25,

        badge: "FRESH",

        rating: 4.9,
        totalReviews: 672,

        description: "100% fresh squeezed orange juice.",

        ingredients: [
            "Orange"
        ],

        sku: "JC-1001",
        stock: 180,

        isFavorite: true,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 160,
        preparationTime: 4,

        sizes: [
            {
                id: "1",
                value: "300-ml",
                label: "300ml",
                price: 5.99,
            },
            {
                id: "2",
                value: "500-ml",
                label: "500ml",
                price: 7.99,
            },
        ],
        branches: [
            {
                branchId: "6",
                available: true,
                stock: 30,
            },
            {
                branchId: "7",
                available: false,
                stock: 0,
            },
            {
                branchId: "8",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "9",
        name: "Burger",
        title: "Spicy Chicken Burger",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-3.png",

        category: "Burger",
        menu: "Main Courses",
        mealType: "Lunch",

        isCombo: false,

        price: 12.99,
        oldPrice: 18.99,
        discount: 32,

        badge: "HOT",

        rating: 4.8,
        totalReviews: 862,

        description: "Juicy chicken burger with spicy sauce.",

        ingredients: [
            "Chicken",
            "Burger Bun",
            "Lettuce",
            "Cheese",
            "Sauce"
        ],

        sku: "BG-1001",
        stock: 150,

        isFavorite: false,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 620,
        preparationTime: 12,

        sizes: [
            {
                id: "1",
                value: "regular",
                label: "Regular",
                price: 12.99,
            },
            {
                id: "2",
                value: "large",
                label: "Large",
                price: 16.99,
            },
        ],
        branches: [
            {
                branchId: "9",
                available: true,
                stock: 30,
            },
            {
                branchId: "10",
                available: false,
                stock: 0,
            },
            {
                branchId: "11",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "10",
        name: "Pizza",
        title: "Chicken Supreme Pizza",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/pizza-no-bg.png",

        category: "Pizza",
        menu: "Main Courses",
        mealType: "Dinner",

        isCombo: false,

        price: 18.88,
        oldPrice: 32.88,
        discount: 40,

        badge: "NEW DEAL",

        rating: 4.9,
        totalReviews: 1268,

        description: "Fresh hand tossed pizza with mozzarella cheese and chicken.",

        ingredients: [
            "Chicken",
            "Cheese",
            "Dough",
            "Sauce"
        ],

        sku: "PZ-1001",
        stock: 248,

        isFavorite: false,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 840,
        preparationTime: 18,

        sizes: [
            {
                id: "1",
                value: "4.5",
                label: "4.5 Inch",
                price: 18.88,
            },
            {
                id: "2",
                value: "6",
                label: "6 Inch",
                price: 24.88,
            },
            {
                id: "3",
                value: "8",
                label: "8 Inch",
                price: 32.88,
            },
            {
                id: "4",
                value: "12",
                label: "12 Inch",
                price: 42.88,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
            {
                branchId: "4",
                available: true,
                stock: 30,
            },
            {
                branchId: "5",
                available: false,
                stock: 0,
            },
            {
                branchId: "6",
                available: true,
                stock: 18,
            },
            {
                branchId: "7",
                available: true,
                stock: 30,
            },
            {
                branchId: "8",
                available: false,
                stock: 0,
            },
            {
                branchId: "9",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "11",
        name: "Chinese",
        title: "Chicken Hakka Noodles",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/chinese.jpg",

        category: "Chinese",
        menu: "Main Courses",
        mealType: "Dinner",

        isCombo: false,

        price: 15.99,
        oldPrice: 20.99,
        discount: 24,

        badge: "CHEF SPECIAL",

        rating: 4.7,
        totalReviews: 533,

        description: "Authentic Chinese noodles with vegetables.",

        ingredients: [
            "Noodles",
            "Chicken",
            "Capsicum",
            "Soy Sauce"
        ],

        sku: "CH-1001",
        stock: 95,

        isFavorite: false,
        isAvailable: true,
        isFeatured: false,
        isPopular: true,

        calories: 690,
        preparationTime: 15,

        sizes: [
            {
                id: "1",
                value: "regular",
                label: "Regular",
                price: 15.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "12",
        name: "Kebab",
        title: "Chicken Seekh Kebab",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/kebab.webp",

        category: "Kebab",
        menu: "Main Courses",
        mealType: "Dinner",

        isCombo: false,

        price: 14.99,
        oldPrice: 18.99,
        discount: 21,

        badge: "BEST SELLER",

        rating: 4.9,
        totalReviews: 654,

        description: "Tender grilled kebabs served with mint sauce.",

        ingredients: [
            "Chicken",
            "Spices",
            "Mint"
        ],

        sku: "KB-1001",
        stock: 110,

        isFavorite: false,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 480,
        preparationTime: 14,

        sizes: [
            {
                id: "1",
                value: "6-pieces",
                label: "6 Pieces",
                price: 14.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "13",
        name: "Snacks",
        title: "French Fries",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/frenchfry-scaled.jpg",
        category: "Snacks",
        menu: "Appetizers",
        mealType: "Snack",

        isCombo: false,

        price: 6.49,
        oldPrice: 8.49,
        discount: 24,

        badge: "CRISPY",

        rating: 4.6,
        totalReviews: 723,

        description: "Golden crispy french fries.",

        ingredients: [
            "Potato",
            "Salt"
        ],

        sku: "SN-1001",
        stock: 260,

        isFavorite: true,
        isAvailable: true,
        isFeatured: false,
        isPopular: true,

        calories: 310,
        preparationTime: 8,

        sizes: [
            {
                id: "1",
                value: "medium",
                label: "Medium",
                price: 6.49,
            },
            {
                id: "2",
                value: "large",
                label: "Large",
                price: 8.49,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
            {
                branchId: "4",
                available: true,
                stock: 30,
            },
            {
                branchId: "5",
                available: false,
                stock: 0,
            },
            {
                branchId: "6",
                available: true,
                stock: 18,
            },
            {
                branchId: "7",
                available: true,
                stock: 30,
            },
            {
                branchId: "8",
                available: false,
                stock: 0,
            },
            {
                branchId: "9",
                available: true,
                stock: 18,
            },
            {
                branchId: "10",
                available: false,
                stock: 0,
            },
            {
                branchId: "11",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "14",
        name: "Donuts",
        title: "Chocolate Donut",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/donut.jpg",

        category: "Donuts",
        menu: "Desserts",
        mealType: "Snack",

        isCombo: false,

        price: 5.99,
        oldPrice: 7.49,
        discount: 20,

        badge: "SWEET",

        rating: 4.7,
        totalReviews: 438,

        description: "Soft donut topped with chocolate glaze.",

        ingredients: [
            "Flour",
            "Chocolate",
            "Sugar"
        ],

        sku: "DN-1001",
        stock: 175,

        isFavorite: false,
        isAvailable: true,
        isFeatured: false,
        isPopular: true,

        calories: 280,
        preparationTime: 6,

        sizes: [
            {
                id: "1",
                value: "single",
                label: "Single",
                price: 5.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
            {
                branchId: "9",
                available: true,
                stock: 30,
            },
            {
                branchId: "10",
                available: false,
                stock: 0,
            },
            {
                branchId: "11",
                available: true,
                stock: 18,
            },
            {
                branchId: "4",
                available: true,
                stock: 30,
            },
            {
                branchId: "5",
                available: false,
                stock: 0,
            },
            {
                branchId: "6",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "15",
        name: "Coffee",
        title: "Cappuccino",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/coffee.jpg",

        category: "Coffee",
        menu: "Drinks & Beverages",
        mealType: "Breakfast",

        isCombo: false,

        price: 4.99,
        oldPrice: 6.49,
        discount: 23,

        badge: "HOT DRINK",

        rating: 4.8,
        totalReviews: 590,

        description: "Freshly brewed cappuccino.",

        ingredients: [
            "Coffee",
            "Milk"
        ],

        sku: "CF-1001",
        stock: 350,

        isFavorite: false,
        isAvailable: true,
        isFeatured: false,
        isPopular: true,

        calories: 120,
        preparationTime: 5,

        sizes: [
            {
                id: "1",
                value: "small",
                label: "Small",
                price: 4.99,
            },
            {
                id: "2",
                value: "large",
                label: "Large",
                price: 6.49,
            },
        ],
        branches: [
            {
                branchId: "7",
                available: true,
                stock: 30,
            },
            {
                branchId: "9",
                available: false,
                stock: 0,
            },
            {
                branchId: "11",
                available: true,
                stock: 18,
            },
            {
                branchId: "3",
                available: true,
                stock: 30,
            },
            {
                branchId: "4",
                available: false,
                stock: 0,
            },
            {
                branchId: "5",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "16",
        name: "Juice",
        title: "Fresh Orange Juice",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/juice-scaled.jpg",

        category: "Juice",
        menu: "Drinks & Beverages",
        mealType: "Breakfast",

        isCombo: false,

        price: 5.99,
        oldPrice: 7.99,
        discount: 25,

        badge: "FRESH",

        rating: 4.9,
        totalReviews: 672,

        description: "100% fresh squeezed orange juice.",

        ingredients: [
            "Orange"
        ],

        sku: "JC-1001",
        stock: 180,

        isFavorite: true,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 160,
        preparationTime: 4,

        sizes: [
            {
                id: "1",
                value: "300-ml",
                label: "300ml",
                price: 5.99,
            },
            {
                id: "2",
                value: "500-ml",
                label: "500ml",
                price: 7.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "17",
        name: "Burger",
        title: "Spicy Chicken Burger",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-3.png",

        category: "Burger",
        menu: "Main Courses",
        mealType: "Lunch",

        isCombo: false,

        price: 12.99,
        oldPrice: 18.99,
        discount: 32,

        badge: "HOT",

        rating: 4.8,
        totalReviews: 862,

        description: "Juicy chicken burger with spicy sauce.",

        ingredients: [
            "Chicken",
            "Burger Bun",
            "Lettuce",
            "Cheese",
            "Sauce"
        ],

        sku: "BG-1001",
        stock: 150,

        isFavorite: false,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 620,
        preparationTime: 12,

        sizes: [
            {
                id: "1",
                value: "regular",
                label: "Regular",
                price: 12.99,
            },
            {
                id: "2",
                value: "large",
                label: "Large",
                price: 16.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "18",
        name: "Pizza",
        title: "Chicken Supreme Pizza",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/pizza-no-bg.png",

        category: "Pizza",
        menu: "Main Courses",
        mealType: "Dinner",

        isCombo: false,

        price: 18.88,
        oldPrice: 32.88,
        discount: 40,

        badge: "NEW DEAL",

        rating: 4.9,
        totalReviews: 1268,

        description: "Fresh hand tossed pizza with mozzarella cheese and chicken.",

        ingredients: [
            "Chicken",
            "Cheese",
            "Dough",
            "Sauce"
        ],

        sku: "PZ-1001",
        stock: 248,

        isFavorite: false,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 840,
        preparationTime: 18,

        sizes: [
            {
                id: "1",
                value: "4.5",
                label: "4.5 Inch",
                price: 18.88,
            },
            {
                id: "2",
                value: "6",
                label: "6 Inch",
                price: 24.88,
            },
            {
                id: "3",
                value: "8",
                label: "8 Inch",
                price: 32.88,
            },
            {
                id: "4",
                value: "12",
                label: "12 Inch",
                price: 42.88,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "19",
        name: "Chinese",
        title: "Chicken Hakka Noodles",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/chinese.jpg",

        category: "Chinese",
        menu: "Main Courses",
        mealType: "Dinner",

        isCombo: false,

        price: 15.99,
        oldPrice: 20.99,
        discount: 24,

        badge: "CHEF SPECIAL",

        rating: 4.7,
        totalReviews: 533,

        description: "Authentic Chinese noodles with vegetables.",

        ingredients: [
            "Noodles",
            "Chicken",
            "Capsicum",
            "Soy Sauce"
        ],

        sku: "CH-1001",
        stock: 95,

        isFavorite: false,
        isAvailable: true,
        isFeatured: false,
        isPopular: true,

        calories: 690,
        preparationTime: 15,

        sizes: [
            {
                id: "1",
                value: "regular",
                label: "Regular",
                price: 15.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "20",
        name: "Kebab",
        title: "Chicken Seekh Kebab",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/kebab.webp",

        category: "Kebab",
        menu: "Main Courses",
        mealType: "Dinner",

        isCombo: false,

        price: 14.99,
        oldPrice: 18.99,
        discount: 21,

        badge: "BEST SELLER",

        rating: 4.9,
        totalReviews: 654,

        description: "Tender grilled kebabs served with mint sauce.",

        ingredients: [
            "Chicken",
            "Spices",
            "Mint"
        ],

        sku: "KB-1001",
        stock: 110,

        isFavorite: false,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 480,
        preparationTime: 14,

        sizes: [
            {
                id: "1",
                value: "6-pieces",
                label: "6 Pieces",
                price: 14.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "21",
        name: "Snacks",
        title: "French Fries",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/frenchfry-scaled.jpg",
        category: "Snacks",
        menu: "Appetizers",
        mealType: "Snack",

        isCombo: false,

        price: 6.49,
        oldPrice: 8.49,
        discount: 24,

        badge: "CRISPY",

        rating: 4.6,
        totalReviews: 723,

        description: "Golden crispy french fries.",

        ingredients: [
            "Potato",
            "Salt"
        ],

        sku: "SN-1001",
        stock: 260,

        isFavorite: true,
        isAvailable: true,
        isFeatured: false,
        isPopular: true,

        calories: 310,
        preparationTime: 8,

        sizes: [
            {
                id: "1",
                value: "medium",
                label: "Medium",
                price: 6.49,
            },
            {
                id: "2",
                value: "large",
                label: "Large",
                price: 8.49,
            },
        ],
        branches: [
            {
                branchId: "6",
                available: true,
                stock: 30,
            },
            {
                branchId: "7",
                available: false,
                stock: 0,
            },
            {
                branchId: "8",
                available: true,
                stock: 18,
            },
            {
                branchId: "9",
                available: true,
                stock: 30,
            },
            {
                branchId: "10",
                available: false,
                stock: 0,
            },
            {
                branchId: "11",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "22",
        name: "Donuts",
        title: "Chocolate Donut",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/donut.jpg",

        category: "Donuts",
        menu: "Desserts",
        mealType: "Snack",

        isCombo: false,

        price: 5.99,
        oldPrice: 7.49,
        discount: 20,

        badge: "SWEET",

        rating: 4.7,
        totalReviews: 438,

        description: "Soft donut topped with chocolate glaze.",

        ingredients: [
            "Flour",
            "Chocolate",
            "Sugar"
        ],

        sku: "DN-1001",
        stock: 175,

        isFavorite: false,
        isAvailable: true,
        isFeatured: false,
        isPopular: true,

        calories: 280,
        preparationTime: 6,

        sizes: [
            {
                id: "1",
                value: "single",
                label: "Single",
                price: 5.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "23",
        name: "Coffee",
        title: "Cappuccino",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/coffee.jpg",

        category: "Coffee",
        menu: "Drinks & Beverages",
        mealType: "Breakfast",

        isCombo: false,

        price: 4.99,
        oldPrice: 6.49,
        discount: 23,

        badge: "HOT DRINK",

        rating: 4.8,
        totalReviews: 590,

        description: "Freshly brewed cappuccino.",

        ingredients: [
            "Coffee",
            "Milk"
        ],

        sku: "CF-1001",
        stock: 350,

        isFavorite: false,
        isAvailable: true,
        isFeatured: false,
        isPopular: true,

        calories: 120,
        preparationTime: 5,

        sizes: [
            {
                id: "1",
                value: "small",
                label: "Small",
                price: 4.99,
            },
            {
                id: "2",
                value: "large",
                label: "Large",
                price: 6.49,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "24",
        name: "Juice",
        title: "Fresh Orange Juice",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/juice-scaled.jpg",

        category: "Juice",
        menu: "Drinks & Beverages",
        mealType: "Breakfast",

        isCombo: false,

        price: 5.99,
        oldPrice: 7.99,
        discount: 25,

        badge: "FRESH",

        rating: 4.9,
        totalReviews: 672,

        description: "100% fresh squeezed orange juice.",

        ingredients: [
            "Orange"
        ],

        sku: "JC-1001",
        stock: 180,

        isFavorite: true,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 160,
        preparationTime: 4,

        sizes: [
            {
                id: "1",
                value: "300-ml",
                label: "300ml",
                price: 5.99,
            },
            {
                id: "2",
                value: "500-ml",
                label: "500ml",
                price: 7.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
            {
                branchId: "5",
                available: true,
                stock: 30,
            },
            {
                branchId: "6",
                available: false,
                stock: 0,
            },
            {
                branchId: "7",
                available: true,
                stock: 18,
            },
            {
                branchId: "8",
                available: true,
                stock: 30,
            },
            {
                branchId: "9",
                available: false,
                stock: 0,
            },
            {
                branchId: "11",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "25",
        name: "Burger",
        title: "Spicy Chicken Burger",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-3.png",

        category: "Burger",
        menu: "Main Courses",
        mealType: "Lunch",

        isCombo: false,

        price: 12.99,
        oldPrice: 18.99,
        discount: 32,

        badge: "HOT",

        rating: 4.8,
        totalReviews: 862,

        description: "Juicy chicken burger with spicy sauce.",

        ingredients: [
            "Chicken",
            "Burger Bun",
            "Lettuce",
            "Cheese",
            "Sauce"
        ],

        sku: "BG-1001",
        stock: 150,

        isFavorite: false,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 620,
        preparationTime: 12,

        sizes: [
            {
                id: "1",
                value: "regular",
                label: "Regular",
                price: 12.99,
            },
            {
                id: "2",
                value: "large",
                label: "Large",
                price: 16.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
            {
                branchId: "4",
                available: true,
                stock: 30,
            },
            {
                branchId: "6",
                available: false,
                stock: 0,
            },
            {
                branchId: "7",
                available: true,
                stock: 18,
            },
            {
                branchId: "8",
                available: true,
                stock: 30,
            },
            {
                branchId: "9",
                available: false,
                stock: 0,
            },
            {
                branchId: "10",
                available: true,
                stock: 18,
            },
            {
                branchId: "11",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "26",
        name: "Pizza",
        title: "Chicken Supreme Pizza",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/pizza-no-bg.png",

        category: "Pizza",
        menu: "Main Courses",
        mealType: "Dinner",

        isCombo: false,

        price: 18.88,
        oldPrice: 32.88,
        discount: 40,

        badge: "NEW DEAL",

        rating: 4.9,
        totalReviews: 1268,

        description: "Fresh hand tossed pizza with mozzarella cheese and chicken.",

        ingredients: [
            "Chicken",
            "Cheese",
            "Dough",
            "Sauce"
        ],

        sku: "PZ-1001",
        stock: 248,

        isFavorite: false,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 840,
        preparationTime: 18,

        sizes: [
            {
                id: "1",
                value: "4.5",
                label: "4.5 Inch",
                price: 18.88,
            },
            {
                id: "2",
                value: '6',
                label: "6 Inch",
                price: 24.88,
            },
            {
                id: "3",
                value: "8",
                label: "8 Inch",
                price: 32.88,
            },
            {
                id: "4",
                value: "12",
                label: "12 Inch",
                price: 42.88,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "27",
        name: "Chinese",
        title: "Chicken Hakka Noodles",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/chinese.jpg",

        category: "Chinese",
        menu: "Main Courses",
        mealType: "Dinner",

        isCombo: false,

        price: 15.99,
        oldPrice: 20.99,
        discount: 24,

        badge: "CHEF SPECIAL",

        rating: 4.7,
        totalReviews: 533,

        description: "Authentic Chinese noodles with vegetables.",

        ingredients: [
            "Noodles",
            "Chicken",
            "Capsicum",
            "Soy Sauce"
        ],

        sku: "CH-1001",
        stock: 95,

        isFavorite: false,
        isAvailable: true,
        isFeatured: false,
        isPopular: true,

        calories: 690,
        preparationTime: 15,

        sizes: [
            {
                id: "1",
                value: "regular",
                label: "Regular",
                price: 15.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "28",
        name: "Kebab",
        title: "Chicken Seekh Kebab",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/kebab.webp",

        category: "Kebab",
        menu: "Main Courses",
        mealType: "Dinner",

        isCombo: false,

        price: 14.99,
        oldPrice: 18.99,
        discount: 21,

        badge: "BEST SELLER",

        rating: 4.9,
        totalReviews: 654,

        description: "Tender grilled kebabs served with mint sauce.",

        ingredients: [
            "Chicken",
            "Spices",
            "Mint"
        ],

        sku: "KB-1001",
        stock: 110,

        isFavorite: false,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 480,
        preparationTime: 14,

        sizes: [
            {
                id: "1",
                value: "6-pieces",
                label: "6 Pieces",
                price: 14.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "29",
        name: "Snacks",
        title: "French Fries",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/frenchfry-scaled.jpg",
        category: "Snacks",
        menu: "Appetizers",
        mealType: "Snack",

        isCombo: false,

        price: 6.49,
        oldPrice: 8.49,
        discount: 24,

        badge: "CRISPY",

        rating: 4.6,
        totalReviews: 723,

        description: "Golden crispy french fries.",

        ingredients: [
            "Potato",
            "Salt"
        ],

        sku: "SN-1001",
        stock: 260,

        isFavorite: true,
        isAvailable: true,
        isFeatured: false,
        isPopular: true,

        calories: 310,
        preparationTime: 8,

        sizes: [
            {
                id: "1",
                value: "medium",
                label: "Medium",
                price: 6.49,
            },
            {
                id: "2",
                value: "large",
                label: "Large",
                price: 8.49,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "30",
        name: "Donuts",
        title: "Chocolate Donut",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/donut.jpg",

        category: "Donuts",
        menu: "Desserts",
        mealType: "Snack",

        isCombo: false,

        price: 5.99,
        oldPrice: 7.49,
        discount: 20,

        badge: "SWEET",

        rating: 4.7,
        totalReviews: 438,

        description: "Soft donut topped with chocolate glaze.",

        ingredients: [
            "Flour",
            "Chocolate",
            "Sugar"
        ],

        sku: "DN-1001",
        stock: 175,

        isFavorite: false,
        isAvailable: true,
        isFeatured: false,
        isPopular: true,

        calories: 280,
        preparationTime: 6,

        sizes: [
            {
                id: "1",
                value: "single",
                label: "Single",
                price: 5.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "31",
        name: "Coffee",
        title: "Cappuccino",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/coffee.jpg",

        category: "Coffee",
        menu: "Drinks & Beverages",
        mealType: "Breakfast",

        isCombo: false,

        price: 4.99,
        oldPrice: 6.49,
        discount: 23,

        badge: "HOT DRINK",

        rating: 4.8,
        totalReviews: 590,

        description: "Freshly brewed cappuccino.",

        ingredients: [
            "Coffee",
            "Milk"
        ],

        sku: "CF-1001",
        stock: 350,

        isFavorite: false,
        isAvailable: true,
        isFeatured: false,
        isPopular: true,

        calories: 120,
        preparationTime: 5,

        sizes: [
            {
                id: "1",
                value: "small",
                label: "Small",
                price: 4.99,
            },
            {
                id: "2",
                value: "large",
                label: "Large",
                price: 6.49,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "32",
        name: "Juice",
        title: "Fresh Orange Juice",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/juice-scaled.jpg",

        category: "Juice",
        menu: "Drinks & Beverages",
        mealType: "Breakfast",

        isCombo: false,

        price: 5.99,
        oldPrice: 7.99,
        discount: 25,

        badge: "FRESH",

        rating: 4.9,
        totalReviews: 672,

        description: "100% fresh squeezed orange juice.",

        ingredients: [
            "Orange"
        ],

        sku: "JC-1001",
        stock: 180,

        isFavorite: true,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 160,
        preparationTime: 4,

        sizes: [
            {
                id: "1",
                value: "300-ml",
                label: "300ml",
                price: 5.99,
            },
            {
                id: "2",
                value: "500-ml",
                label: "500ml",
                price: 7.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "33",
        name: "Meals Box",
        title: "Family Lunch Combo",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/combo1.jpg",

        category: "Combo",
        menu: "Main Courses",
        mealType: "Lunch",

        isCombo: true,

        comboItems: [
            "Chicken Burger",
            "French Fries",
            "Soft Drink"
        ],

        price: 24.99,
        oldPrice: 31.99,
        discount: 22,

        badge: "COMBO DEAL",

        rating: 4.9,
        totalReviews: 921,

        description: "Burger, fries and drink at a discounted combo price.",

        ingredients: [
            "Chicken",
            "Bread",
            "Potato",
            "Soft Drink"
        ],

        sku: "CB-1001",
        stock: 80,

        isFavorite: false,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 980,
        preparationTime: 18,

        sizes: [
            {
                id: "1",
                value: "regular",
                label: "Regular",
                price: 24.99,
            },
            {
                id: "2",
                value: "large",
                label: "Large",
                price: 29.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "34",
        name: "Meals Box",
        title: "Family Lunch Combo",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/combo2.jpg",

        category: "Combo",
        menu: "Main Courses",
        mealType: "Lunch",

        isCombo: true,

        comboItems: [
            "Chicken Burger",
            "French Fries",
            "Soft Drink"
        ],

        price: 24.99,
        oldPrice: 31.99,
        discount: 22,

        badge: "COMBO DEAL",

        rating: 4.9,
        totalReviews: 921,

        description: "Burger, fries and drink at a discounted combo price.",

        ingredients: [
            "Chicken",
            "Bread",
            "Potato",
            "Soft Drink"
        ],

        sku: "CB-1001",
        stock: 80,

        isFavorite: false,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 980,
        preparationTime: 18,

        sizes: [
            {
                id: "1",
                value: "regular",
                label: "Regular",
                price: 24.99,
            },
            {
                id: "2",
                value: "large",
                label: "Large",
                price: 29.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "35",
        name: "Meals Box",
        title: "Family Lunch Combo",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/combo3.jpg",

        category: "Combo",
        menu: "Main Courses",
        mealType: "Lunch",

        isCombo: true,

        comboItems: [
            "Chicken Burger",
            "French Fries",
            "Soft Drink"
        ],

        price: 24.99,
        oldPrice: 31.99,
        discount: 22,

        badge: "COMBO DEAL",

        rating: 4.9,
        totalReviews: 921,

        description: "Burger, fries and drink at a discounted combo price.",

        ingredients: [
            "Chicken",
            "Bread",
            "Potato",
            "Soft Drink"
        ],

        sku: "CB-1001",
        stock: 80,

        isFavorite: false,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 980,
        preparationTime: 18,

        sizes: [
            {
                id: "1",
                value: "regular",
                label: "Regular",
                price: 24.99,
            },
            {
                id: "2",
                value: "large",
                label: "Large",
                price: 29.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "36",
        name: "Meals Box",
        title: "Family Lunch Combo",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/combo4.jpg",

        category: "Combo",
        menu: "Main Courses",
        mealType: "Lunch",

        isCombo: true,

        comboItems: [
            "Chicken Burger",
            "French Fries",
            "Soft Drink"
        ],

        price: 24.99,
        oldPrice: 31.99,
        discount: 22,

        badge: "COMBO DEAL",

        rating: 4.9,
        totalReviews: 921,

        description: "Burger, fries and drink at a discounted combo price.",

        ingredients: [
            "Chicken",
            "Bread",
            "Potato",
            "Soft Drink"
        ],

        sku: "CB-1001",
        stock: 80,

        isFavorite: false,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 980,
        preparationTime: 18,

        sizes: [
            {
                id: "1",
                value: "regular",
                label: "Regular",
                price: 24.99,
            },
            {
                id: "2",
                value: "large",
                label: "Large",
                price: 29.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "37",
        itemType: "Special",
        name: "Special Lunch",
        title: "Special Lunch Box",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/lunchItems.png",
        category: "Burger",
        menu: "Main Courses",
        mealType: "Lunch",
        isCombo: false,
        comboItems: [
            "Chicken Burger",
            "Fried Rice",
            "French Fries"
        ],
        price: 21.99,
        oldPrice: 27.99,
        discount: 21,
        badge: "SPECIAL LUNCH",
        rating: 4.9,
        totalReviews: 1384,
        description:
            "Special lunch platter including Chicken Burger, Fried Rice and French Fries.",
        ingredients: [
            "Chicken",
            "Burger Bun",
            "Rice",
            "Potato",
            "Vegetables"
        ],
        sku: "SP-L-1001",
        stock: 60,
        isFavorite: false,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,
        calories: 1050,
        preparationTime: 18,
        sizes: [
            {
                id: "1",
                value: 'regular',
                label: "Regular",
                price: 21.99,
            },
            {
                id: "2",
                value: 'large',
                label: "Large",
                price: 25.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "38",
        itemType: "Special",

        name: "Special Breakfast",
        title: "Morning Breakfast Box",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/breakfast.png",

        category: "Coffee",
        menu: "Drinks & Beverages",
        mealType: "Breakfast",

        isCombo: false,

        comboItems: [
            "Milk Tea",
            "Chocolate Bun"
        ],

        price: 11.99,
        oldPrice: 15.99,
        discount: 25,

        badge: "SPECIAL BREAKFAST",

        rating: 4.8,
        totalReviews: 864,

        description:
            "Fresh breakfast including hot tea and chocolate bun.",

        ingredients: [
            "Tea",
            "Milk",
            "Chocolate",
            "Bread"
        ],

        sku: "SP-B-1001",

        stock: 110,

        isFavorite: false,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 480,

        preparationTime: 10,

        sizes: [
            {
                id: "1",
                value: "regular",
                label: "Regular",
                price: 11.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
    {
        id: "39",
        itemType: "Special",

        name: "Special Dinner",
        title: "Healthy Dinner Box",

        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/dinner.png",

        category: "Kebab",
        menu: "Main Courses",
        mealType: "Dinner",

        isCombo: false,

        comboItems: [
            "Chicken Fries",
            "Potato Chop",
            "Mixed Vegetables"
        ],

        price: 23.99,
        oldPrice: 29.99,
        discount: 20,

        badge: "SPECIAL DINNER",

        rating: 4.9,
        totalReviews: 1123,

        description:
            "Healthy dinner platter with chicken fries, potato chop and fresh vegetables.",

        ingredients: [
            "Chicken",
            "Potato",
            "Vegetables",
            "Spices"
        ],

        sku: "SP-D-1001",

        stock: 72,

        isFavorite: true,
        isAvailable: true,
        isFeatured: true,
        isPopular: true,

        calories: 890,

        preparationTime: 20,

        sizes: [
            {
                id: "1",
                value: "regular",
                label: "Regular",
                price: 23.99,
            },
            {
                id: "2",
                value: "large",
                label: "Large",
                price: 27.99,
            },
        ],
        branches: [
            {
                branchId: "1",
                available: true,
                stock: 30,
            },
            {
                branchId: "2",
                available: false,
                stock: 0,
            },
            {
                branchId: "3",
                available: true,
                stock: 18,
            },
        ]
    },
];