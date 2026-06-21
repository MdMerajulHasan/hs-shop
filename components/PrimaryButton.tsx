import { View, Text, StyleSheet } from "react-native";

type Props = {
    label: string;
}
export default function PrimaryButton({ label }: Props) {
    return (
        <View style={styles.primaryButton}>
            <Text style={styles.buttonText}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor: "#D76527",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 66
    },
    buttonText: {
        fontWeight: "500",
        fontSize: 16,
        color: "#111111",
       textAlign: "center" 
    }
})