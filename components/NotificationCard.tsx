import { NotificationItem } from "@/app/notifications";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    notification: NotificationItem;
}


export default function NotificationCard({ notification }: Props) {
    return (
        <View style={styles.notificationContainer}>

            <Image
                style={{ width: 24, height: 24 }}
                source={{ uri: `${notification.image}` }}
            />


            <View style={{ flex: 1, gap: 8 }}>
                <View style={{ gap: 8 }}>
                    <View>
                        <Text
                            style={{
                                color: "#272727",
                                fontSize: 16,
                                fontWeight: "600"
                            }}>
                            {notification.title}
                        </Text>
                        <Text
                            style={{
                                color: "#828282",
                                fontWeight: "400",
                                fontSize: 12
                            }}>
                            {notification.timeAgo}
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                color: "#575757",
                                textAlign: "left",
                                fontSize: 14,
                                fontWeight: "400"
                            }}>
                            {notification.description}
                        </Text>
                    </View>
                </View>
                {
                    notification.actionLabel &&
                    <Pressable
                        style={{
                            backgroundColor: "#272727",
                            paddingVertical: 8,
                            paddingHorizontal: 12,
                            borderRadius: 66,
                            maxWidth: 100
                        }}
                    >
                        <Text style={{
                            textAlign: "center",
                            color: "#F5F5F5",
                            fontSize: 14,
                            fontWeight: "500"
                        }}>
                            {notification.actionLabel}
                        </Text>
                    </Pressable>
                }
            </View>

            <View>
                <Image
                    style={{ width: 8, height: 18 }}
                    source={{ uri: `https://d.hs-bd.com/wp-content/uploads/2026/06/3-Dot.png` }}
                ></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    notificationContainer: {
        flex: 1,
        gap: 12,
        flexDirection: "row",
        marginHorizontal: 10
    },

})