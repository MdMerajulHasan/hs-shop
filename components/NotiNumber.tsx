import { Text, StyleSheet, View } from "react-native";

type Props = {
    Number: number;
}
export default function NotiNumber({ Number }: Props) {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>{Number}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        backgroundColor: "#D76527",
        borderRadius: 60,
        position: "absolute",
        top: 0,
        right: 7,
        width: 14,
        height: 14,
    },
    text: {
        color: "#F5F5F5",
        fontWeight: "500",
        fontSize: 10,
        textAlign: "center"
    }
})