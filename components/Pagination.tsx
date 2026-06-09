import { Text, ImageSourcePropType, StyleSheet, View } from "react-native";
import {SharedValue} from "react-native-reanimated";

type Props = {
    items: ImageSourcePropType[], 
    paginationIndex: number,
    scrollX: SharedValue<number>,
}

export default function Pagination({items, paginationIndex, scrollX}: Props) {


    return (
        <Text style={styles.container}>
            {items.map((_, index)=>{
                return <View ></View>
            })}
        </Text>
    )
}

const styles= StyleSheet.create({
    container: {
        color: "#fff", 
        position: "absolute", 
        bottom: 10, 
        left: "50%",
        transform: [{ translateX: -40}]
    }
})