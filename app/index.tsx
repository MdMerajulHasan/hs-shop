import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function Index() {
  useEffect(() => {
    const checkApp = async () => {
      const completed = await AsyncStorage.getItem("onboardingCompleted");

      router.replace(completed ? "/(tabs)" : "/onboarding");
    };

    checkApp();
  }, []);

  return null;
}