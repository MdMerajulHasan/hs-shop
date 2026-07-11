import PrimaryButton from "@/components/PrimaryButton";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";

export default function ForgotPassword() {

    const [email, setEmail] = useState("");

    const handleForgotPassword = () => {
        router.push("/changePassword");
    }

    return (
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={{ marginBottom: 30, alignItems: "center", justifyContent: "center" }}>
                    <Text style={styles.title}>Forgot Password</Text>
                    <Text style={styles.subTitle}>Give Email or Phone to Reset Password</Text>
                </View>

                <View style={{ width: "100%", marginBottom: 30, gap: 20 }}>

                    <View>
                        <Text style={styles.text}>Give Your Email or Phone</Text>
                        <TextInput
                            style={styles.inputContainer}
                            placeholder="Email or Phone"
                            placeholderTextColor="#575757"
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <Pressable
                        onPress={() => {
                            handleForgotPassword();
                        }}
                    >
                        <PrimaryButton label="Get OTP" />
                    </Pressable>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text style={styles.subTitle}>Remembered Password? </Text>

                        <Pressable onPress={() => router.push("/login")}>
                            <Text
                                style={[styles.subTitle, {
                                    color: "#D76527",
                                    textDecorationLine: "underline",
                                }]}
                            >
                                Login
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
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
    }, text: {
        fontSize: 16,
        fontWeight: "500",
        color: "#575757",
        marginBottom: 4,
        textAlign: 'left'
    },
    title: {
        fontSize: 32,
        fontWeight: '600',
        color: '#272727',
        marginBottom: 10,
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 16,
        fontWeight: '400',
        color: "#575757",
    },

})