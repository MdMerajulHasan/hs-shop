import Header from "@/components/Header";
import PrimaryButton from "@/components/PrimaryButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Dimensions, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";


type Props = {
    visible: boolean;
    onClose: () => void;
};

const { width: Width } = Dimensions.get("screen");

export default function ModalChangePass({ visible, onClose }: Props) {

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [checked, setChecked] = useState(false);

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: "rgba(0,0,0,0.4)",
                    justifyContent: "flex-end"
                }}
            >
                <View
                    style={{
                        width: Width,
                        backgroundColor: "#fff",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        paddingHorizontal: 10,
                    }}
                >
                    {/* header */}
                    <View
                        style={styles.header}>
                        <Header onClose={onClose}  isModal={true} page={"changepassword"}></Header>
                    </View>
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
                                style={{ color: "#575757", fontSize: 14, fontWeight: "400", }}>
                                By signing up, you agree to our{" "}
                                <Text style={{ color: "#111111", textDecorationLine: "underline" }}>
                                    Terms of Service {" "}
                                </Text>
                                and {" "}
                                <Text style={{ color: "#111111", textDecorationLine: "underline" }}>
                                    Privacy Policy
                                </Text>
                            </Text>
                        </View>
                        <PrimaryButton label={"Submit"}></PrimaryButton>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 20,
        marginHorizontal: 10,
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
        textAlign: "center",
        margin: 20
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
        marginHorizontal: 20,
        marginBottom: 10
    }
})