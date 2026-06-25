import { View, StyleSheet, FlatList, Pressable, Text } from "react-native";
import MenuFormTitle from "./MenuFormTitle";
import { useMemo, useState } from "react";
import MenuCard from "./MenuCard";
import { PRODUCTS } from "@/assets/products";

export default function Menu() {

    const menuNames = useMemo(() => {
        return [...new Set(PRODUCTS.map((food) => food.menu))]
    }, [])
    const [selectedItem, setSelectedItem] = useState(menuNames[0]);

    const menuData = useMemo(() => {
        return PRODUCTS.filter((food) => {
            return food.menu === selectedItem;
        })
    }, [selectedItem])

    return (
        <View style={styles.menuContainer}>
            <MenuFormTitle label={"Browse The Menu"}></MenuFormTitle>
            <FlatList
                data={menuNames}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    const selected = item === selectedItem;
                    return (<Pressable
                        onPress={() => setSelectedItem(item)}
                    >
                        <Text
                            style={[styles.menuName,
                            {
                                color: selected ? "#D76527" : "#BCBCBC",
                                borderBottomColor: selected ? "#D76527" : "#BCBCBC"
                            }]}>
                            {item}
                        </Text>
                    </Pressable>)
                }}
            ></FlatList>
            <FlatList
                data={menuData.slice(0,5)}
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