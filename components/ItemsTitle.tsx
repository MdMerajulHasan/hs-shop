import { Text, StyleSheet } from "react-native";

type Props = {
    label: string;
    isLunch?: boolean;
}

export default function ItemsTitle({ label, isLunch }: Props) {
    return (
        <Text style={[styles.itemText, { textAlign: isLunch ? "left" : "center" }]}>
            {label}
        </Text>
    )
}

const styles = StyleSheet.create({
    itemText: {
        color: "#F5F5F5",
        textAlign: "left",
        fontWeight: "700",
        fontSize: 32,
    }
})