import PrimaryButton from "@/components/PrimaryButton";
import { useAppDispatch } from "@/store/hooks";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import { jwtDecode } from "jwt-decode";
import { login } from "@/features/user/userSlice";
import * as SecureStore from "expo-secure-store";
import { isAxiosError } from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://fabrictechs.com/api/v1/user/token/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const data = await response.json();

      const decoded: any = jwtDecode(data.access);

      await SecureStore.setItemAsync("accessToken", data.access);
      await SecureStore.setItemAsync("refreshToken", data.refresh);
      dispatch(
        login({
          id: decoded.user_id,
          name: decoded.full_name,
          email: decoded.email,
          username: decoded.username,
          image: decoded.avatar_url,
          role: decoded.role,
          isSupplier: decoded.is_supplier,
          isExpert: decoded.is_expert,
          token: data.access,
          refreshToken: data.refresh,
        }),
      );

      router.replace("/");
    } catch (error) {
      if (isAxiosError(error)) {
        Alert.alert(
          "Login Failed",
          error.response?.data?.message || error.message,
        );
      } else if (error instanceof Error) {
        Alert.alert("Login Failed", error.message);
      } else {
        Alert.alert("Login Failed", "Something went wrong.");
      }
    }
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            marginBottom: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subTitle}>
            Login to enjoy your favorite foods
          </Text>
        </View>

        <View style={{ width: "100%", marginBottom: 30, gap: 20 }}>
          <View>
            <Text style={styles.text}>Email</Text>
            <TextInput
              style={styles.inputContainer}
              placeholder="Email Address"
              placeholderTextColor="#575757"
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View>
            <Text style={styles.text}>Password</Text>
            <TextInput
              style={styles.inputContainer}
              placeholder="Password"
              placeholderTextColor="#575757"
              onChangeText={setPassword}
              secureTextEntry
              keyboardType="default"
              autoCapitalize="none"
              autoComplete="password"
            />
          </View>

          <Pressable
            onPress={() => {
              handleLogin();
            }}
          >
            <PrimaryButton label="Login" />
          </Pressable>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.subTitle}>New to our platform? </Text>

            <Pressable onPress={() => router.push("/registration")}>
              <Text
                style={[
                  styles.subTitle,
                  {
                    color: "#D76527",
                    textDecorationLine: "underline",
                  },
                ]}
              >
                Create an Account
              </Text>
            </Pressable>
          </View>

          <Pressable onPress={() => router.push("/forgotPassword")}>
            <Text
              style={[
                styles.subTitle,
                {
                  color: "#D76527",
                  textDecorationLine: "underline",
                  textAlign: "center",
                },
              ]}
            >
              Forgot Password?
            </Text>
          </Pressable>
        </View>

        <View style={styles.container}>
          <View style={styles.line} />
          <Text style={styles.subTitle}>Or continue with</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.logoContainer}>
          <View style={styles.logoItem}>
            <Ionicons name="logo-facebook" size={32} color="#3b5998" />
          </View>
          <View style={[styles.logoItem, { paddingHorizontal: 18 }]}>
            <FontAwesome6 name="apple" size={32} color="#000" />
          </View>
          <View style={styles.logoItem}>
            <Ionicons name="logo-google" size={32} color="#4285F4" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    gap: 1,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#575757",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 38,
    color: "#575757",
    fontSize: 16,
    fontWeight: "400",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#575757",
    marginBottom: 4,
    textAlign: "left",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#BCBCBC",
  },
  logoContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 16,
    gap: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  logoItem: {
    backgroundColor: "#D5D5D5",
    padding: 14,
    borderRadius: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "#272727",
    marginBottom: 10,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#575757",
  },
});
