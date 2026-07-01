import CustomTabBar from '@/components/CustomTabBar';
import { Tabs } from "expo-router";


export default function TabLayout() {


    return <Tabs
        tabBar={(props) => <CustomTabBar {...props}></CustomTabBar>}
        screenOptions={{
            tabBarActiveTintColor: '#D76527',
            // tabBarStyle: {
            // },
            headerShown: false
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: "Home",
            }}
        />
        <Tabs.Screen
            name="shopping"
            options={{
                title: "Cart",
            }}
        />
        <Tabs.Screen
            name="order"
            options={{
                title: "Order",
            }}
        />
        <Tabs.Screen
            name="wishlist"
            options={{
                title: "Wish List"
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: "Profile",
            }}
        />
        <Tabs.Screen
            name="allItems"
            options={{
                href: null, 
            }}
        />
    </Tabs>
}