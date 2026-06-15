import { CategoryType } from "@/components/Category";
import { router } from "expo-router";
import { Dispatch, SetStateAction } from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";


type Props = {
    item: CategoryType;
    index: number;
    selectedCategory: string;
    setSelectedCategory: Dispatch<SetStateAction<string>>;
};

export default function CategroyItem({
    item,
    selectedCategory,
    setSelectedCategory,
}: Props) {
    return (<Pressable
        style={[
            styles.categoryImageContainer,
            {
                backgroundColor: selectedCategory === item.id
                    ? "#D76527"
                    : "#D765271A",
            },
        ]}
        onPress={() => {
            setSelectedCategory(item.id);
            router.push({
                pathname: "/(tabs)/allItems",
                params: {
                    filter: item.id,
                }
            });
        }}
    >
        <Image
            source={item.icon}
            style={[
                styles.categoryImage,
                {
                    tintColor: selectedCategory === item.id
                        ? "#F5F5F5"
                        : "#272727",
                },
            ]}
        />
        <Text style={[styles.catygoryText, {
            color: selectedCategory === item.id ? "#F5F5F5" : "#272727",
        }]}>{item.id}</Text>
    </Pressable>
    );
}

const styles = StyleSheet.create({
    categoryImageContainer: {
        height: 90,
        width: 90,
        borderRadius: 80,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 12,
        gap: 10
    },
    categoryImage: {
        width: 30,
        height: 30,
    },
    catygoryText: {
        fontSize: 12,
        fontWeight: "600"

    }
});