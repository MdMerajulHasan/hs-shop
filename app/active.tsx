import { useRef, useState } from "react";
import {
    Alert,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import PrimaryButton from "@/components/PrimaryButton";


export default function Active() {

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const { uid } = useLocalSearchParams<{
        uid: string;
    }>();

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


    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 10 }}>

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
                style={{width: "100%"}}
            >
                <PrimaryButton
                    label={
                        loading
                            ? "Verifying..."
                            : "Verify"
                    }
                />
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