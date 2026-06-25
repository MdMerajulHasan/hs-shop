import { FlatList, StyleSheet, View } from "react-native";
import FoodCard from "./FoodCard";
import TitleBar from "./TitleBar";
import { Product } from "@/assets/products";

type Props = {
    popularItems: Product[];
}

export default function PopularItems({ popularItems }: Props) {

    return (
        <View style={styles.popularItemsContainer}>
            <TitleBar label={"Popular Items"}></TitleBar>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={popularItems}
                renderItem={({ item, index }) =>
                    <View style={{
                        marginRight: 20
                    }}>
                        <FoodCard item={item} index={index}></FoodCard>
                    </View>
                }
                horizontal
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    popularItemsContainer: {
        marginBottom: 40,
        marginHorizontal: 10,
        marginTop: 40
    }
})