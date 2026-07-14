import {
  deleteNotification,
  markAsRead,
} from "@/features/notifications/notificationsSlice";
import { AppNotification } from "@/features/notifications/types";
import { useAppDispatch } from "@/store/hooks";
import { getNotificationImage } from "@/utils/getNotificationImage";
import { getTimeAgo } from "@/utils/getTimeAgo";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  notification: AppNotification;
};

export default function NotificationCard({ notification }: Props) {
  const [menuVisible, setMenuVisible] = useState(false);

  const dispatch = useAppDispatch();

  return (
    <Pressable
      style={styles.notificationContainer}
      onPress={() => setMenuVisible(false)}
    >
      <Image
        style={{ width: 24, height: 24 }}
        source={{ uri: getNotificationImage(notification.type) }}
      />

      <View style={{ flex: 1, gap: 8 }}>
        <View style={{ gap: 8 }}>
          <View>
            <Text
              style={{
                color: "#272727",
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              {notification.title}
            </Text>
            <Text
              style={{
                color: "#828282",
                fontWeight: "400",
                fontSize: 12,
              }}
            >
              {getTimeAgo(notification.createdAt)}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#575757",
                textAlign: "left",
                fontSize: 14,
                fontWeight: "400",
              }}
            >
              {notification.body}
            </Text>
          </View>
        </View>
        {notification.actionLabel && !notification.isRead && (
          <Pressable
            style={{
              backgroundColor: "#272727",
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 66,
              maxWidth: 100,
            }}
            onPress={() => {
              dispatch(markAsRead(notification.id));
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#F5F5F5",
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              {notification.actionLabel}
            </Text>
          </Pressable>
        )}
      </View>

      <Pressable
        onPress={() => {
          setMenuVisible(true);
        }}
      >
        <Image
          style={{ width: 8, height: 18 }}
          source={{
            uri: `https://d.hs-bd.com/wp-content/uploads/2026/06/3-Dot.png`,
          }}
        ></Image>
        {menuVisible && (
          <Pressable style={styles.menu}>
            <Pressable
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                dispatch(deleteNotification(notification.id));
              }}
            >
              <Text
                style={{
                  color: "#272727",
                  fontSize: 16,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Delete
              </Text>
            </Pressable>
          </Pressable>
        )}
      </Pressable>
      {/* <Modal
        visible={menuVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setMenuVisible(false)}>
          <Pressable style={styles.menu} onPress={(e) => e.stopPropagation()}>
            <Pressable
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                dispatch(deleteNotification(notification.id));
              }}
            >
              <Text
                style={{
                  color: "#272727",
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Delete
              </Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  notificationContainer: {
    flex: 1,
    gap: 12,
    flexDirection: "row",
    marginHorizontal: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.15)",
  },

  menu: {
    position: "absolute",
    top: 0, // adjust for status bar/header
    right: 0,
    backgroundColor: "#FEFEFE",
    padding: 5,
    borderRadius: 10,
    minWidth: 80,
    elevation: 6, // Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },

  menuItem: {
    paddingVertical: 10,
  },
});
