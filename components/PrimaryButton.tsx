import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

type Props = {
    label: string;
    onboarding?: boolean;
}
export default function PrimaryButton({ label, onboarding }: Props) {
    return (
        <View style={styles.primaryButton}>
            <Text style={styles.buttonText}>{label}</Text>
            {
                onboarding && <Ionicons color={"#F5F5F5"} size={24} name="arrow-forward"></Ionicons>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor: "#D76527",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 66,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
    buttonText: {
        fontWeight: "500",
        fontSize: 16,
        color: "#F5F5F5",
        textAlign: "center"
    }
})