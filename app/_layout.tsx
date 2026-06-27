import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function RootLayout() {

  return (
    <Provider store={store}>
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
          name="placeOrder"
          options={{
            title: "Place Order",
            headerShown: false,
            animation: "none"
          }}
        />
        <Stack.Screen
          name="Details"
          options={{
            headerShown: false
          }}
        />
      </Stack>
    </Provider>
  );
}