import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

type Props = {
    label: string;
    isAllItemPage?: boolean;
};

export default function TitleBar({ isAllItemPage, label }: Props) {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ color: "#272727", fontSize: 28, fontWeight: "700" }}>{label}</Text>
            {
                isAllItemPage ?
                    <Image style={{ width: 24, height: 24 }} source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/setting-3.png" }}></Image>
                    :
                    <Pressable
                        onPress={() => router.push({
                            pathname: "/(tabs)/allItems",
                            params: {
                                filter: `${label}`
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