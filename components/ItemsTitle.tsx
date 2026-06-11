import { Text, StyleSheet } from "react-native";

type Props = {
    label: string
}

export default function ItemsTitle({label}: Props){
    return (
        <Text style={styles.itemText}>
            {label}
        </Text>
    )
}

const styles = StyleSheet.create({
    itemText: {
        color: "#F5F5F5",
        textAlign: "left",
        fontWeight: "700",
        fontSize: 32
    }
})