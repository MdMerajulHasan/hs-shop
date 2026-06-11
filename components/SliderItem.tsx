import { Dimensions, Image, ImageSourcePropType, StyleSheet, View } from "react-native";

type Props = {
    item: ImageSourcePropType;
    index: number,
}

const { width } = Dimensions.get('screen');

export default function SliderItem({ item, index }: Props) {

    return (
        <View style={[styles.sliderContainer]}>
            <Image
                source={item}
                key={index}
                style={styles.sliderImage}
            ></Image>
        </View>
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