import FilterIcon from "@/components/FilterIcon";
import Header from "@/components/Header";
import SmallFoodCard from "@/components/SmallFoodCard";
import { Pressable, View, StyleSheet, FlatList } from "react-native";

const wishlistData = [
    {
        id: 1,
        name: "Delicious And Crispy Potato French Fries",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
        price: 18.88,
        oldPrice: 32.88,
        rating: 4.9,
        reviewCount: 1254,
        discount: 54,
        isFavorite: true,
        isAvailable: true,
        category: "Fast Food",
        brand: "Foodie's",
        unit: "250g",
        stock: 18
    },
    {
        id: 2,
        name: "Fresh Organic Red Apples",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/apple.png",
        price: 6.99,
        oldPrice: 8.99,
        rating: 4.8,
        reviewCount: 432,
        discount: 22,
        isFavorite: true,
        isAvailable: true,
        category: "Fruits",
        brand: "Nature Farm",
        unit: "1kg",
        stock: 50
    },
    {
        id: 3,
        name: "Premium Beef Burger",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/burger.png",
        price: 12.5,
        oldPrice: 15.99,
        rating: 4.7,
        reviewCount: 895,
        discount: 18,
        isFavorite: true,
        isAvailable: false,
        category: "Burger",
        brand: "Burger House",
        unit: "1 Piece",
        stock: 0
    },
    {
        id: 4,
        name: "Italian Cheese Pizza",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/pizza.png",
        price: 22.99,
        oldPrice: 29.99,
        rating: 4.9,
        reviewCount: 2100,
        discount: 23,
        isFavorite: true,
        isAvailable: true,
        category: "Pizza",
        brand: "Pizza King",
        unit: "Medium",
        stock: 12
    },
    {
        id: 5,
        name: "Fresh Orange Juice",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/orange-juice.png",
        price: 4.99,
        oldPrice: 6.49,
        rating: 4.6,
        reviewCount: 315,
        discount: 23,
        isFavorite: true,
        isAvailable: true,
        category: "Beverages",
        brand: "Fresh Sip",
        unit: "1L",
        stock: 30
    },
]

export default function WishList() {
    return (
        <View style={{ flex: 1 }}>
            {/* header */}
            <View
                style={styles.header}
            >
                <Header count={wishlistData.length} page={"wishlist"}></Header>
                <Pressable>
                    <FilterIcon></FilterIcon>
                </Pressable>
            </View>
            {/* -------------------------------------------------------- */}
            <FlatList
                data={wishlistData}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={{marginHorizontal: 10}}>
                            <SmallFoodCard item={item} page={"wishlist"}></SmallFoodCard>
                        </View>
                    )
                }
                }

                ItemSeparatorComponent={() => <View style={{
                    height: 1,
                    backgroundColor: "#E9E9E9",
                    marginVertical: 16,
                    marginHorizontal: 10,
                }}>
                </View>}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 25,
        marginHorizontal: 10,
        marginBottom: 20
    },
})