import { View, StyleSheet, FlatList, Pressable, Text } from "react-native";
import MenuFormTitle from "./MenuFormTitle";
import { useState } from "react";
import MenuCard from "./MenuCard";

export type menuItemType = {
    id: string;
    image: {
        uri: string
    };
    name: string;
    price: number;
    oldPrice: number;
    rating: number;
}

export type MenuType = {
    id: string;
    name: string;
    items: menuItemType[]
}

export default function Menu() {

    const menuData = [
        {
            id: "1",
            name: "Appetizers",
            items: [
                {
                    id: "1",
                    image: {
                        uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-2.png",
                    },
                    name: "Spring Rolls",
                    price: 7.99,
                    oldPrice: 9.99,
                    rating: 4.8,
                },
                {
                    id: "2",
                    image: {
                        uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-2.png",
                    },
                    name: "Garlic Bread",
                    price: 5.49,
                    oldPrice: 6.99,
                    rating: 4.6,
                },
                {
                    id: "3",
                    image: {
                        uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-2.png",
                    },
                    name: "Chicken Wings",
                    price: 10.99,
                    oldPrice: 12.99,
                    rating: 4.9,
                },
                {
                    id: "4",
                    image: {
                        uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-2.png",
                    },
                    name: "French Fries",
                    price: 4.99,
                    oldPrice: 5.99,
                    rating: 4.5,
                },
            ],
        },
        {
            id: "2",
            name: "Main Courses",
            items: [
                {
                    id: "5",
                    image: {
                        uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-2.png",
                    },
                    name: "Grilled Chicken",
                    price: 18.99,
                    oldPrice: 21.99,
                    rating: 4.9,
                },
                {
                    id: "6",
                    image: {
                        uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-2.png",
                    },
                    name: "Beef Steak",
                    price: 24.99,
                    oldPrice: 28.99,
                    rating: 4.8,
                },
                {
                    id: "7",
                    image: {
                        uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-2.png",
                    },
                    name: "Seafood Pasta",
                    price: 17.99,
                    oldPrice: 19.99,
                    rating: 4.7,
                },
                {
                    id: "8",
                    image: {
                        uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-2.png",
                    },
                    name: "Vegetable Fried Rice",
                    price: 12.99,
                    oldPrice: 14.99,
                    rating: 4.6,
                },
            ],
        },
        {
            id: "3",
            name: "Desserts",
            items: [
                {
                    id: "9",
                    image: {
                        uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-2.png",
                    },
                    name: "Chocolate Cake",
                    price: 6.99,
                    oldPrice: 8.99,
                    rating: 4.9,
                },
                {
                    id: "10",
                    image: {
                        uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-2.png",
                    },
                    name: "Ice Cream",
                    price: 4.99,
                    oldPrice: 5.99,
                    rating: 4.7,
                },
                {
                    id: "11",
                    image: {
                        uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-2.png",
                    },
                    name: "Cheesecake",
                    price: 7.99,
                    oldPrice: 9.49,
                    rating: 4.8,
                },
                {
                    id: "12",
                    image: {
                        uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-2.png",
                    },
                    name: "Brownie",
                    price: 5.99,
                    oldPrice: 6.99,
                    rating: 4.6,
                },
            ],
        },
        {
            id: "4",
            name: "Drinks & Beverages",
            items: [
                {
                    id: "13",
                    image: {
                        uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-2.png",
                    },
                    name: "Coca-Cola",
                    price: 2.99,
                    oldPrice: 3.49,
                    rating: 4.5,
                },
                {
                    id: "14",
                    image: {
                        uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-2.png",
                    },
                    name: "Orange Juice",
                    price: 3.99,
                    oldPrice: 4.99,
                    rating: 4.8,
                },
                {
                    id: "15",
                    image: {
                        uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-2.png",
                    },
                    name: "Coffee",
                    price: 4.49,
                    oldPrice: 5.49,
                    rating: 4.9,
                },
                {
                    id: "16",
                    image: {
                        uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/image-1628-2.png",
                    },
                    name: "Lemon Iced Tea",
                    price: 3.49,
                    oldPrice: 4.49,
                    rating: 4.7,
                },
            ],
        },
    ];

    const [selectedItem, setSelectedItem] = useState(menuData[0]);


    return (
        <View style={styles.menuContainer}>
            <MenuFormTitle label={"Browse The Menu"}></MenuFormTitle>
            <FlatList
                data={menuData}
                horizontal
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    const selected = item.id === selectedItem.id;
                    return (<Pressable
                        onPress={() => setSelectedItem(item)}
                    >
                        <Text
                            style={[styles.menuName,
                            {
                                color: selected ? "#D76527" : "#BCBCBC",
                                borderBottomColor: selected ? "#D76527" : "#BCBCBC"
                            }]}>
                            {item.name}
                        </Text>
                    </Pressable>)
                }}
            ></FlatList>
            <FlatList
                data={selectedItem.items}
                keyExtractor={(item) => item.id}
                style={{ overflow: "scroll", marginTop: 20 }}
                renderItem={({ item }) => <MenuCard item={item}></MenuCard>}
            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    menuContainer: {
        overflow: "scroll",
        paddingHorizontal: 20,
        marginTop: 20,
    },
    menuName: {
        color: "#BCBCBC",
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#BCBCBC",
        fontSize: 16,
        fontWeight: 500
    },
})