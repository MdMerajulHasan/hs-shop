import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { Product } from "@/assets/products";
import { router } from "expo-router";
type Props = {
    item: Product;
}

export default function MenuCard({ item }: Props) {
    return (
        <Pressable
            onPress={() => {
                router.push({
                    pathname: "/Details",
                    params: {
                        id: item.id
                    }
                })
            }}
            style={styles.menuCard}>
            <Image
                style={styles.cardImage}
                source={{ uri: item.image }}
            ></Image>
            <View style={styles.textContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
                <View style={styles.priceRatingContainer}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>${item.price}</Text>
                        <Text style={styles.odlPriceText}>${item.oldPrice}</Text>
                    </View>
                    <View style={styles.ratingContainer}>
                        <Image
                            style={styles.ratingImage}
                            source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/Star.png" }}
                        >
                        </Image>
                        <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    menuCard: {
        backgroundColor: "#D765270D",
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#272727",
        marginBottom: 10,
        flexDirection: "row",
        gap: 16,
        alignItems: "center"
    },
    textContainer: {
        gap: 10,
        flex: 1
    },
    cardImage: {
        width: 80,
        height: 80,
        borderRadius: 10
    },
    nameText: {
        color: "#D5D5D5",
        fontSize: 18,
        fontWeight: "500"
    },
    priceText: {
        color: "#F5F5F5",
        fontSize: 20,
        fontWeight: "600"
    },
    odlPriceText: {
        color: "#828282",
        fontSize: 14,
        fontWeight: "400",
        textDecorationLine: "line-through"
    },
    ratingText: {
        color: "#575757",
        fontSize: 14,
        fontWeight: "400"
    },
    ratingImage: {
        width: 18,
        height: 18
    },
    priceRatingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    priceContainer: {
        flexDirection: "row",
        gap: 6,
        alignItems: "center",

    },
    ratingContainer: {
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
    }
})