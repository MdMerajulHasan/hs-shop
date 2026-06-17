import EmptyNotificationBox from "@/components/EmptyNotificationBox";
import NotificationCard from "@/components/NotificationCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Modal, Pressable, Text, View, StyleSheet, Image, FlatList, Dimensions, Switch } from "react-native";


// export type NotificationType =
//     | "order_update"
//     | "promo"
//     | "review"
//     | "delivery"
//     | "system";

export type NotificationItem = {
    id: number;
    title: string;
    image: string;
    timeAgo: string;
    description: string;
    // type: NotificationType;
    actionLabel?: string;
    isRead: boolean;
};

export const notificationsData: NotificationItem[] = [
    {
        id: 1,
        title: "Your order is on the way",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/title.png",
        timeAgo: "2 min ago",
        description: "Your burger combo has been picked up and is on the way to you.",
        // type: "delivery",
        actionLabel: "Track Order",
        isRead: false,
    },
    {
        id: 2,
        title: "Order delivered successfully",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/title-1.png",
        timeAgo: "20 min ago",
        description: "Enjoy your meal! Don’t forget to rate your experience.",
        // type: "order_update",
        actionLabel: "Rate Now",
        isRead: false,
    },
    {
        id: 3,
        title: "Special Discount Just for You",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/title-1.png",
        timeAgo: "1 hour ago",
        description: "Get 30% off on your next order above $10.",
        // type: "promo",
        actionLabel: "View Offer",
        isRead: true,
    },
    {
        id: 4,
        title: "Rate your last order",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/Star.png",
        timeAgo: "3 hours ago",
        description: "How was your pizza? Help us improve your experience.",
        // type: "review",
        actionLabel: "Rate Now",
        isRead: true,
    },
    {
        id: 5,
        title: "New items added to menu",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/title-2.png",
        timeAgo: "Yesterday",
        description: "Check out the latest spicy burgers and combo meals.",
        // type: "promo",
        actionLabel: "View Menu",
        isRead: true,
    },
    {
        id: 6,
        title: "Payment successful",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/title-3.png",
        timeAgo: "Yesterday",
        description: "Your payment for order #1024 was successful.",
        // type: "system",
        actionLabel: "View Order",
        isRead: true,
    },
    {
        id: 7,
        title: "Limited time offer",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/title-4.png",
        timeAgo: "2 days ago",
        description: "Free delivery on orders above $15 for today only.",
        // type: "promo",
        actionLabel: "Shop Now",
        isRead: true,
    },
    {
        id: 8,
        title: "Order confirmed",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/title-1.png",
        timeAgo: "2 days ago",
        description: "We have received your order and started preparing it.",
        // type: "order_update",
        actionLabel: "View Order",
        isRead: true,
    },
];

const { width: Width } = Dimensions.get("screen");

export default function Notifications() {

    const [menuVisible, setMenuVisible] = useState(false);
    const [isEnabledNoti, setIsEnabledNoti] = useState(true);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const totalNotifications = notificationsData.length;
    // const totalNotifications = 0;

    const [unread, setUnread] = useState(0);
    const unreads = notificationsData.filter(item => item.isRead === false);

    const options = [
        "Order & Delivery Updates",
        "Exclusive Offers & Promotions",
        "Reservation Reminders",
        "Loyalty Rewards & Points Alerts",
        "Security & Account Notifications",
    ];

    const toggleOption = (item: string) => {
        setSelectedOptions((prev) =>
            prev.includes(item)
                ? prev.filter((i) => i !== item)
                : [...prev, item]
        );
    };

    useEffect(() => {
        setUnread(unreads.length);
    }, [unreads])



    return (
        <View style={{ flex: 1 }}>
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
                    <FlatList
                        style={{ marginHorizontal: 10 }}
                        data={notificationsData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            <NotificationCard
                                notification={item}
                            ></NotificationCard>
                        }
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={{
                            height: 1,
                            backgroundColor: "#D5D5D5",
                            marginVertical: 16
                        }}>
                        </View>}
                        contentContainerStyle={{
                            paddingBottom: 90,
                        }}
                    >
                    </FlatList> :
                    <EmptyNotificationBox></EmptyNotificationBox>
            }

            {/* notification settings modal */}
            <Modal
                statusBarTranslucent={true}
                visible={menuVisible}
                transparent
                animationType="none"
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: "rgba(0,0,0,0.4)",
                        marginTop: 0,
                    }}
                >
                    <View
                        style={{
                            width: Width,
                            backgroundColor: "#fff",
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            paddingHorizontal: 10,
                        }}
                    >

                        {/* modal header */}
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Pressable
                                onPress={() => setMenuVisible(false)}
                                style={{
                                    padding: 8,
                                    borderWidth: 1,
                                    borderColor: "#D5D5D5",
                                    borderRadius: 30,
                                    width: 40,
                                    height: 40
                                }}
                            >
                                <Ionicons name="arrow-back" size={24} color="#272727" />
                            </Pressable>
                            <Text style={{ color: "#272727", fontWeight: "500", fontSize: 18, textAlign: "left", flex: 1, marginLeft: 16 }}>
                                Notification Settings
                            </Text>
                            <View>
                                <Switch
                                    value={isEnabledNoti}
                                    onValueChange={() => setIsEnabledNoti(!isEnabledNoti)}
                                    trackColor={{ false: "#828282", true: "#D76527" }}
                                    thumbColor={"#F5F5F5"}
                                    style={{
                                        transform: [
                                            { scaleX: 1.5 },
                                            { scaleY: 1.5 },
                                        ],
                                    }}
                                />
                            </View>
                        </View>
                        {/* divider */}
                        <View style={{
                            height: 1,
                            backgroundColor: "#D5D5D5",
                            marginVertical: 20
                        }}></View>

                        {/* settings options */}
                        <View>
                            {options.map((item) => {
                                const selected = selectedOptions.includes(item);
                                return (
                                    <Pressable
                                        key={item}
                                        onPress={() => toggleOption(item)}
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            paddingVertical: 12,
                                        }}
                                    >
                                        <Text style={{ color: "#272727", fontSize: 16, fontWeight: "500" }}>
                                            {item}
                                        </Text>

                                        <View
                                            style={{
                                                width: 24,
                                                height: 24,
                                                borderRadius: 12,
                                                borderWidth: 2,
                                                borderColor: selected ? "#D76527" : "#BDBDBD",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            {selected && (
                                                <View
                                                    style={{
                                                        width: 12,
                                                        height: 12,
                                                        borderRadius: 6,
                                                        backgroundColor: "#D76527",
                                                    }}
                                                />
                                            )}
                                        </View>
                                    </Pressable>
                                );
                            })}
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 25,
        marginHorizontal: 10,
        marginBottom: 20
    },
    headerStart: {
        flexDirection: "row",
        gap: 16
    }
})