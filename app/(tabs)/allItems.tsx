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
import { PRODUCTS, Product } from "@/assets/products";

export default function AllItems() {

    const chunk = (array: Product[], size: number): Product[][] => {
        const result: Product[][] = [];

        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }

        return result;
    };

    const sections = [
        {
            type: "cards",
            data: chunk(PRODUCTS.slice(0, 8), 2),
        },
        {
            type: "itemsSlider",
            data: [[]],
        },
        {
            type: "cards",
            data: chunk(PRODUCTS.slice(8, 16), 2),
        },
        {
            type: "comboSlider",
            data: [[]],
        },
        {
            type: "cards",
            data: chunk(PRODUCTS.slice(16), 2),
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
                    renderItem={({ item, section, index }) => {
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
                                    index={index}
                                    isVertical
                                />

                                {item[1] ? (
                                    <FoodCard
                                        item={item[1]}
                                        index={index}
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