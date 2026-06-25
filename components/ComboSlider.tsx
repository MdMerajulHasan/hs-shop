import { router } from "expo-router";
import { FlatList, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "@/assets/products";

type Props = {
    comboItems: Product[];
};

export default function ComboSlider({ comboItems }: Props) {

    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            data={comboItems}
            renderItem={({ item }) => (
                <ImageBackground
                    source={{ uri: item.image }}
                    style={styles.bgImage}
                    imageStyle={{ borderRadius: 10 }}
                >
                    <View style={styles.textButtonContainer}>
                        <Text style={styles.nameText}>
                            {item.name.split(" ")[0]}
                            {"\n"}
                            {item.name.split(" ").slice(1).join(" ")}
                        </Text>
                        <Pressable
                            onPress={() => router.push({
                                pathname: "/Details",
                                params: {
                                    id: `${item.id}`
                                }
                            })}
                            style={styles.viewDeatilsButton}>
                            <Text
                                style={{ color: "#F5F5F5", textAlign: "center", fontSize: 16, fontWeight: "500" }}>
                                View Details
                            </Text>
                        </Pressable>
                    </View>
                </ImageBackground>
            )}
            horizontal
        ></FlatList>
    )
}

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        width: 250,
        height: 375,
        marginRight: 20,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 40
    },
    nameText: {
        fontSize: 50,
        fontWeight: "700",
        color: "#E93037",
    },
    textButtonContainer: {
        position: "absolute",
        top: 30,
        gap: 30
    },
    viewDeatilsButton: {
        backgroundColor: "#272727",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 66,
        maxWidth: 127,
        marginHorizontal: "auto"
    }
})