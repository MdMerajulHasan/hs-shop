import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  count?: number;
  page: string;
  isModal?: boolean;
  onClose?: () => void;
  id?: string;
};

export default function Header({ count, page, isModal, onClose, id }: Props) {
  let title = "";
  let subtitle: string | null = null;

  switch (page) {
    case "notifications":
      title = "Notifications";
      subtitle = `Unread ${count} notifications`;
      break;
    case "cart":
      title = "Cart";
      subtitle = `Total ${count} items added`;
      break;
    case "wishlist":
      title = "WishList";
      subtitle = `Total ${count} items added`;
      break;
    case "placeorder":
      title = "Place Order";
      subtitle = `Total ${count} items added`;
      break;
    case "changepassword":
      title = "Change Password";
      break;
    case "deliveryaddress":
      title = "Delivery Address";
      break;
    case "notificationsettings":
      title = "Notification Settings";
      break;
    case "orderstatus":
      title = "Order Status";
      subtitle = `${count} Order in shipping`;
      break;
    case "orderDetails":
      title = "Order Details";
      subtitle = `Order ID: #${id}`;
      break;
    case "editProfile":
      title = "Edit Profile";
      break;
  }

  return (
    <View style={styles.headerStart}>
      <Pressable
        onPress={
          isModal
            ? onClose
            : () => {
                if (router.canGoBack()) {
                  router.back();
                } else {
                  router.replace("/");
                }
              }
        }
        style={{
          padding: 8,
          borderWidth: 1,
          borderColor: "#D5D5D5",
          borderRadius: 30,
        }}
      >
        <Ionicons name="arrow-back" size={24} color="#272727" />
      </Pressable>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "500", color: "#272727" }}>
          {title}
        </Text>
        {subtitle ? (
          <Text style={{ fontWeight: "400", fontSize: 12, color: "#575757" }}>
            {subtitle}
          </Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStart: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
});
