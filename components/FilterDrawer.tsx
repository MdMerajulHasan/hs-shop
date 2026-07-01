import { Category } from "@/assets/products";
import React, { useEffect, useRef } from "react";
import { Animated, Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import FilterSection from "./FilterSection";
import FilterCheckbox from "./FilterCheckBox";
import PriceRangeSlider from "@/components/PriceRangeSlider";
import Ionicons from "@expo/vector-icons/Ionicons";


type AvailabilityType = | "" | "available" | "instock" | "unavailable";

type Props = {
    visible: boolean;
    onClose: () => void;

    // Category
    selectedCategory: Category | "";
    setSelectedCategory: React.Dispatch<
        React.SetStateAction<Category | "">
    >;

    // Sort
    selectedSort: SortType;
    setSelectedSort: React.Dispatch<
        React.SetStateAction<SortType>
    >;

    // Branch
    selectedBranch: string;
    setSelectedBranch: React.Dispatch<
        React.SetStateAction<string>
    >;

    // Size
    selectedSizes: string[];
    setSelectedSizes: React.Dispatch<
        React.SetStateAction<string[]>
    >;

    // Availability
    selectedAvailability: AvailabilityType;
    setSelectedAvailability: React.Dispatch<
        React.SetStateAction<AvailabilityType>
    >;

    // Dynamic Options
    branchOptions: {
        value: string;
        label: string;
    }[];

    sizeOptions: {
        value: string;
        label: string;
    }[];

    // Price
    minPrice: number;
    maxPrice: number;

    priceRange: {
        min: number;
        max: number;
    };

    setPriceRange: React.Dispatch<
        React.SetStateAction<{
            min: number;
            max: number;
        }>
    >;

    onReset: () => void;
};

type SortType = | "" | "rating" | "priceLow" | "priceHigh" | "discount";


const categories: Category[] = ["Burger", "Pizza", "Chinese", "Coffee", "Juice", "Kebab", "Snacks", "Donuts",];

// const sortOptions = [
//     {
//         label: "Rating",
//         value: "rating",
//     },
//     {
//         label: "Price: Low to High",
//         value: "priceLow",
//     },
//     {
//         label: "Price: High to Low",
//         value: "priceHigh",
//     },
//     {
//         label: "Discount",
//         value: "discount",
//     },
// ];

const availabilityOptions = [
    {
        value: "available",
        label: "Available",
    },
    {
        value: "instock",
        label: "In Stock",
    },
    {
        value: "unavailable",
        label: "Not Available",
    },
];

export default function FilterDrawer({
    visible,
    onClose,

    selectedCategory,
    setSelectedCategory,

    selectedSort,
    setSelectedSort,

    selectedBranch,
    setSelectedBranch,

    selectedSizes,
    setSelectedSizes,

    selectedAvailability,
    setSelectedAvailability,

    branchOptions,
    sizeOptions,

    minPrice,
    maxPrice,

    priceRange,
    setPriceRange,

    onReset,
}: Props) {

    const slideAnim = useRef(new Animated.Value(350)).current;

    useEffect(() => {
        if (visible) {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 280,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(slideAnim, {
                toValue: 350,
                duration: 220,
                useNativeDriver: true,
            }).start();
        }
    }, [visible, slideAnim]);

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            statusBarTranslucent={true}
            navigationBarTranslucent={true}
        >
            <View style={styles.container}>

                <Pressable
                    style={styles.backdrop}
                    onPress={onClose}
                />
                <Animated.View
                    style={[
                        styles.drawer,
                        {
                            transform: [
                                {
                                    translateX: slideAnim,
                                },
                            ],
                        },
                    ]}
                >

                    <View style={styles.header}>
                        <Text style={styles.title}>Filter By</Text>

                        <Pressable
                            onPress={onClose}
                            hitSlop={10}
                        >
                            <Ionicons
                                name="close"
                                size={24}
                                color="#272727"
                            />
                        </Pressable>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        {/* Category */}
                        <FilterSection
                            title="Category"
                            scrollable
                            maxHeight={200}
                        >
                            {categories.map((item) => (
                                <FilterCheckbox
                                    key={item}
                                    label={item}
                                    checked={selectedCategory === item}
                                    onPress={() =>
                                        setSelectedCategory(prev =>
                                            prev === item ? "" : item
                                        )
                                    }
                                />
                            ))}
                        </FilterSection>

                        {/* filter branch */}
                        <FilterSection
                            title="Branch"
                            scrollable
                            maxHeight={150}
                        >
                            {branchOptions.map(branch => (
                                <FilterCheckbox
                                    key={branch.value}
                                    label={branch.label}
                                    checked={selectedBranch === branch.value}
                                    onPress={() =>
                                        setSelectedBranch(prev =>
                                            prev === branch.value ? "" : branch.value
                                        )
                                    }
                                />
                            ))}
                        </FilterSection>

                        {/* availability filter */}
                        <FilterSection
                            title="Availability"
                        >
                            {availabilityOptions.map(item => (
                                <FilterCheckbox
                                    key={item.value}
                                    label={item.label}
                                    checked={selectedAvailability === item.value}
                                    onPress={() =>
                                        setSelectedAvailability(prev =>
                                            prev === item.value
                                                ? ""
                                                : item.value as AvailabilityType
                                        )
                                    }
                                />
                            ))}
                        </FilterSection>

                        {/* price range */}
                        {/* <FilterSection title="Price">
                        </FilterSection> */}
                        <View style={{
                            marginBottom: 10, borderBottomWidth: 1,
                            borderBottomColor: "#F3F3F3",
                            paddingBottom: 10,
                        }}  >
                            <Text style={styles.priceTitle}>Price</Text>
                            <PriceRangeSlider
                                minPrice={minPrice}
                                maxPrice={maxPrice}
                                value={priceRange}
                                onChange={setPriceRange}
                            />
                        </View>
                        {/* size filter */}
                        <FilterSection
                            title="Size"
                            scrollable
                            maxHeight={170}
                        >
                            {sizeOptions.map(size => (
                                <FilterCheckbox
                                    key={size.value}
                                    label={size.label}
                                    checked={selectedSizes.includes(size.value)}
                                    onPress={() => {
                                        setSelectedSizes(prev =>
                                            prev.includes(size.value)
                                                ? prev.filter(value => value !== size.value)
                                                : [...prev, size.value]
                                        );
                                    }}
                                />
                            ))}
                        </FilterSection>

                        {/* Sort */}

                        {/* <FilterSection
                            title="Sort"
                        >
                            {sortOptions.map(item => (
                                <FilterCheckbox
                                    key={item.value}
                                    label={item.label}
                                    checked={selectedSort === item.value}
                                    onPress={() => { }}
                                />
                            ))}
                        </FilterSection> */}
                    </ScrollView>
                    <View style={styles.bottomButtons}>
                        <Pressable
                            style={styles.resetBtn}
                            onPress={onReset}
                        >
                            <Text style={styles.resetText}>Reset</Text>
                        </Pressable>

                        <Pressable
                            style={styles.applyBtn}
                            onPress={onClose}
                        >
                            <Text style={styles.applyText}>Apply</Text>
                        </Pressable>
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
         borderBottomWidth: 1,
        borderBottomColor: "#CED2CE",
        paddingBottom: 10,
    },
    backdrop: {
        flex: 1,
    },

    drawer: {
        width: "80%",
        backgroundColor: "#FEFEFE",
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 30,
        elevation: 15,
        justifyContent: "flex-end",
        marginBottom: 50,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },

    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#272727",
        marginBottom: 10,
    },
    priceTitle: {
        fontSize: 16,
        fontWeight: "500",
        color: "#272727",
    },

    heading: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 16,
        color: "#272727",
    },

    chipContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
        marginBottom: 30,
    },

    chip: {
        borderWidth: 1,
        borderColor: "#F5F5F5",
        borderRadius: 30,
        paddingHorizontal: 18,
        paddingVertical: 10,
    },

    chipText: {
        fontSize: 15,
        fontWeight: "500",
    },

    radioRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },

    radio: {
        width: 22,
        padding: 2,
        height: 22,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#F5F5F5",
        marginRight: 12,
    },

    radioText: {
        fontSize: 16,
        color: "#575757",
    },

    bottomButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 40,
    },

    resetBtn: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#D76527",
        paddingVertical: 14,
        borderRadius: 40,
        marginRight: 12,
        alignItems: "center",
    },

    resetText: {
        color: "#D76527",
        fontWeight: "700",
        fontSize: 16,
    },

    applyBtn: {
        flex: 1,
        backgroundColor: "#D76527",
        paddingVertical: 14,
        borderRadius: 40,
        alignItems: "center",
    },

    applyText: {
        color: "#FEFEFE",
        fontWeight: "700",
        fontSize: 16,
    },
    selectedChip: {
        backgroundColor: "#D76527",
        borderColor: "#D76527",
    },

    selectedChipText: {
        color: "#FEFEFE",
    },

    selectedRadio: {
        borderColor: "#D76527",
        backgroundColor: "#D76527",
    },

});