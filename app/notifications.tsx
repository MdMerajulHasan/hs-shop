import BottomSheetWrapper from "@/components/BottomSheetWrapper";
import EmptyNotificationBox from "@/components/EmptyNotificationBox";
import Header from "@/components/Header";
import ModalNotificationSettings from "@/components/ModalNotificationSettings";
import NotificationCard from "@/components/NotificationCard";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useEffect, useRef, useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";


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

export default function Notifications() {

    const totalNotifications = notificationsData.length;
    const notiSettingsRef = useRef<BottomSheetModal>(null);
    // const totalNotifications = 0;

    const [unread, setUnread] = useState(0);
    const unreads = notificationsData.filter(item => item.isRead === false);

    useEffect(() => {
        setUnread(unreads.length);
    }, [unreads]);

    return (
        <View style={{ flex: 1 }}>
            {/* header */}
            <View style={styles.header}>
                <Header count={unread} page={"notifications"}></Header>
                <Pressable
                    onPress={() => { notiSettingsRef.current?.present(); }}
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
            <BottomSheetWrapper
                ref={notiSettingsRef}
                snapPoints={["50%", "100%"]}
            >
                <ModalNotificationSettings
                    onClose={() => { notiSettingsRef.current?.close() }}>
                </ModalNotificationSettings>
            </BottomSheetWrapper>
        </View>
    )
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
})