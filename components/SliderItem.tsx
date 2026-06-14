import { Dimensions, ImageBackground, ImageSourcePropType, StyleSheet} from "react-native";

type Props = {
    item: ImageSourcePropType;
    index: number,
}

const { width } = Dimensions.get('screen');

export default function SliderItem({ item, index }: Props) {

    return (
        <ImageBackground imageStyle={{borderBottomLeftRadius: 20, borderBottomRightRadius: 20}} source={item} style={[styles.sliderContainer]}>
        </ImageBackground>
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