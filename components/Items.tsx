import { ImageBackground, StyleSheet, View } from "react-native";
import GoIcon from "./GoIcon";
import ItemsTitle from "./ItemsTitle";

export type ItemsType = {
    label: string;
}



export default function Items() {
    return (
        <View style={styles.itemsContainer}>
            <View>
                <ImageBackground
                    source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/lunchItems.png" }}
                    style={styles.itemsImage}
                    imageStyle={{ borderRadius: 10 }}
                >
                    <View style={{ position: 'absolute', top: 37, right: 55, }}>
                        <ItemsTitle isLunch={true} label={"Lunch " + "\n" + "Items"}></ItemsTitle>
                    </View>
                    
                    <GoIcon item={{id: "1"}}></GoIcon>
                </ImageBackground>
            </View>
            <View style={styles.itmesContainer2}>
                <View style={styles.itemsImageContainer}>
                    <ImageBackground
                        source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/breakfast.png" }}
                        style={styles.itemsImage2}
                        imageStyle={{ borderRadius: 10 }}
                    >
                        <View style={{ position: 'absolute', top: 19,width: "100%", alignItems: "center", }}>
                            <ItemsTitle label={"Breakfast"}></ItemsTitle>
                        </View>
                        <GoIcon item={{id: "2"}}></GoIcon>
                    </ImageBackground>
                </View>
                <View style={styles.itemsImageContainer}>

                    <ImageBackground
                        source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/dinner.png" }}
                        style={styles.itemsImage2}
                        imageStyle={{ borderRadius: 10 }}
                    >
                        <View style={{ position: 'absolute', top: 19,width: "100%", alignItems: "center", }}>
                            <ItemsTitle label={"Dinner"}></ItemsTitle>
                        </View>
                        <GoIcon item={{id: "3"}}></GoIcon>
                    </ImageBackground>

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
        marginBottom: 40,
    },
    itemsImage: {
        width: "100%",
        height: 200,
        borderRadius: 10,
    },
    itemsImageContainer: {
        width: "49%",
        height: 260,
    },
    itemsImage2: {
        width: "100%",
        height: "100%",
    },
    itmesContainer2: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-between"
    }
})