import CustomTabBar from '@/components/CustomTabBar';
import { Tabs } from "expo-router";


export default function TabLayout() {


    return <Tabs
        tabBar={(props) => <CustomTabBar {...props}></CustomTabBar>}
        screenOptions={{
            tabBarActiveTintColor: '#D76527',
            tabBarStyle: {
                height: 100,
                paddingHorizontal: 20,
            },
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
            name="booking"
            options={{
                title: "Book",
            }}
        />
        <Tabs.Screen
            name="cart"
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
            name="profile"
            options={{
                title: "Profile",
            }}
        />
    </Tabs>
}