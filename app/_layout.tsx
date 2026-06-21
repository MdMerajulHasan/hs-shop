import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {

  return (
    <>
      <StatusBar hidden />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="notifications"
          options={{
            headerShown: false,
            animation: "none",
          }}
        />
        <Stack.Screen
          name="changePassword"
          options={{
            title: "Change Password",
            headerShown: false,
            animation: "none",
          }}
        />
        <Stack.Screen
          name="cart"
          options={{
            title: "Cart",
            headerShown: false,
            animation: "none",
          }}
        />
        <Stack.Screen
          name="placeOrder"
          options={{
            title: "Place Order",
            headerShown: false,
            animation: "none"
          }}
        />
      </Stack>
    </>
  );
}