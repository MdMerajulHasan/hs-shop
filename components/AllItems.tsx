import { StyleSheet, View } from "react-native";
import FoodCard from "./FoodCard";
import TitleBar from "./TitleBar";

export default function AllItems() {
    const allItemsData = [
        {
            id: 1,
            name: "Delicious And Crispy Potato French Fries",
            image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
            price: 18.88,
            oldPrice: 32.88,
            rating: 4.9,
            discount: 54,
            isFavorite: false
        },
        {
            id: 2,
            name: "Classic Cheese Pizza",
            image: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-1.png",
            price: 15.99,
            oldPrice: 24.99,
            rating: 4.8,
            discount: 36,
            isFavorite: true
        },
        {
            id: 3,
            name: "Spicy Chicken Burger",
            image: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628.png",
            price: 12.50,
            oldPrice: 18.50,
            rating: 4.7,
            discount: 32,
            isFavorite: false
        },
        {
            id: 1,
            name: "Delicious And Crispy Potato French Fries",
            image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
            price: 18.88,
            oldPrice: 32.88,
            rating: 4.9,
            discount: 54,
            isFavorite: false
        },
        {
            id: 2,
            name: "Classic Cheese Pizza",
            image: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-1.png",
            price: 15.99,
            oldPrice: 24.99,
            rating: 4.8,
            discount: 36,
            isFavorite: true
        },
        {
            id: 3,
            name: "Spicy Chicken Burger",
            image: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628.png",
            price: 12.50,
            oldPrice: 18.50,
            rating: 4.7,
            discount: 32,
            isFavorite: false
        },
        {
            id: 1,
            name: "Delicious And Crispy Potato French Fries",
            image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
            price: 18.88,
            oldPrice: 32.88,
            rating: 4.9,
            discount: 54,
            isFavorite: false
        },
        {
            id: 2,
            name: "Classic Cheese Pizza",
            image: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-1.png",
            price: 15.99,
            oldPrice: 24.99,
            rating: 4.8,
            discount: 36,
            isFavorite: true
        },
        {
            id: 3,
            name: "Spicy Chicken Burger",
            image: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628.png",
            price: 12.50,
            oldPrice: 18.50,
            rating: 4.7,
            discount: 32,
            isFavorite: false
        },
        {
            id: 1,
            name: "Delicious And Crispy Potato French Fries",
            image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
            price: 18.88,
            oldPrice: 32.88,
            rating: 4.9,
            discount: 54,
            isFavorite: false
        },
        {
            id: 2,
            name: "Classic Cheese Pizza",
            image: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-1.png",
            price: 15.99,
            oldPrice: 24.99,
            rating: 4.8,
            discount: 36,
            isFavorite: true
        },
        {
            id: 3,
            name: "Spicy Chicken Burger",
            image: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628.png",
            price: 12.50,
            oldPrice: 18.50,
            rating: 4.7,
            discount: 32,
            isFavorite: false
        },
        {
            id: 1,
            name: "Delicious And Crispy Potato French Fries",
            image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
            price: 18.88,
            oldPrice: 32.88,
            rating: 4.9,
            discount: 54,
            isFavorite: false
        },
        {
            id: 2,
            name: "Classic Cheese Pizza",
            image: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-1.png",
            price: 15.99,
            oldPrice: 24.99,
            rating: 4.8,
            discount: 36,
            isFavorite: true
        },
        {
            id: 3,
            name: "Spicy Chicken Burger",
            image: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628.png",
            price: 12.50,
            oldPrice: 18.50,
            rating: 4.7,
            discount: 32,
            isFavorite: false
        },

    ]
    return (
        <View style={styles.allItemsContainer}>
            <TitleBar label={"All Items"}></TitleBar>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row', gap: 0 }}>
                {
                    allItemsData.map((item, index) =>
                        <View style={{width: "48%"}} key={index}>
                            <FoodCard isVertical={true} item={item} index={index}></FoodCard>
                        </View>)
                }
            </View>
            {/* <FlatList
                data={allItemsData}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={

                    <TitleBar label="All Items" />

                }
                renderItem={({ item, index }) =>
                    <FoodCard item={item} index={index}></FoodCard>
                }
            ></FlatList> */}
        </View>
    )
}

const styles = StyleSheet.create({
    allItemsContainer: {
        marginBottom: 50,
        marginHorizontal: 10
    }
})