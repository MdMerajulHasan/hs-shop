import { FlatList, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function ComboSlider() {

    const imageData = [
        { id: 1, name: "Meals" + "\n" + "Box", image: "https://d.hs-bd.com/wp-content/uploads/2026/06/combo1.jpg" },
        { id: 2, name: "Meals" + "\n" + "Box", image: "https://d.hs-bd.com/wp-content/uploads/2026/06/combo2.jpg" },
        { id: 3, name: "Meals" + "\n" + "Box", image: "https://d.hs-bd.com/wp-content/uploads/2026/06/combo3.jpg" },
        { id: 4, name: "Meals" + "\n" + "Box", image: "https://d.hs-bd.com/wp-content/uploads/2026/06/combo4.jpg" },
    ]

    return (
        <FlatList
            data={imageData}
            renderItem={({ item }) => (
                <ImageBackground
                    source={{ uri: item.image }}
                    style={styles.bgImage}
                    imageStyle={{borderRadius: 10}}
                >
                    <View style={styles.textButtonContainer}>
                        <Text style={styles.nameText}>{item.name}</Text>
                        <View style={styles.viewDeatilsButton}>
                            <Text style={{color: "#F5F5F5", textAlign: "center", fontSize: 16, fontWeight: "500"}}>View Details</Text>
                        </View>
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
        borderRadius: 66
    }
})