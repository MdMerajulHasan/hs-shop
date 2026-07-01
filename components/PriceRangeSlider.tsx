import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, Text, View } from "react-native";

type Props = {
    minPrice: number;
    maxPrice: number;

    value: {
        min: number;
        max: number;
    };

    onChange: (value: {
        min: number;
        max: number;
    }) => void;
};

export default function PriceRangeSlider({
    minPrice,
    maxPrice,
    value,
    onChange,
}: Props) {

    return (
        <View>
            <View style={styles.priceRow}>
                <Text style={styles.price}>
                    ${value.min.toFixed(0)}
                </Text>

                <Text style={styles.price}>
                    ${value.max.toFixed(0)}
                </Text>
            </View>

            <Slider
                minimumValue={minPrice}
                maximumValue={maxPrice}
                value={[value.min, value.max]}
                onValueChange={(values) =>
                    onChange({
                        min: values[0],
                        max: values[1],
                    })
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({

    priceRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 2,
    },

    price: {
        fontSize: 15,
        fontWeight: "700",
        color: "#D76527",
    },

});