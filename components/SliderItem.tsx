import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import { SliderData } from "@/components/Slider";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";

type Props = SliderData;

const { width } = Dimensions.get('screen');

export default function SliderItem({ item, index, scrollX }: Props) {
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