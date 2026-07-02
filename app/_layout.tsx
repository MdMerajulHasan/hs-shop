import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";


export default function RootLayout() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
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
            <Stack.Screen
              name="login"
              options={{
                headerShown: false,
                animation: "none"
              }}
            />
            <Stack.Screen
              name="registration"
              options={{
                headerShown: false,
                animation: "none"
              }}
            />
          </Stack>
        </Provider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}


