import { PRODUCTS, Product, Category } from "@/assets/products";
import ComboSlider from "@/components/ComboSlider";
import FilterDrawer from "@/components/FilterDrawer";
import FoodCard from "@/components/FoodCard";
import Items from "@/components/Items";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Slider from "@/components/Slider";
import TitleBar from "@/components/TitleBar";
import { useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SectionList, SectionListData, SectionListRenderItem, View } from "react-native";

type SortType =
    | ""
    | "rating"
    | "priceLow"
    | "priceHigh"
    | "discount";

type CardSection = {
    type: "cards";
    data: Product[][];
};

type SliderSection = {
    type: "itemsSlider" | "comboSlider";
    data: never[][];
};

type Section = CardSection | SliderSection;

export default function AllItems() {

    const [filterItem, setFilterItem] = useState("All");
    const [showFilter, setShowFilter] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Category | "">("");
    const [selectedSort, setSelectedSort] = useState<SortType>("");

    const showSpecial = ![
        "Special Breakfast",
        "Special Lunch",
        "Special Dinner",
    ].includes(filterItem);

    const showCombo = filterItem !== "Meals Box";

    const { filter, category, sort } = useLocalSearchParams<{
        filter?: string;
        category?: Category;
        sort?: SortType;
    }>();

    useEffect(() => {
        setFilterItem(filter ?? "All");

        setSelectedCategory(
            (category as Category) ?? ""
        );

        setSelectedSort(
            (sort as SortType) ?? ""
        );
    }, [filter, category, sort]);

    const baseProducts = useMemo(() => {
        return PRODUCTS.filter(
            (p) => p.itemType !== "Special" && !p.isCombo
        );
    }, []);

    const productsToShow = useMemo(() => {
        let data = [...baseProducts];

        if (filterItem === "Best Deals") {
            data = data.filter(item => item.isAvailable)
            .sort((a, b) => b.discount - a.discount);

        } else if (filterItem === "Popular Items") {
            data = data.filter(
                item => item.isAvailable && item.isPopular
            ).sort((a, b) => b.rating - a.rating);

        } else if (
            filterItem !== "All" &&
            filterItem !== "All Items"
        ) {

            data = data.filter(
                item =>
                    item.isAvailable &&
                    item.category === filterItem
            );

        }

        if (selectedCategory) {
            data = data.filter(
                item => item.category === selectedCategory
            );
        }

        switch (selectedSort) {

            case "rating":
                data.sort((a, b) => b.rating - a.rating);
                break;

            case "discount":
                data.sort((a, b) => b.discount - a.discount);
                break;

            case "priceLow":
                data.sort((a, b) => a.price - b.price);
                break;

            case "priceHigh":
                data.sort((a, b) => b.price - a.price);
                break;

            default:
                break;
        }

        return data;


    }, [baseProducts, filterItem, selectedCategory, selectedSort]);

    const chunk = useCallback((array: Product[], size: number) => {
        const result: Product[][] = [];

        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }

        return result;
    }, []);

    const sections = useMemo<Section[]>(
        () => [
            {
                type: "cards",
                data: chunk(productsToShow.slice(0, 8), 2),
            },
            {
                type: "itemsSlider",
                data: [[]],
            },
            {
                type: "cards",
                data: chunk(productsToShow.slice(8, 16), 2),
            },
            {
                type: "comboSlider",
                data: [[]],
            },
            {
                type: "cards",
                data: chunk(productsToShow.slice(16), 2),
            },
        ],
        [productsToShow, chunk]
    );

    const specialItems = useMemo(() => {
        return PRODUCTS.filter((food) => {
            return food.itemType === "Special";
        })
    }, []);


    const comboData = useMemo(
        () => PRODUCTS.filter((p) => p.isCombo),
        []
    );

    const renderItem: SectionListRenderItem<Product[], Section> = useCallback(
        ({ item, section, index }) => {
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
        },
        []
    );

    const renderSectionHeader = useCallback(
        ({ section }: { section: SectionListData<Product[], Section> }) => {
            if (section.type === "itemsSlider" && showCombo) {
                return <Items specialItems={specialItems} />;
            }

            if (section.type === "comboSlider" && showSpecial) {
                return <ComboSlider comboItems={comboData} />;
            }

            return null;
        },
        [showSpecial, showCombo, specialItems, comboData]
    );

    const handleApplyFilter = () => {
        if (selectedCategory) {
            setFilterItem(selectedCategory);
        }

        setShowFilter(false);
    };

    const handleResetFilter = () => {
        setFilterItem("All");

        setSelectedCategory("");

        setSelectedSort("");

        setShowFilter(false);

    };

    return (
        <View>
            <View style={{
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingVertical: 15,
                zIndex: 10,
                backgroundColor: "#F5F5F5"
            }}>
                <Navbar></Navbar>
            </View>

            <View style={{ marginTop: -20, zIndex: 1 }}>
                <SectionList
                    sections={sections}
                    keyExtractor={(item) =>
                        item.map((p) => p.id).join("-")
                    }
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
                                    zIndex: 1
                                }}
                            >
                                <SearchBar />
                            </View>

                            <View style={{ marginTop: -16, zIndex: 0 }}>
                                <Slider />
                            </View>

                            <View style={{ marginHorizontal: 10, marginTop: 40 }}>
                                <TitleBar
                                    isAllItemPage
                                    label={filterItem}
                                    onFilterPress={() => setShowFilter(true)}
                                />
                            </View>
                        </>
                    }
                    renderSectionHeader={renderSectionHeader}
                    renderItem={renderItem}
                />
                <FilterDrawer
                    visible={showFilter}
                    onClose={() => setShowFilter(false)}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    selectedSort={selectedSort}
                    setSelectedSort={setSelectedSort}
                    onApply={handleApplyFilter}
                    onReset={handleResetFilter}
                />
            </View>
        </View>
    )

}