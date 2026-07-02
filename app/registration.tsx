import PrimaryButton from "@/components/PrimaryButton";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleRegistration = async () => {
        setError("");

        // Validation
        if (!name.trim()) {
            setError("Please enter your full name.");
            return;
        }

        if (!email.trim()) {
            setError("Please enter your email.");
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!password) {
            setError("Please enter a password.");
            return;
        }

        // Password length validation
        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }

        if (!confirmPassword) {
            setError("Please confirm your password.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(
                "https://fabrictechs.com/api/v1/user/register/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        full_name: name,
                        email: email,
                        password: password,
                        password2: confirmPassword,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                if (data.email) {
                    setError(Array.isArray(data.email) ? data.email[0] : data.email);
                } else if (data.password) {
                    setError(Array.isArray(data.password) ? data.password[0] : data.password);
                } else if (data.detail) {
                    setError(data.detail);
                } else {
                    setError("Registration failed.");
                }
                return;
            }

            Alert.alert(
                "Success",
                data.detail || "Registration successful!"
            );

            router.replace("/login");
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={{ marginBottom: 30, alignItems: "center", justifyContent: "center" }}>
                    <Text style={styles.title}>Create Your Account</Text>
                    <Text style={styles.subTitle}>Sign up to enjoy your favorite foods</Text>
                </View>

                <View style={{ width: "100%", gap: 20, marginBottom: 30 }}>

                    <View>
                        <Text style={styles.text}>Full Name*</Text>
                        <TextInput
                            style={styles.inputContainer}
                            placeholder="Full Name"
                            placeholderTextColor="#575757"
                            onChangeText={setName}
                            keyboardType="default"
                            autoCapitalize="none"
                        />
                    </View>

                    <View>
                        <Text style={styles.text}>Email*</Text>
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
                        <Text style={styles.text}>Password*</Text>
                        <TextInput
                            style={styles.inputContainer}
                            placeholder="Password"
                            placeholderTextColor="#575757"
                            onChangeText={setPassword}
                            secureTextEntry
                            keyboardType="default"
                            autoCapitalize="none"
                        />
                    </View>

                    <View>
                        <Text style={styles.text}>Confirm Password*</Text>
                        <TextInput
                            style={styles.inputContainer}
                            placeholder="Confirm Password"
                            placeholderTextColor="#575757"
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                            keyboardType="default"
                            autoCapitalize="none"
                        />
                    </View>

                    {error ? (
                        <Text
                            style={{
                                color: "red",
                                textAlign: "center",
                                marginBottom: 10,
                                fontSize: 15,
                            }}
                        >
                            {error}
                        </Text>
                    ) : null}

                    <Pressable
                        onPress={() => {
                            handleRegistration();
                        }}
                    >
                        <PrimaryButton label="Continue" />
                    </Pressable>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text style={styles.subTitle}>Already have an account? </Text>

                        <Pressable onPress={() => router.push("/login")}>
                            <Text
                                style={[styles.subTitle, {
                                    color: "#D76527",
                                    textDecorationLine: "underline",
                                }]}
                            >
                                Log In
                            </Text>
                        </Pressable>
                    </View>

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
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#BCBCBC',
    },
    logoContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 16,
        gap: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoItem: {
        backgroundColor: "#D5D5D5",
        padding: 14,
        borderRadius: 60,
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
    }
})