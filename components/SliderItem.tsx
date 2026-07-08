import { Dimensions, ImageBackground, ImageSourcePropType, StyleSheet } from "react-native";
import Animated, { interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";

interface SliderItemProps {
    item: ImageSourcePropType;
    index: number;
    scrollX: SharedValue<number>;
}

const { width } = Dimensions.get('screen');

export default function SliderItem({ item, index, scrollX }: SliderItemProps) {
    const stylez = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotate: `${interpolate(scrollX.value, [index - 1, index, index + 1], [5, 0, -5])}deg`,
                },
                {
                    scale: interpolate(scrollX.value, [index - 1, index, index + 1], [0.9, 1, 0.9])
                }
            ]
        }
    })

    return (
        <Animated.View style={stylez}>

            <ImageBackground
                imageStyle={{
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
                source={item}
                style={[styles.sliderContainer]}>
            </ImageBackground>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    sliderContainer: {
        width: width,
        height: 210,
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