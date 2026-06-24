import { FlatList, View } from "react-native";
import FoodCard from "./FoodCard";
import TitleBar from "./TitleBar";


export type FoodItem = {
    id: string;
    name: string;
    image: string;
    price: number;
    oldPrice: number;
    rating: number;
    discount: number;
    isFavorite: boolean;
};



export default function BestDeals() {
    const bestDealsData: FoodItem[] = [
        {
            id: "1",
            name: "Delicious And Crispy Potato French Fries",
            image: "https://d.hs-bd.com/wp-content/uploads/2026/06/pizza-no-bg.png",
            price: 18.88,
            oldPrice: 32.88,
            rating: 4.9,
            discount: 54,
            isFavorite: false
        },
        {
            id: "2",
            name: "Classic Cheese Pizza",
            image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection1.png",
            price: 15.99,
            oldPrice: 24.99,
            rating: 4.8,
            discount: 36,
            isFavorite: true
        },
        {
            id: "3",
            name: "Spicy Chicken Burger",
            image: "https://d.hs-bd.com/wp-content/uploads/2026/06/pizza-no-bg.png",
            price: 12.50,
            oldPrice: 18.50,
            rating: 4.7,
            discount: 32,
            isFavorite: false
        },
        {
            id: "4",
            name: "Grilled Kebab Platter",
            image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection1.png",
            price: 21.99,
            oldPrice: 29.99,
            rating: 4.9,
            discount: 27,
            isFavorite: false
        }
    ]

    return (

        <View style={{ marginTop: 40, marginHorizontal: 10 }}>
                <TitleBar label={"Best Deals"}></TitleBar>
            <FlatList
                bounces
                showsHorizontalScrollIndicator={false}
                data={bestDealsData}
                renderItem={({ item, index }) =>
                    <View style={{
                        marginRight: 20
                    }}>
                        <FoodCard item={item} index={index}></FoodCard>
                    </View>
                }
                horizontal
            />
        </View>
    )
}