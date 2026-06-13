import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet } from "react-native";

export default function GoIcon() {
    return (
        <Pressable onPress={()=>{}} style={styles.goIconContainer}>
            <Ionicons style={{ transform: [{ rotate: "-45deg" }] }} 
            size={24} color={"#F5F5F5"} 
            name="arrow-forward-outline">
            </Ionicons>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goIconContainer: {
        padding: 8,
        backgroundColor: "#272727",
        position: 'absolute',
        bottom: 10,
        right: 10,
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 1,
        zIndex: 1,
        borderColor: "#575757",
    }
})