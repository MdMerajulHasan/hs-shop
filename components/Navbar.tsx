import { StyleSheet, View, Pressable, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';



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
                <Ionicons style={{ padding: 10 }} size={24} name="notifications-outline" />
                <Ionicons style={{ padding: 10 }} size={24} name="cart-outline" />
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    navbarContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30,
        marginHorizontal: 10,
    }, searchContainer: {
        flexDirection: "row", alignItems: "center", gap: 10
    }
})