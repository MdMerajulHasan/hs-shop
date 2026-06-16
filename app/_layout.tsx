import { Stack, router } from "expo-router";
import { StatusBar, Text, View, Modal, Pressable, Image } from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RootLayout() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <StatusBar hidden />

      {/* Settings Popup */}
      <Modal
        transparent
        visible={menuVisible}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.4)",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setMenuVisible(false)}
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

      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false,animation: "none" }}
        />

        <Stack.Screen
          name="notifications"
          options={{
            headerShown: false,
            animation: "none",

            // // LEFT (Back button)
            // headerLeft: () => (
            //   <Pressable
            //     onPress={() => router.back()}
            //     style={{ padding: 8, borderWidth: 1, borderColor: "#D5D5D5", borderRadius: 30  }}
            //   >
            //     <Ionicons size={24} color={"#272727"} name={"arrow-back"}></Ionicons>
            //   </Pressable>
            // ),

            // // MIDDLE (title + subtitle)
            // headerTitle: () => (
            //   <View style={{ alignItems: "center" }}>
            //     <Text style={{ fontSize: 18, fontWeight: "500", color: "#272727" }}>
            //       Notifications
            //     </Text>

            //     <Text style={{ fontSize: 12, color: "#575757" }}>
            //       6 unread notifications
            //     </Text>
            //   </View>
            // ),

            // // RIGHT (3-dot menu)
            // headerRight: () => (
            //   <Pressable
            //     onPress={() => setMenuVisible(true)}
            //     style={{ paddingHorizontal: 10 }}
            //   >
            //     <Image style={{ width: 5, height: 21 }} source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/Group-98.png" }}></Image>
            //   </Pressable>
            // ),
          }}
        />
      </Stack>
    </>
  );
}