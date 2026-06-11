import ImageViewer from '@/components/ImageViewer';
import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from 'react-native';


export default function TabLayout() {

    const homeImageSource = { uri: 'https://d.hs-bd.com/wp-content/uploads/2026/06/Vector.png' };
    const homeImageSource2 = { uri: 'https://d.hs-bd.com/wp-content/uploads/2026/06/home-2.png' };
    const bookingImageSource = { uri: 'https://d.hs-bd.com/wp-content/uploads/2026/06/book-1.png' };
    const bookingImageSource2 = { uri: 'https://d.hs-bd.com/wp-content/uploads/2026/06/book-1-1.png' };
    const cartImageSource = { uri: 'https://d.hs-bd.com/wp-content/uploads/2026/06/bag-2.png' };
    const cartImageSource2 = { uri: 'https://d.hs-bd.com/wp-content/uploads/2026/06/Bag.png' };
    const truckImageSource = { uri: 'https://d.hs-bd.com/wp-content/uploads/2026/06/Shipping-Car-fast.png' };
    const truckImageSourc2 = { uri: 'https://d.hs-bd.com/wp-content/uploads/2026/06/Shipping-Car.png' };
    const userImageSource = { uri: 'https://d.hs-bd.com/wp-content/uploads/2026/06/user.png' };
    const userImageSource2 = { uri: 'https://d.hs-bd.com/wp-content/uploads/2026/06/user-1.png' };


    return <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#D76527',
            tabBarStyle: {
                height: 100,
                paddingHorizontal: 20,
            },

        }}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: "",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View
                        style={[focused ? { backgroundColor: "#D76527" } : { backgroundColor: "#000" },
                        styles.navbarButton, { zIndex: 5 }]}>
                        <ImageViewer imgSource={focused ? homeImageSource : homeImageSource2} />
                        {focused ? <Text style={styles.text}>Home</Text> : null}
                    </View>

                )
            }}
        />
        <Tabs.Screen
            name="booking"
            options={{
                title: "",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View
                        style={[focused ? { backgroundColor: "#D76527" } : { backgroundColor: "#000" },
                        styles.navbarButton, { zIndex: 4 }]}>
                        <ImageViewer imgSource={focused ? bookingImageSource2 : bookingImageSource} />
                        {focused ? <Text style={styles.text}>Book</Text> : null}
                    </View>

                )
            }}
        />
        <Tabs.Screen
            name="cart"
            options={{
                title: "",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View
                        style={[focused ? { backgroundColor: "#D76527", zIndex: 3 } : { backgroundColor: "#000" },
                        styles.navbarButton, { zIndex: 3 }]}>
                        <ImageViewer imgSource={focused ? cartImageSource2 : cartImageSource} />
                        {focused ? <Text style={styles.text}>Cart</Text> : null}
                    </View>

                )
            }}
        />
        <Tabs.Screen
            name="order"
            options={{
                title: "",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View
                        style={[focused ? { backgroundColor: "#D76527", zIndex: 2 } : { backgroundColor: "#000" },
                        styles.navbarButton, { zIndex: 2 }]}>
                        <ImageViewer imgSource={focused ? truckImageSourc2 : truckImageSource} />
                        {focused ? <Text style={styles.text}>Order</Text> : null}
                    </View>

                )
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: "",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View
                        style={[focused ? { backgroundColor: "#D76527" } : { backgroundColor: "#000" },
                        styles.navbarButton, { zIndex: 1 }]}>
                        <ImageViewer imgSource={focused ? userImageSource2 : userImageSource} />
                        {focused ? <Text style={styles.text}>Profile</Text> : null}
                    </View>

                )
            }}
        />
    </Tabs>
}

const styles = StyleSheet.create({
    navbarButton: {
        height: 70,
        width: 70,
        borderRadius: 110,
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#fff",
        fontSize: 10,
        fontWeight: "400",
        textAlign: "center",
    }
})