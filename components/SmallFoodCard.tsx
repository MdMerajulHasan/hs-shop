import { CartDataType } from "@/app/cart";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Text, View, StyleSheet } from "react-native";

type Props = {
    item: CartDataType;
}

export default function SmallFoodCard({ item }: Props) {
    return (
        <View style={styles.cartCardContainer}>
            <View style={{ backgroundColor: "#5757571A", height: 30, width: 30, padding: 6, borderRadius: 30 }}>
                <Image tintColor={"#130F26"} style={{ width: 18, height: 18 }} source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/Delete.png" }}></Image>
            </View>

            <View style={[styles.cardImageContainre]}>
                <Image style={{ width: "95%", height: "95%" }} source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png" }}></Image>
            </View>

            <View style={{ flex: 1, gap: 3 }}>
                <Text style={styles.nameText}>{item.name}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                        <Text style={{ color: "#272727", fontSize: 16, fontWeight: "700" }}>${item.price}</Text>
                        <Text style={{ color: "#ADADAD", fontSize: 12, fontWeight: "400", textDecorationLine: "line-through" }}>${item.oldPrice}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Image tintColor={"#FFA927"} style={{ width: 16, height: 16 }} source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/Star.png" }}></Image>
                        <Text style={{ fontSize: 14, color: "#575757", fontWeight: 400 }}>{item.rating}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.countContainer}>
                <Ionicons size={18} color={"#ADADAD"} name="remove-circle-sharp"></Ionicons>
                <Text style={styles.countNumber}>1</Text>
                <Ionicons size={18} color={"#272727"} name="add-circle-sharp"></Ionicons>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStart: {
        flexDirection: "row",
        gap: 16,
        alignItems: "center"
    },
    cardImageContainre: {
        backgroundColor: "#E9E9E91A",
        borderRadius: 10,
        borderColor: "#E9E9E9",
        borderWidth: 1,
        width: 90, height: 90
    }, countContainer: {
        borderWidth: 1,
        borderColor: "#D5D5D5",
        borderRadius: 66,
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center"
    },
    countNumber: {
        fontSize: 18,
        fontWeight: "500"
    },
    cartCardContainer: {
        flexDirection: "row",
        gap: 10
    },
    nameText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#575757"
    }
})