import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {

  return (
    <>
      <StatusBar hidden />
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
          }}
        />
      </Stack>
    </>
  );
}