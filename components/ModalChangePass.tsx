import Header from "@/components/Header";
import PrimaryButton from "@/components/PrimaryButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";


type Props = {
    onClose: () => void;
};

export default function ModalChangePass({ onClose }: Props) {

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [checked, setChecked] = useState(true);

    return (

        <>
            <View style={{ paddingHorizontal: 20 }}>
                <View style={styles.header}>
                    <Header
                        page="changepassword"
                        isModal
                        onClose={onClose}
                    />
                </View>

                <BottomSheetScrollView
                    contentContainerStyle={{
                        paddingBottom: 30,
                        flex: 1
                    }}
                    showsVerticalScrollIndicator={false}
                >

                    <Text
                        style={styles.descriptionText}
                    >
                        Update your account password securely to protect your restaurant profile, orders, payment methods, and personal information.
                    </Text>
                    <View style={styles.inputsContainer}>

                        <View>
                            <Text style={styles.inputTitle}>Current Password</Text>
                            <TextInput
                                value={currentPassword}
                                placeholder="Enter your current password"
                                placeholderTextColor={"#ADADAD"}
                                onChangeText={(text: string) => setCurrentPassword(text)}
                                secureTextEntry
                                style={styles.inputField}
                            />
                        </View>

                        <View>
                            <Text style={styles.inputTitle}>New Password</Text>
                            <TextInput
                                value={newPassword}
                                placeholder="Create a strong new password"
                                placeholderTextColor={"#ADADAD"}
                                onChangeText={(text: string) => setNewPassword(text)}
                                secureTextEntry
                                style={styles.inputField}
                            />
                        </View>

                        <View>
                            <Text style={styles.inputTitle}>Confirm Password</Text>
                            <TextInput
                                value={confirmPassword}
                                placeholder="Re-enter your new password"
                                placeholderTextColor={"#ADADAD"}
                                onChangeText={(text: string) => setConfirmPassword(text)}
                                secureTextEntry
                                style={styles.inputField}
                            />
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 10, marginBottom: 20 }}>
                            <Pressable
                                onPress={() => setChecked(!checked)}
                                style={{
                                    width: 24,
                                    height: 24,
                                    borderWidth: 1,
                                    borderColor: "#828282",
                                    borderRadius: 8,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "transparent",
                                    marginTop: 2,
                                }}
                            >
                                {checked && (
                                    <Ionicons name="checkmark" size={16} color="#828282" />
                                )}
                            </Pressable>

                            <Text
                                style={{ color: "#575757", fontSize: 12, fontWeight: "400", textAlign: "left", flexWrap: "wrap" }}>
                                By signing up, you agree to our{" "}
                                <Text style={{ color: "#111111", textDecorationLine: "underline" }}>
                                    Terms of Service
                                </Text>
                                {" "}and {" "}
                                <Text style={{ color: "#111111", textDecorationLine: "underline" }}>
                                    Privacy Policy
                                </Text>
                            </Text>
                        </View>
                        <Pressable
                            onPress={() => { }}
                        >
                            <PrimaryButton label={"Submit"}></PrimaryButton>
                        </Pressable>
                    </View>
                </BottomSheetScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#D5D5D5"
    },
    headerStart: {
        flexDirection: "row",
        gap: 16,
        alignItems: "center"
    },
    descriptionText: {
        color: "#272727",
        fontSize: 14,
        fontWeight: "400",
        textAlign: "left",
        marginVertical: 20
    },
    inputField: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 56,
        backgroundColor: "#FEFEFE",
        borderWidth: 1,
        borderColor: "#ADADAD",
    },
    inputTitle: {
        color: "#575757",
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 4
    },
    inputsContainer: {
        gap: 20,
        marginBottom: 10
    }
})