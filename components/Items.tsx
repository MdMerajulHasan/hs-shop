import { Image, StyleSheet, View } from "react-native";
import GoIcon from "./GoIcon";
import ItemsTitle from "./ItemsTitle";

export type ItemsType = {
    label: string,
}

export default function Items() {
    return (
        <View style={styles.itemsContainer}>
            <View>
                <View style={{ position: 'absolute', top: 37, right: 55, zIndex: 1 }}>
                    <ItemsTitle label={"Lunch " + "\n" + "Items"}></ItemsTitle>
                </View>
                <GoIcon></GoIcon>
                <Image style={styles.itemsImage} source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/lunchItems.png" }}></Image>
            </View>
            <View style={styles.itmesContainer2}>
                <View style={styles.itemsImageContainer}>
                    <View style={{ position: 'absolute', top: 19, left: 2, zIndex: 1 }}>
                        <ItemsTitle label={"Breakfast"}></ItemsTitle>
                    </View>
                    <GoIcon></GoIcon>
                    <Image style={styles.itemsImage2} source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/breakfast.png" }}></Image>
                </View>
                <View style={styles.itemsImageContainer}>
                    <View style={{ position: 'absolute', top: 19, left: 25, zIndex: 1 }}>
                        <ItemsTitle label={"Dinner"}></ItemsTitle>
                    </View>
                    <GoIcon></GoIcon>
                    <Image style={styles.itemsImage2} source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/dinner.png" }}></Image>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemsContainer: {
        marginTop: 86,
        marginHorizontal: 10,
        gap: 10,
        marginBottom: 40
    },
    itemsImage: {
        width: "100%",
        height: 200,
        borderRadius: 10
    },
    itemsImageContainer: {
        width: "49%",
        height: 260,
    },
    itemsImage2: {
        width: "100%",
        height: "100%",
        borderRadius: 10
    },
    itmesContainer2: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-between"
    }
})