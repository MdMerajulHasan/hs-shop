import { FlatList, ImageSourcePropType, View } from "react-native";
import SliderItem from "./SliderItem";

type SliderData = {
    item: ImageSourcePropType,
    index: number,
}

export default function Slider() {
    const offers = [require('@/assets/images/slider-offer-pic.jpg'), require('@/assets/images/slider-offer-pic.jpg'), require('@/assets/images/slider-offer-pic.jpg'), require('@/assets/images/slider-offer-pic.jpg'), require('@/assets/images/slider-offer-pic.jpg'), require('@/assets/images/slider-offer-pic.jpg'), require('@/assets/images/slider-offer-pic.jpg'), require('@/assets/images/slider-offer-pic.jpg'), require('@/assets/images/slider-offer-pic.jpg'),];

    return (
        <View>
            <FlatList
                data={offers}
                renderItem={({ item, index }) =>
                    <SliderItem
                        item={item}
                        index={index}
                    />
                }
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />


        </View>
    )
}