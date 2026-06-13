import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { FoodItem } from "./BestDeals";

export type Props = {
    item: FoodItem,
    index: number,
    isVertical?: boolean
}

export default function FoodCard({ item, index, isVertical }: Props) {
    return (
        <View style={[styles.cardContainer,{ width: isVertical? 160: 220}]}>

            <View style={styles.offerTextContainer}>
                <Text
                    style={styles.offerText}>
                    -{item.discount}% off
                </Text>
            </View>

            <Pressable style={styles.loveIcon}>
                <Ionicons name="heart-outline" size={24} color={"#575757"}></Ionicons>
            </Pressable>

            <View style={{backgroundColor: "#E9E9E9", borderRadius: 10}}>

            <Image style={[styles.cardImage,{width: isVertical ? 160: 220}]} source={{ uri: item.image }}></Image>
            </View>

            <Text style={styles.itemName}>{item.name}</Text>


            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    <View style={{flexDirection: 'row', gap: 4}}>
                        <Text style={{ fontWeight: "700", fontSize: 20, color: "#272727" }}>${item.price}</Text>
                        <Text style={styles.oldPrice}>${item.oldPrice}</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
                        <Image
                            source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/Star.png" }}
                            style={{ width: 15, height: 14 }}
                        ></Image>
                        <Text style={{ color: "#575757", fontSize: 14, fontWeight: "400" }}>{item.rating}</Text>
                    </View>
                </View>


                <Pressable style={styles.cartContainer}>
                    <Image source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/bag.png" }}
                        style={{ width: 24, height: 24 }}
                    ></Image>
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 20,
        height: 340,
        justifyContent: "space-between",
        flexDirection: "column",
    },
    offerTextContainer: {
        backgroundColor: "#E93037",
        width: 63,
        height: 24,
        borderRadius: 40,
        paddingVertical: 4,
        paddingHorizontal: 6,
        position: "absolute",
        top: 8,
        left: 8,
        zIndex: 1
    },
    offerText: {
        color: "#F5F5F5",
        fontWeight: "500",
        fontSize: 12,
        textAlign: "center"
    },
    loveIcon: {
        position: "absolute",
        zIndex: 2,
        top: 8,
        right: 8,
        padding: 4,
        backgroundColor: "#5757571A",
        borderRadius: 30
    },
    cardImage: {
        height: 224,
        borderRadius: 10,
        overflow: "hidden"
    },
    itemName: {
        color: "#575757",
        fontSize: 16,
        fontWeight: "500",
        overflow: "hidden"
    },
    cartContainer: {
        backgroundColor: "#D76527",
        padding: 12,
        width: 48,
        height: 48,
        borderRadius: 66
    },
    oldPrice: {
        textDecorationLine: "line-through", 
        color: "#ADADAD", 
        paddingVertical: 4, 
        fontWeight: "400"
    }
})