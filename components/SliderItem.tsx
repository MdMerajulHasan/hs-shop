import { Animated, Dimensions, Image, ImageSourcePropType, StyleSheet } from "react-native";
import { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";

type Props = {
    item: ImageSourcePropType;
    index: number,
    scrollX: SharedValue<number>
}

const { width } = Dimensions.get('screen');

export default function SliderItem({ item, index, scrollX }: Props) {
    const rnAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: interpolate(
                        scrollX.value,
                        [(index - 1) * width, index * width, (index + 1) * width],
                        [-width * 0.25, 0, width * 0.25],
                        Extrapolation.CLAMP
                    ),
                }, {
                    scale: interpolate(
                        scrollX.value,
                        [(index - 1) * width, index * width, (index + 1) * width],
                        [0.9, 1, 0.9],
                        Extrapolation.CLAMP
                    )
                }
            ]
        }
    })
    return (
        <Animated.View style={[styles.sliderContainer, rnAnimatedStyle]}>
            <Image
                source={item}
                key={index}
                style={styles.sliderImage}
            ></Image>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    sliderContainer: {
        width: width,
        height: 250,
        justifyContent: "center",
        alignItems: "center"
    },
    sliderImage: {
        width: '100%',
        height: 240,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,

    }
})