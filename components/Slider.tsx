import { ImageSourcePropType, View } from "react-native";
import Animated, { SharedValue } from "react-native-reanimated";
import Pagination from "./Pagination";
import SliderItem from "./SliderItem";

type Props = {
    items: ImageSourcePropType[],
    scrollX: SharedValue<number>
}

export default function Slider() {
    const offers = [require('@/assets/images/slider-offer-pic.jpg'), require('@/assets/images/slider-offer-pic.jpg'), require('@/assets/images/slider-offer-pic.jpg'), require('@/assets/images/slider-offer-pic.jpg'), require('@/assets/images/slider-offer-pic.jpg'), require('@/assets/images/slider-offer-pic.jpg'), require('@/assets/images/slider-offer-pic.jpg'), require('@/assets/images/slider-offer-pic.jpg'), require('@/assets/images/slider-offer-pic.jpg'),];

    // const scrollX = useSharedValue(0);

    // const onScrollHanler = useAnimatedScrollHandler({
    //     onScroll: (e)=> {
    //         scrollX.value = e.contentOffset.x;
    //     }
    // })

    return (
        <View>
            <Animated.FlatList
                data={offers}
                renderItem={({ item, index }) => <SliderItem
                    item={item}
                    index={index}
                />}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                // onScroll={onScrollHanler}
            />

            <Pagination items={offers}></Pagination>


        </View>
    )
}