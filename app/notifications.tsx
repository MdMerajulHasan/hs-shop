import EmptyNotificationBox from "@/components/EmptyNotificationBox";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useState } from "react";
import { Modal, Pressable, Text, View, StyleSheet, Image } from "react-native";

export type NotificationType =
    | "order_update"
    | "promo"
    | "review"
    | "delivery"
    | "system";

export type NotificationItem = {
    id: number;
    title: string;
    image: string;
    timeAgo: string;
    description: string;
    type: NotificationType;
    actionLabel?: string;
    isRead: boolean;
};

export const notificationsData: NotificationItem[] = [
    {
        id: 1,
        title: "Your order is on the way 🚚",
        image: "https://i.imgur.com/1.png",
        timeAgo: "2 min ago",
        description: "Your burger combo has been picked up and is on the way to you.",
        type: "delivery",
        actionLabel: "Track Order",
        isRead: false,
    },
    {
        id: 2,
        title: "Order delivered successfully",
        image: "https://i.imgur.com/2.png",
        timeAgo: "20 min ago",
        description: "Enjoy your meal! Don’t forget to rate your experience.",
        type: "order_update",
        actionLabel: "Rate Now",
        isRead: false,
    },
    {
        id: 3,
        title: "Special Discount Just for You 🎉",
        image: "https://i.imgur.com/3.png",
        timeAgo: "1 hour ago",
        description: "Get 30% off on your next order above $10.",
        type: "promo",
        actionLabel: "View Offer",
        isRead: true,
    },
    {
        id: 4,
        title: "Rate your last order",
        image: "https://i.imgur.com/4.png",
        timeAgo: "3 hours ago",
        description: "How was your pizza? Help us improve your experience.",
        type: "review",
        actionLabel: "Rate Now",
        isRead: true,
    },
    {
        id: 5,
        title: "New items added to menu 🍔",
        image: "https://i.imgur.com/5.png",
        timeAgo: "Yesterday",
        description: "Check out the latest spicy burgers and combo meals.",
        type: "promo",
        actionLabel: "View Menu",
        isRead: true,
    },
    {
        id: 6,
        title: "Payment successful",
        image: "https://i.imgur.com/6.png",
        timeAgo: "Yesterday",
        description: "Your payment for order #1024 was successful.",
        type: "system",
        actionLabel: "View Order",
        isRead: true,
    },
    {
        id: 7,
        title: "Limited time offer ⚡",
        image: "https://i.imgur.com/7.png",
        timeAgo: "2 days ago",
        description: "Free delivery on orders above $15 for today only.",
        type: "promo",
        actionLabel: "Shop Now",
        isRead: true,
    },
    {
        id: 8,
        title: "Order confirmed",
        image: "https://i.imgur.com/8.png",
        timeAgo: "2 days ago",
        description: "We have received your order and started preparing it.",
        type: "order_update",
        actionLabel: "View Order",
        isRead: true,
    },
];

export default function Notifications() {

    const [menuVisible, setMenuVisible] = useState(false);

    // const totalNotifications = notificationsData.length;
    const totalNotifications = 0;

    const [unread, setUnread] = useState(0);

    return (
        <>
            {/* header */}
            <View style={styles.header}>
                <View
                    style={styles.headerStart}
                >
                    <Pressable
                        onPress={() => router.back()}
                        style={{
                            padding: 8,
                            borderWidth: 1,
                            borderColor: "#D5D5D5",
                            borderRadius: 30,
                        }}
                    >
                        <Ionicons name="arrow-back" size={24} color="#272727" />
                    </Pressable>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 18, fontWeight: "500", color: "#272727" }}>
                            Notifications
                        </Text>
                        <Text style={{ fontWeight: "400", fontSize: 12, color: "#575757" }}>
                            {`Unread ${unread} notifications`}
                        </Text>
                    </View>
                </View>
                <Pressable
                    onPress={() => setMenuVisible(true)}
                    style={{ paddingHorizontal: 9 }}
                >

                    <Image style={{
                        width: 5,
                        height: 21
                    }}
                        source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/Group-98.png" }}></Image>
                </Pressable>
            </View>

            {/* body */}

            {
                totalNotifications ? 
                <View style={{ flex: 1 }} ><Text>{totalNotifications}</Text></View> : 
                <EmptyNotificationBox></EmptyNotificationBox>
            }

            {/* modal */}
            <Modal visible={menuVisible} transparent animationType="fade">
                <Pressable
                    onPress={() => setMenuVisible(false)}
                    style={{
                        flex: 1,
                        backgroundColor: "rgba(0,0,0,0.4)",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            width: 220,
                            backgroundColor: "#fff",
                            borderRadius: 12,
                            padding: 15,
                        }}
                    >
                        <Text style={{ fontWeight: "600", marginBottom: 10 }}>
                            Notification Settings
                        </Text>
                        <Text style={{ paddingVertical: 8 }}>Mute Notifications</Text>
                        <Text style={{ paddingVertical: 8 }}>Mark all as read</Text>
                        <Text style={{ paddingVertical: 8 }}>Clear notifications</Text>
                    </View>
                </Pressable>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 25,
        marginHorizontal: 10
    },
    headerStart: {
        flexDirection: "row",
        gap: 16
    }
})