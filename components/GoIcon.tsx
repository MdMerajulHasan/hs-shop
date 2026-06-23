import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

type GoIconProps = {
    item: {
        id: string;
    };
};

export default function GoIcon({ item }: GoIconProps) {
    return (
        <Pressable
            onPress={() =>
                router.push({
                    pathname: "/Details",
                    params: {
                        id: item.id,
                    },
                })
            }
            style={styles.goIconContainer}
        >
            <Ionicons
                style={{ transform: [{ rotate: "-45deg" }] }}
                size={24}
                color="#F5F5F5"
                name="arrow-forward-outline"
            />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    goIconContainer: {
        padding: 8,
        backgroundColor: "#272727",
        position: "absolute",
        bottom: 10,
        right: 10,
        borderRadius: 10,
        borderWidth: 1,
        zIndex: 1,
        borderColor: "#575757",
    },
});