import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
    </GestureHandlerRootView>
  );
}