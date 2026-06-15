import { useEffect, useRef, useCallback } from "react";
import { Dimensions, ImageSourcePropType, View } from "react-native";
import Animated, { SharedValue, useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import SliderItem from "./SliderItem";
import Pagination from "./Pagination";

const { width } = Dimensions.get("window");
const _imageWidth = width;


export type SliderData = {
    item: ImageSourcePropType,
    index: number,
    scrollX: SharedValue<number>
}

export default function Slider() {
    const offers = [
        { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/slider-offer-pic-scaled.jpg" },
        { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/slider-offer-pic-scaled.jpg" },
        { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/slider-offer-pic-scaled.jpg" },
        { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/slider-offer-pic-scaled.jpg" },
        { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/slider-offer-pic-scaled.jpg" },
        { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/slider-offer-pic-scaled.jpg" },
        { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/slider-offer-pic-scaled.jpg" },
        { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/slider-offer-pic-scaled.jpg" },
    ];

    const flatListRef = useRef<Animated.FlatList<ImageSourcePropType>>(null);
    const currentIndex = useRef(0);
    const autoScroll = useRef<ReturnType<typeof setInterval> | null>(null);

    const scrollX = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler((e) => {
        scrollX.value = e.contentOffset.x / _imageWidth;
    });

    const stopAutoScroll = useCallback(() => {
        if (autoScroll.current) {
            clearInterval(autoScroll.current);
            autoScroll.current = null;
        }
    }, []);

    const startAutoScroll = useCallback(() => {
        stopAutoScroll();

        autoScroll.current = setInterval(() => {
            let next = currentIndex.current + 1;

            if (next >= offers.length) {
                next = 0;
            }

            flatListRef.current?.scrollToIndex({
                index: next,
                animated: true
            });

            currentIndex.current = next;
        }, 4000)
    }, [offers.length, stopAutoScroll]);

    useEffect(() => {
        startAutoScroll();
        return () => stopAutoScroll();
    }, [startAutoScroll, stopAutoScroll])

    return (
        <View>
            <Animated.FlatList
                ref={flatListRef}
                data={offers}
                keyExtractor={(_, index) => index.toString()}
                snapToInterval={_imageWidth}
                renderItem={({ item, index }) =>
                    <SliderItem
                        item={item}
                        index={index}
                        scrollX={scrollX}
                    />
                }
                horizontal
                decelerationRate={"fast"}
                style={{ flexGrow: 0 }}
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                scrollEventThrottle={1000 / 60}
                onScrollBeginDrag={stopAutoScroll}
                onMomentumScrollEnd={(e) => {
                    currentIndex.current = Math.round(e.nativeEvent.contentOffset.x / _imageWidth);
                    startAutoScroll();
                }
                }
            />

            <View style={{
                position: "absolute",
                bottom: 10,
                width: "100%",
                alignItems: "center",
            }}>
                <Pagination
                    scrollX={scrollX}
                    length={offers.length}
                />
            </View>

        </View>
    )
}
