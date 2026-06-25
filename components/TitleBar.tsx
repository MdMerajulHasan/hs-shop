import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import FilterIcon from "./FilterIcon";

type Props = {
    label: string;
    isAllItemPage?: boolean;
    itemName?: string;
    onFilterPress?: () => void;
    filter?: string;
};

export default function TitleBar({ isAllItemPage, label, itemName, onFilterPress, filter }: Props) {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ color: "#272727", fontSize: 28, fontWeight: "700" }}>{label}</Text>
            {
                isAllItemPage ?
                    <Pressable onPress={onFilterPress}>
                        <FilterIcon />
                    </Pressable>
                    :
                    <Pressable
                        onPress={() => router.push({
                            pathname: "/(tabs)/allItems",
                            params: {
                                filter: itemName ? itemName : label,
                                sort: filter === "Best Deals" ? "discount" : filter === "Popular Items" ? "rating" : undefined,
                            }
                        })}
                        style={{ flexDirection: "row" }}>
                        <Text style={{ color: "#272727", fontSize: 16, fontWeight: "500" }}>View All </Text>
                        <Ionicons
                            name="arrow-forward-outline"
                            color={"#272727"}
                            size={24}
                            style={{
                                transform: [{ rotate: "-45deg" }],
                            }}
                        />
                    </Pressable>
            }

        </View>
    )
}