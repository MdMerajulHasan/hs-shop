import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from "react-native";
import NotiNumber from "./NotiNumber";
import ImageViewer from './ImageViewer';
import { useAppSelector } from "@/store/hooks";


export default function Navbar() {

    const cartItems = useAppSelector((state) => state.cart.items);
    const totalCartItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

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
                <Link href={"/notifications"}>
                    <View style={styles.iconContainer}>
                        <ImageViewer notBottom={true} imgSource={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/notification-bing.png" }}></ImageViewer>
                        <NotiNumber Number={6}></NotiNumber>
                    </View>
                </Link>

                <Link href={"/(tabs)/shopping"}>
                    <View style={styles.iconContainer}>
                        <ImageViewer notBottom={true} imgSource={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/bag-2.png" }}></ImageViewer>
                        {
                            totalCartItems > 0 && <NotiNumber Number={totalCartItems}></NotiNumber>
                        }
                    </View>
                </Link>

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