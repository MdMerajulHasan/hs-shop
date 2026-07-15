import BackToHome from "@/components/BackToHome";
import PrimaryButton from "@/components/PrimaryButton";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
    Alert,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";



export default function Active() {

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const { uid, email } = useLocalSearchParams<{
        uid: string;
        email: string;
    }>();

    const [countdown, setCountdown] = useState(20);
    const [resending, setResending] = useState(false);

    const inputRefs = useRef<(TextInput | null)[]>([]);

    const handleChange = (text: string, index: number) => {
        if (!/^\d*$/.test(text)) return;

        const newOtp = [...otp];
        newOtp[index] = text.slice(-1);

        setOtp(newOtp);

        if (text && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (
        e: any,
        index: number
    ) => {
        if (
            e.nativeEvent.key === "Backspace" &&
            otp[index] === "" &&
            index > 0
        ) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleActivate = async () => {
        const otpCode = otp.join("");

        if (otpCode.length !== 6) {
            setError("Please enter the 6-digit OTP.");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const response = await fetch(
                "https://fabrictechs.com/api/v1/user/activate/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        uid: Number(uid),
                        otp: otpCode,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.detail ||
                    data.otp?.[0] ||
                    "Activation failed."
                );
                return;
            }

            Alert.alert(
                "Success",
                data.detail || "Account Activated!"
            );

            router.replace("/login");
        } catch {
            setError("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (countdown === 0) return;

        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [countdown]);

    const handleResend = async () => {
        if (countdown > 0 || resending) return;

        try {
            setResending(true);

            const response = await fetch(
                "https://fabrictechs.com/api/v1/user/resend-otp/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        uid,
                        email,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                Alert.alert("Error", data.detail || "Failed to resend OTP.");
                return;
            }

            Alert.alert("Success", "A new OTP has been sent to your email.");

            // restart countdown
            setCountdown(20);
        } catch {
            Alert.alert("Error", "Something went wrong.");
        } finally {
            setResending(false);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 10 }}>
            <View style={{
                marginBottom: 5,
                position: "absolute",
                top: 40,
                left: 10,
            }}>
                <BackToHome page={"active"}></BackToHome>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 30,
                    gap: 10,
                    width: "100%"
                }}
            >
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => {
                            inputRefs.current[index] = ref;
                        }}
                        value={digit}
                        onChangeText={(text) =>
                            handleChange(text, index)
                        }
                        onKeyPress={(e) =>
                            handleKeyPress(e, index)
                        }
                        keyboardType="number-pad"
                        maxLength={1}
                        textAlign="center"
                        style={styles.otpBox}
                    />

                ))}

                {error ? (
                    <Text
                        style={{
                            color: "red",
                            textAlign: "center",
                            marginBottom: 15,
                        }}
                    >
                        {error}
                    </Text>
                ) : null}
            </View>
            <Pressable
                disabled={loading}
                onPress={handleActivate}
                style={{ width: "100%" }}
            >
                <PrimaryButton
                    label={
                        loading
                            ? "Verifying..."
                            : "Verify"
                    }
                />
            </Pressable>
            <Pressable
                disabled={countdown > 0 || resending}
                onPress={handleResend}
            >
                <Text
                    style={{
                        color: countdown > 0 ? "#999" : "#D76527",
                        textDecorationLine: "underline",
                        marginTop: 20,
                    }}
                >
                    {countdown > 0
                        ? `Resend (${countdown}s)`
                        : resending
                            ? "Sending..."
                            : "Resend"}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    otpBox: {
        width: 40,
        height: 50,

        borderWidth: 1,
        borderColor: "#D76527",

        borderRadius: 14,

        fontSize: 24,
        fontWeight: "700",

        color: "#272727",

        backgroundColor: "#FFF",

        textAlign: "center",
    },
});