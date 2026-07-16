import CustomToast from "@/components/CustomToast";
import { store } from "@/store/store";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import * as Notifications from "expo-notifications";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast, { BaseToastProps } from "react-native-toast-message";
import { Provider } from "react-redux";

SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function RootLayout() {
  useEffect(() => {
    console.log("RootLayout mounted");

    return () => {
      console.log("RootLayout unmounted");
    };
  }, []);
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

  const toastConfig = {
    success: (props: BaseToastProps) => (
      <CustomToast type="success" text1={props.text1} text2={props.text2} />
    ),

    error: (props: BaseToastProps) => (
      <CustomToast type="error" text1={props.text1} text2={props.text2} />
    ),
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <BottomSheetModalProvider>
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
                animation: "none",
              }}
            />
            <Stack.Screen
              name="Details"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="login"
              options={{
                headerShown: false,
                animation: "none",
              }}
            />
            <Stack.Screen
              name="registration"
              options={{
                headerShown: false,
                animation: "none",
              }}
            />
            <Stack.Screen
              name="orderDetails"
              options={{
                headerShown: false,
                animation: "none",
              }}
            />
            <Stack.Screen
              name="active"
              options={{
                headerShown: false,
                animation: "none",
              }}
            />
            <Stack.Screen
              name="forgotPassword"
              options={{
                headerShown: false,
                animation: "none",
              }}
            />
            <Stack.Screen
              name="changePassword"
              options={{
                headerShown: false,
                animation: "none",
              }}
            />
            <Stack.Screen
              name="onboarding"
              options={{
                headerShown: false,
                animation: "none",
              }}
            />
            <Stack.Screen
              name="index"
              options={{
                headerShown: false,
                animation: "none",
              }}
            />
          </Stack>
        </BottomSheetModalProvider>
        <Toast config={toastConfig} position="top" bottomOffset={30} />
      </Provider>
    </GestureHandlerRootView>
  );
}
