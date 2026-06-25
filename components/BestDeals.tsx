import { FlatList, View } from "react-native";
import FoodCard from "./FoodCard";
import TitleBar from "./TitleBar";
import { Product } from "@/assets/products";

type Props = {
    bestDeals: Product[];
}

export default function BestDeals({ bestDeals }: Props) {

    return (

        <View style={{ marginTop: 40, marginHorizontal: 10 }}>
            <TitleBar label={"Best Deals"}></TitleBar>
            <FlatList
                bounces
                showsHorizontalScrollIndicator={false}
                data={bestDeals}
                renderItem={({ item, index }) =>
                    <View style={{
                        marginRight: 20
                    }}>
                        <FoodCard item={item} index={index}></FoodCard>
                    </View>
                }
                horizontal
            />
        </View>
    )
}