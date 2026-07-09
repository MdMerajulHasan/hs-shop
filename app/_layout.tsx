import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      }
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      try {
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
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
            <Stack.Screen
              name="orderDetails"
              options={{
                headerShown: false,
                animation: "none"
              }}
            />
            <Stack.Screen
              name="active"
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