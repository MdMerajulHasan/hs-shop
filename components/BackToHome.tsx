import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

type Props = {
    page: string;
}

export default function BackToHome({ page }: Props) {
    return <View>
        <Pressable
            onPress={() => {
                router.push({
                    pathname: page === "active" ? "/registration" : "/"
                })
            }}
            style={{ backgroundColor: "#D76527", flexDirection: "row", gap: 5, padding: 10, borderRadius: 40, alignItems: "center" }}
        >
            {
                (page === "home") || (page === "active") ? <Ionicons color={"#F5F5F5"} size={18} name="arrow-back"></Ionicons> : <Image
                    source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/Vector.png" }}
                    style={{ width: 18, height: 18 }}
                    tintColor={"#F5F5F5"}
                >
                </Image>
            }

            {
                page === "registration" ?
                    <Text style={{ color: "#F5F5F5", fontWeight: "500", fontSize: 14 }}>Go To Home</Text>
                    : page === "active" ? <Text style={{ color: "#F5F5F5", fontWeight: "500", fontSize: 14 }}>Back</Text> :
                        <Text style={{ color: "#F5F5F5", fontWeight: "500", fontSize: 14 }}>Back To Home</Text>
            }

        </Pressable>
    </View>
}