import ComboSlider from "@/components/ComboSlider";
import FoodCard from "@/components/FoodCard";
import Items from "@/components/Items";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Slider from "@/components/Slider";
import TitleBar from "@/components/TitleBar";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, SectionList } from "react-native";

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
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection1.png",
        price: 15.99,
        oldPrice: 24.99,
        rating: 4.8,
        discount: 36,
        isFavorite: true
    },
    {
        id: 3,
        name: "Spicy Chicken Burger",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
        price: 12.50,
        oldPrice: 18.50,
        rating: 4.7,
        discount: 32,
        isFavorite: false
    },
    {
        id: 4,
        name: "Delicious And Crispy Potato French Fries",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection1.png",
        price: 18.88,
        oldPrice: 32.88,
        rating: 4.9,
        discount: 54,
        isFavorite: false
    },
    {
        id: 5,
        name: "Classic Cheese Pizza",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
        price: 15.99,
        oldPrice: 24.99,
        rating: 4.8,
        discount: 36,
        isFavorite: true
    },
    {
        id: 6,
        name: "Spicy Chicken Burger",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection1.png",
        price: 12.50,
        oldPrice: 18.50,
        rating: 4.7,
        discount: 32,
        isFavorite: false
    },
    {
        id: 7,
        name: "Delicious And Crispy Potato French Fries",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
        price: 18.88,
        oldPrice: 32.88,
        rating: 4.9,
        discount: 54,
        isFavorite: false
    },
    {
        id: 8,
        name: "Classic Cheese Pizza",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection1.png",
        price: 15.99,
        oldPrice: 24.99,
        rating: 4.8,
        discount: 36,
        isFavorite: true
    },
    {
        id: 9,
        name: "Spicy Chicken Burger",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
        price: 12.50,
        oldPrice: 18.50,
        rating: 4.7,
        discount: 32,
        isFavorite: false
    },
    {
        id: 10,
        name: "Delicious And Crispy Potato French Fries",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection1.png",
        price: 18.88,
        oldPrice: 32.88,
        rating: 4.9,
        discount: 54,
        isFavorite: false
    },
    {
        id: 11,
        name: "Classic Cheese Pizza",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
        price: 15.99,
        oldPrice: 24.99,
        rating: 4.8,
        discount: 36,
        isFavorite: true
    },
    {
        id: 12,
        name: "Spicy Chicken Burger",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection1.png",
        price: 12.50,
        oldPrice: 18.50,
        rating: 4.7,
        discount: 32,
        isFavorite: false
    },
    {
        id: 13,
        name: "Delicious And Crispy Potato French Fries",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
        price: 18.88,
        oldPrice: 32.88,
        rating: 4.9,
        discount: 54,
        isFavorite: false
    },
    {
        id: 14,
        name: "Classic Cheese Pizza",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection1.png",
        price: 15.99,
        oldPrice: 24.99,
        rating: 4.8,
        discount: 36,
        isFavorite: true
    },
    {
        id: 15,
        name: "Spicy Chicken Burger",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
        price: 12.50,
        oldPrice: 18.50,
        rating: 4.7,
        discount: 32,
        isFavorite: false
    },
    {
        id: 16,
        name: "Classic Cheese Pizza",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection1.png",
        price: 15.99,
        oldPrice: 24.99,
        rating: 4.8,
        discount: 36,
        isFavorite: true
    },
    {
        id: 17,
        name: "Spicy Chicken Burger",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
        price: 12.50,
        oldPrice: 18.50,
        rating: 4.7,
        discount: 32,
        isFavorite: false
    },
    {
        id: 18,
        name: "Classic Cheese Pizza",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection1.png",
        price: 15.99,
        oldPrice: 24.99,
        rating: 4.8,
        discount: 36,
        isFavorite: true
    },
    {
        id: 19,
        name: "Spicy Chicken Burger",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
        price: 12.50,
        oldPrice: 18.50,
        rating: 4.7,
        discount: 32,
        isFavorite: false
    },

]

type FoodItem = {
    id: number;
    name: string;
    image: string;
    price: number;
    oldPrice: number;
    rating: number;
    discount: number;
    isFavorite: boolean;
};

export default function AllItems() {

    const chunk = (array: FoodItem[], size: number): FoodItem[][] => {
        const result = [];

        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }

        return result;
    };

    const sections = [
        {
            type: "cards",
            data: chunk(allItemsData.slice(0, 8), 2),
        },
        {
            type: "itemsSlider",
            data: [[]],
        },
        {
            type: "cards",
            data: chunk(allItemsData.slice(8, 16), 2),
        },
        {
            type: "comboSlider",
            data: [[]],
        },
        {
            type: "cards",
            data: chunk(allItemsData.slice(16), 2),
        },
    ];

    const { filter } = useLocalSearchParams<{
        filter?: string;
    }>();

    const [filterItem, setFilterItem] = useState("All");

    useEffect(() => {
        if (filter) {
            setFilterItem(filter);
        }
    }, [filter])

    return (
        <View>
            <View style={{
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingVertical: 15,
                zIndex: 1,
                backgroundColor: "#F5F5F5"
            }}>
                <Navbar></Navbar>
            </View>

            <View style={{ marginTop: -20, zIndex: 0 }}>

                <SectionList
                    sections={sections}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 190,
                    }}
                    ListHeaderComponent={
                        <>
                            <View
                                style={{
                                    paddingTop: 15,
                                    paddingBottom: 16,
                                    backgroundColor: "#F5F5F5",
                                    borderBottomLeftRadius: 20,
                                    borderBottomRightRadius: 20,
                                }}
                            >
                                <SearchBar />
                            </View>

                            <View style={{ marginTop: -16 }}>
                                <Slider />
                            </View>

                            <View style={{ marginHorizontal: 10, marginTop: 40 }}>
                                <TitleBar
                                    isAllItemPage
                                    label={filterItem}
                                />
                            </View>
                        </>
                    }
                    renderSectionHeader={({ section }) => {
                        if (section.type === "itemsSlider") {
                            return <Items />;
                        }

                        if (section.type === "comboSlider") {
                            return <ComboSlider />;
                        }

                        return null;
                    }}
                    renderItem={({ item, section }) => {
                        if (section.type !== "cards") return null;

                        return (
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginHorizontal: 10,
                                    marginBottom: 20,
                                }}
                            >
                                <FoodCard
                                    item={item[0]}
                                    index={item[0].id}
                                    isVertical
                                />

                                {item[1] ? (
                                    <FoodCard
                                        item={item[1]}
                                        index={item[1].id}
                                        isVertical
                                    />
                                ) : (
                                    <View style={{ width: "48%" }} />
                                )}
                            </View>
                        );
                    }}
                />

                
            </View>
        </View>
    )

}