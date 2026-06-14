import CategoryItem from "@/components/CategoryItem";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";


export type CategoryType = {
    id: string;
    icon: {
        uri: string;
    };
};

export default function Category() {

    const categories = [
        {
            id: 'Burger',
            icon: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/category1.png" }
        },
        {
            id: "Chinese",
            icon: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/chinese-icon.png" }
        },
        {
            id: 'Pizza',
            icon: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/category2.png" }
        },
        {
            id: "Kebab",
            icon: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/category3.png" }
        },
        {
            id: "Snacks",
            icon: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/category4.png" }
        },
        {
            id: "Donuts",
            icon: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/category5.png" }
        },
        {
            id: "Coffee",
            icon: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/category6.png" }
        },
        {
            id: "Juice",
            icon: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/category7.png" }
        }

    ]

    const [selectedCategory, setSelectedCategory] = useState('');

    return (
        <View
            style={styles.categoryConatiner}
        >
            <FlatList
                data={categories}
                renderItem={({ item, index }) => <View style={{marginRight: 20}}>
                    <CategoryItem
                        key={item.id}
                        item={item}
                        index={index}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                </View>
                }
                horizontal
            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    categoryConatiner: {
        flexDirection: 'row',
        gap: 20,
        marginHorizontal: 10,
        marginTop: 16
    }
})