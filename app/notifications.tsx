import BottomSheetWrapper from "@/components/BottomSheetWrapper";
import EmptyNotificationBox from "@/components/EmptyNotificationBox";
import Header from "@/components/Header";
import ModalNotificationSettings from "@/components/ModalNotificationSettings";
import NotificationCard from "@/components/NotificationCard";
import {
  clearNotifications,
  markAllAsRead,
} from "@/features/notifications/notificationsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Notifications() {
  const notifications = useAppSelector(
    (state) => state.notification.notifications,
  );

  const notiSettingsRef = useRef<BottomSheetModal>(null);

  const unread = notifications.filter((n) => !n.isRead).length;

  const [notiDotVisible, setNotiDotVisible] = useState(false);

  const dispatch = useAppDispatch();

  return (
    <View style={{ flex: 1 }}>
      {/* header */}
      <View style={styles.header}>
        <Header count={unread} page={"notifications"}></Header>
        <Pressable
          onPress={() => {
            setNotiDotVisible(true);
          }}
          style={{ paddingHorizontal: 9 }}
        >
          <Image
            style={{
              width: 5,
              height: 21,
            }}
            source={{
              uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/Group-98.png",
            }}
          ></Image>
        </Pressable>
      </View>

      {/* body */}

      {!!notifications.length ? (
        <FlatList
          style={{ marginHorizontal: 10 }}
          data={notifications}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <NotificationCard notification={item}></NotificationCard>
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                backgroundColor: "#D5D5D5",
                marginVertical: 16,
              }}
            ></View>
          )}
          contentContainerStyle={{
            paddingBottom: 50,
          }}
        ></FlatList>
      ) : (
        <EmptyNotificationBox></EmptyNotificationBox>
      )}

      {/* notification settings modal */}
      <BottomSheetWrapper ref={notiSettingsRef} snapPoints={["50%", "100%"]}>
        <ModalNotificationSettings
          onClose={() => {
            notiSettingsRef.current?.close();
          }}
        ></ModalNotificationSettings>
      </BottomSheetWrapper>
      <Modal
        visible={notiDotVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setNotiDotVisible(false)}
      >
        <Pressable
          style={styles.overlay}
          onPress={() => setNotiDotVisible(false)}
        >
          <Pressable style={styles.menu} onPress={(e) => e.stopPropagation()}>
            <Pressable
              style={styles.menuItem}
              onPress={() => {
                setNotiDotVisible(false);
                dispatch(markAllAsRead());
              }}
            >
              <Text
                style={{
                  color: "#272727",
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Mark All As Read
              </Text>
            </Pressable>

            <Pressable
              style={styles.menuItem}
              onPress={() => {
                setNotiDotVisible(false);
                dispatch(clearNotifications());
              }}
            >
              <Text
                style={{
                  color: "#272727",
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Clear All Notifications
              </Text>
            </Pressable>

            <Pressable
              style={styles.menuItem}
              onPress={() => {
                setNotiDotVisible(false);
                notiSettingsRef.current?.present();
              }}
            >
              <Text
                style={{
                  color: "#272727",
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Settings
              </Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.15)",
  },

  menu: {
    position: "absolute",
    top: 60, // adjust for status bar/header
    right: 20,
    backgroundColor: "#FEFEFE",
    padding: 20,
    borderRadius: 10,
    minWidth: 180,
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
