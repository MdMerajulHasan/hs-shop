import { ImageBackground, StyleSheet, View } from "react-native";
import GoIcon from "./GoIcon";
import ItemsTitle from "./ItemsTitle";
import { Product } from "@/assets/products";


export type Props = {
    specialItems: Product[];
}


export default function Items({ specialItems }: Props) {


    const lunchItem = specialItems.find((item) => item?.name === "Special Lunch");
    const dinnerItem = specialItems.find((item) => item?.name === "Special Breakfast");
    const breakfastItem = specialItems.find((item) => item?.name === "Special Dinner");


    return (
        <View style={styles.itemsContainer}>
            <View>
                <ImageBackground
                    source={{ uri: lunchItem?.image }}
                    style={styles.itemsImage}
                    imageStyle={{ borderRadius: 10 }}
                >
                    <View style={{ position: 'absolute', top: 37, right: 55, }}>
                        <ItemsTitle isLunch={true} label={"Lunch " + "\n" + "Items"}></ItemsTitle>
                    </View>

                    <GoIcon item={{ id: lunchItem?.id ?? "" }}></GoIcon>
                </ImageBackground>
            </View>
            <View style={styles.itmesContainer2}>
                <View style={styles.itemsImageContainer}>
                    <ImageBackground
                        source={{ uri: breakfastItem?.image }}
                        style={styles.itemsImage2}
                        imageStyle={{ borderRadius: 10 }}
                    >
                        <View style={{ position: 'absolute', top: 19, width: "100%", alignItems: "center", }}>
                            <ItemsTitle label={"Breakfast"}></ItemsTitle>
                        </View>
                        <GoIcon item={{ id: breakfastItem?.id ?? "" }}></GoIcon>
                    </ImageBackground>
                </View>
                <View style={styles.itemsImageContainer}>

                    <ImageBackground
                        source={{ uri: dinnerItem?.image }}
                        style={styles.itemsImage2}
                        imageStyle={{ borderRadius: 10 }}
                    >
                        <View style={{ position: 'absolute', top: 19, width: "100%", alignItems: "center", }}>
                            <ItemsTitle label={"Dinner"}></ItemsTitle>
                        </View>
                        <GoIcon item={{ id: dinnerItem?.id ?? "" }}></GoIcon>
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