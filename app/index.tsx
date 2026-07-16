import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkApp = async () => {
      const completed = await AsyncStorage.getItem("onboardingCompleted");

      router.replace(completed ? "/(tabs)" : "/onboarding");

      setLoading(false);
    };

    checkApp();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#D76527" />
      </View>
    );
  }

  return null;
}