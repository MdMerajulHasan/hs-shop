import PrimaryButton from "@/components/PrimaryButton";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from "react-native";

export default function ChangePassword() {
    const [otp, setOtp] = useState("");
    const [newPass, setNewPass] = useState("");
    const [rePass, setRePass] = useState("");
    

    const handleSetNewPass = () => {
        console.log(otp, newPass, rePass);
        router.push("/login");
    };

    return (

        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <View style={{ marginBottom: 30, alignItems: "center", justifyContent: "center" }}>
                        <Text style={styles.title}>Change Password</Text>
                        <Text style={styles.subTitle}>Set Your New Password</Text>
                    </View>

                    <View style={{ width: "100%", marginBottom: 30, gap: 20 }}>
                        <View>
                            <Text style={styles.text}>Give OTP</Text>
                            <TextInput
                                style={styles.inputContainer}
                                placeholder="OTP"
                                placeholderTextColor="#575757"
                                onChangeText={setOtp}
                                keyboardType="number-pad"
                                autoCapitalize="none"
                            />
                        </View>

                        <View>
                            <Text style={styles.text}>Type New Password</Text>
                            <TextInput
                                style={styles.inputContainer}
                                placeholder="New Password"
                                placeholderTextColor="#575757"
                                onChangeText={setNewPass}
                                keyboardType="visible-password"
                                autoCapitalize="none"
                                textContentType="newPassword"
                            />
                        </View>

                        <View>
                            <Text style={styles.text}>Retype New Password</Text>
                            <TextInput
                                style={styles.inputContainer}
                                placeholder="Retype Password"
                                placeholderTextColor="#575757"
                                onChangeText={setRePass}
                                keyboardType="visible-password"
                                autoCapitalize="none"
                                textContentType="newPassword"
                            />
                        </View>

                        <Pressable
                            onPress={() => {
                                handleSetNewPass();
                            }}
                        >
                            <PrimaryButton label="Save New Password" />
                        </Pressable>

                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text style={styles.subTitle}>Resent OTP? </Text>

                            <Pressable onPress={() => router.push("/forgotPassword")}>
                                <Text
                                    style={[styles.subTitle, {
                                        color: "#D76527",
                                        textDecorationLine: "underline",
                                    }]}
                                >
                                    Resend
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
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