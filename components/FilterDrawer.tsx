import { Category } from "@/assets/products";
import React, { useEffect, useRef } from "react";
import { Animated, Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

type Props = {
    visible: boolean;
    onClose: () => void;

    selectedCategory: Category | "";
    setSelectedCategory: React.Dispatch<
        React.SetStateAction<Category | "">
    >;

    selectedSort: SortType;
    setSelectedSort: React.Dispatch<
        React.SetStateAction<SortType>
    >;

    onApply: () => void;
    onReset: () => void;
};

type SortType =
    | ""
    | "rating"
    | "priceLow"
    | "priceHigh"
    | "discount";


const categories: Category[] = [
    "Burger",
    "Pizza",
    "Chinese",
    "Coffee",
    "Juice",
    "Kebab",
    "Snacks",
    "Donuts",
];

const sortOptions = [
    {
        label: "Rating",
        value: "rating",
    },
    {
        label: "Price: Low to High",
        value: "priceLow",
    },
    {
        label: "Price: High to Low",
        value: "priceHigh",
    },
    {
        label: "Discount",
        value: "discount",
    },
];

export default function FilterDrawer({
    visible,
    onClose,
    selectedCategory,
    setSelectedCategory,

    selectedSort,
    setSelectedSort,

    onApply,
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
            animationType="none"
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

                    <Text style={styles.title}>
                        Filter & Sort
                    </Text>

                    {/* Category */}

                    <Text style={styles.heading}>
                        Category
                    </Text>

                    <View style={styles.chipContainer}>
                        {categories.map((item) => (
                            <Pressable
                                key={item}
                                onPress={() => setSelectedCategory(item)}
                                style={[
                                    styles.chip,
                                    selectedCategory === item && styles.selectedChip,
                                ]}
                            >
                                <Text style={[
                                    styles.chipText,
                                    selectedCategory === item &&
                                    styles.selectedChipText,
                                ]}>
                                    {item}
                                </Text>
                            </Pressable>
                        ))}
                    </View>

                    {/* Sort */}

                    <Text style={styles.heading}>
                        Sort By
                    </Text>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        {sortOptions.map((item) => (
                            <Pressable
                                key={item.value}
                                style={styles.radioRow}
                                onPress={() =>
                                    setSelectedSort(item.value as any)
                                }
                            >
                                <View
                                    style={[
                                        styles.radio,
                                        selectedSort === item.value &&
                                        styles.selectedRadio,
                                    ]}
                                ></View>
                                <Text
                                    style={styles.radioText}
                                >
                                    {item.label}
                                </Text>
                            </Pressable>
                        ))}
                    </ScrollView>

                    <View style={styles.bottomButtons}>

                        <Pressable
                            style={styles.resetBtn}
                            onPress={onReset}
                        >
                            <Text style={styles.resetText}>
                                Reset
                            </Text>
                        </Pressable>

                        <Pressable
                            style={styles.applyBtn}
                            onPress={onApply}
                        >
                            <Text style={styles.applyText}>
                                Apply
                            </Text>
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
    },

    backdrop: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.45)",
    },

    drawer: {
        width: 320,
        backgroundColor: "#FEFEFE",
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 30,
        elevation: 15,
    },

    title: {
        fontSize: 28,
        fontWeight: "700",
        color: "#272727",
        marginBottom: 30,
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