import ImageViewer from '@/components/ImageViewer';
import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from 'react-native';


export default function TabLayout() {

    const homeImageSource = require('@/assets/images/tabIcons/house-solid.png');
    const bookingImageSource = require('@/assets/images/tabIcons/booking.png');
    const cartImageSource = require('@/assets/images/tabIcons/bag-shopping-solid.png');
    const truckImageSource = require('@/assets/images/tabIcons/truck-fast-solid.png');
    const userImageSource = require('@/assets/images/tabIcons/user-regular.png');

    return <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#D76527',
            tabBarStyle: {
                marginBottom: 0,
                paddingTop: 4,
                paddingHorizontal: 20
            }
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: "",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View 
                    style={[focused ?   {backgroundColor: "#D76527"} : {backgroundColor: "#000"},
                     styles.navbarButton, {zIndex: 5}]}>
                        <ImageViewer imgSource={homeImageSource}/>
                    {focused ? <Text style={styles.text}>Home</Text>: null}
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
                    style={[focused ?   {backgroundColor: "#D76527"} : {backgroundColor: "#000"}, 
                    styles.navbarButton, {zIndex: 4}]}>
                        <ImageViewer imgSource={bookingImageSource}/>
                    {focused ? <Text style={styles.text}>Book</Text>: null}
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
                    style={[focused ?   {backgroundColor: "#D76527", zIndex:3} : {backgroundColor: "#000"}, 
                    styles.navbarButton, {zIndex: 3}]}>
                        <ImageViewer imgSource={cartImageSource}/>
                    {focused ? <Text style={styles.text}>Cart</Text>: null}
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
                    style={[focused ?   {backgroundColor: "#D76527", zIndex: 2} : {backgroundColor: "#000"}, 
                    styles.navbarButton, {zIndex: 2}]}>
                        <ImageViewer imgSource={truckImageSource}/>
                    {focused ? <Text style={styles.text}>Order</Text>: null}
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
                    style={[focused ?   {backgroundColor: "#D76527"} : {backgroundColor: "#000"}, 
                    styles.navbarButton, {zIndex: 1}]}>
                        <ImageViewer imgSource={userImageSource}/>
                    {focused ? <Text style={styles.text}>Profile</Text>: null}
                    </View>
                    
                )
            }}
        />
    </Tabs>
}

const styles = StyleSheet.create({
    navbarButton: {
        padding: 27, 
        borderRadius: 110,
    }, 
    text: {
        color: "#fff", 
        fontSize: 8,
        textAlign: "center"
    }
})