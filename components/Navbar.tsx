import { StyleSheet, View, Pressable, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import NotiNumber from "./NotiNumber";



export default function Navbar() {

    return (

        <View style={styles.navbarContainer}>
            <View>
                <Pressable>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Ionicons
                            name="location-sharp"
                            size={16}
                            color="#763815"
                        />
                        <Text style={{ color: "#763815", marginLeft: 2 }}>Delivery To</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text>Add Your Location</Text>
                        <Ionicons size={16} name="chevron-down-outline" />
                    </View>
                </Pressable>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.iconContainer}>
                    <Ionicons style={{ padding: 10 }} size={24} name="notifications-outline" />
                    <NotiNumber Number={6}></NotiNumber>
                </View>
                <View style={styles.iconContainer}>
                    <Ionicons style={{ padding: 10 }} size={24} name="cart-outline" />
                    <NotiNumber Number={6}></NotiNumber>
                </View>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    navbarContainer: {
        borderBottomRightRadius: 20,
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 10,

    }, searchContainer: {
        flexDirection: "row", alignItems: "center", gap: 10
    },
    iconContainer: {
        backgroundColor: "#E9E9E9",
        padding: 10,
        borderRadius: 40
    }
})