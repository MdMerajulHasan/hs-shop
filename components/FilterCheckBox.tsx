import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    label: string;
    checked: boolean;
    onPress: () => void;
};

export default function FilterCheckbox({
    label,
    checked,
    onPress,
}: Props) {
    return (
        <Pressable
            style={styles.container}
            onPress={onPress}
        >
            <View
                style={[
                    styles.checkbox,
                    checked && styles.checkedBox,
                ]}
            >
                {checked && (
                    <Ionicons
                        name="checkmark"
                        size={14}
                        color="#FEFEFE"
                    />
                )}
            </View>

            <Text style={styles.label}>
                {label}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
    },

    checkbox: {
        width: 22,
        height: 22,
        borderRadius: 6,
        borderWidth: 1.5,
        borderColor: "#D9D9D9",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
        backgroundColor: "#FFFFFF",
    },

    checkedBox: {
        backgroundColor: "#D76527",
        borderColor: "#D76527",
    },

    label: {
        flex: 1,
        fontSize: 15,
        color: "#272727",
        fontWeight: "500",
    },
});