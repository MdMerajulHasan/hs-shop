import ModalNotificationSettings from "@/components/ModalNotificationSettings";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Profile() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [menuVisible, setMenuVisible] = useState(false);


    const user = {
        image: { uri: "https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/671830664_1764717098216705_5702402513238370206_n.jpg?stp=dst-jpg_tt6&cstp=mx1056x1066&ctp=s1056x1066&_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=rY8SLAoBPccQ7kNvwEgVLyE&_nc_oc=AdqshCKnr28D2jIMfRnVKEgKOQqqE4HCnpRi8ye0eDbQprskceeEVo-XnuK-fr0-_Mo&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=eqaD8WVu0Ies2Sof053t0A&_nc_ss=7b289&oh=00_Af9EnkwTU-yRZv2RjxieK_9swQjfBew4JWTm3lfxIlTQ8Q&oe=6A37FFB6" },
        name: "Merajul Hasan",
        email: "merajuljim@gmail.com"
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View
                style={styles.userContainer}
            >
                {/* back button and title */}
                <View style={styles.profileTitle}>
                    <Pressable
                        onPress={() => router.back()}
                        style={{
                            padding: 8,
                            borderWidth: 1,
                            borderColor: "#D5D5D5",
                            borderRadius: 30,
                            backgroundColor: "#C45C23"
                        }}
                    >
                        <Ionicons name="arrow-back" size={24} color="#F5F5F5" />
                    </Pressable>
                    <Text style={{
                        color: "#F5F5F5",
                        fontWeight: "500",
                        fontSize: 18
                    }}>
                        User Profile & Setting</Text>
                </View>

                {/* user photo, name , email and edit icon */}
                <View style={styles.userInfo}>
                    <Image
                        style={{ width: 80, height: 80, borderRadius: 90 }}
                        source={user.image}
                    ></Image>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: "#F5F5F5", fontSize: 22, fontWeight: "700" }}>{user.name}</Text>
                        <Text style={{ color: "#D5D5D5", fontSize: 16, fontWeight: "400" }}>{user.email}</Text>
                    </View>

                    <Pressable>
                        <Image
                            style={{ height: 24, width: 24 }}
                            tintColor={"#D5D5D5"}
                            source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/edit.png" }}
                        >
                        </Image>
                    </Pressable>
                </View>
            </View>

            {/* point and girft card cards */}
            <View style={styles.parentContainer}>
                <View
                    style={styles.pointsContainer}
                >
                    <Image
                        style={styles.pointImage}
                        source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/Group-35761.png" }}
                    ></Image>
                    <View>
                        <Text style={[styles.pointsTitle, { textAlign: "center" }]}>Reward Points</Text>
                        <Text style={{ textAlign: "center", color: "#06A316", fontSize: 12, fontWeight: "500" }}>2,850</Text>
                    </View>
                </View>
                <View
                    style={styles.cardsContainer}
                >
                    <Image
                        style={styles.giftCardImage}
                        source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/gift.png" }}
                    ></Image>
                    <View>
                        <Text style={[styles.pointsTitle, { textAlign: "center" }]}>Gift Card</Text>
                        <Text style={{ textAlign: "center", color: "#E38800", fontSize: 12, fontWeight: "500" }}>Eid gift card are available</Text>
                    </View>
                </View>

            </View>

            {/* all  settings container */}
            <View style={{ gap: 20, marginHorizontal: 10 }}>
                {/* general settings */}
                <View style={styles.generalContainer}>
                    <Text style={styles.settingsTitle}>
                        General Settings
                    </Text>

                    <View style={{ gap: 20 }}>
                        <View style={styles.settingsBar}>
                            <Text style={styles.settingsText}>Language Settings</Text>
                            <Pressable
                                style={styles.language}
                            >
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: "400",
                                        color: "#272727",
                                        textAlign: "center"
                                    }}>
                                    English
                                </Text>
                                <Ionicons color={"#272727"} size={18} name="chevron-down-outline"></Ionicons>
                            </Pressable>
                        </View>
                        {/* theme settings */}
                        <View style={styles.container}>
                            <Text style={styles.settingsText}>Theme Mode</Text>
                            <View style={styles.toggleContainer}>
                                <Pressable
                                    onPress={() => setTheme("light")}
                                    style={[
                                        styles.iconButton,
                                        theme === "light" && styles.activeButton,
                                    ]}
                                >
                                    <Ionicons
                                        name="sunny"
                                        size={20}
                                        color={theme === "light" ? "#FFFFFF" : "#828282"}
                                    />
                                </Pressable>

                                <Pressable
                                    onPress={() => setTheme("dark")}
                                    style={[
                                        styles.iconButton,
                                        theme === "dark" && styles.activeButton,
                                    ]}
                                >
                                    <Ionicons
                                        name="moon"
                                        size={20}
                                        color={theme === "dark" ? "#FFFFFF" : "#828282"}
                                    />
                                </Pressable>
                            </View>
                        </View>
                        {/* --------------------------------------------- */}

                        <Pressable onPress={()=>router.push({
                            pathname: "/changePassword"
                        })} style={styles.settingsBar}>
                            <Text style={styles.settingsText}>Change Password</Text>
                            <Ionicons size={24} name="chevron-forward-outline"></Ionicons>
                        </Pressable>
                        <Pressable
                            onPress={() => setMenuVisible(true)}
                            style={styles.settingsBar}>
                            <Text style={styles.settingsText}>Notification Setting</Text>
                            <Ionicons size={24} name="chevron-forward-outline"></Ionicons>
                        </Pressable>
                        <Pressable style={styles.settingsBar}>
                            <Text style={styles.settingsText}>Delivery Address</Text>
                            <Ionicons size={24} name="chevron-forward-outline"></Ionicons>
                        </Pressable>
                    </View>

                </View>

                {/* support */}
                <View style={styles.generalContainer}>
                    <Text style={styles.settingsTitle}>
                        Supports
                    </Text>

                    <View style={{ gap: 20 }}>

                        <Pressable style={styles.settingsBar}>
                            <Text style={styles.settingsText}>Security</Text>
                            <Ionicons size={24} name="chevron-forward-outline"></Ionicons>
                        </Pressable>
                        <Pressable style={styles.settingsBar}>
                            <Text style={styles.settingsText}>FAQs</Text>
                            <Ionicons size={24} name="chevron-forward-outline"></Ionicons>
                        </Pressable>
                        <Pressable style={styles.settingsBar}>
                            <Text style={styles.settingsText}>Help Center</Text>
                            <Ionicons size={24} name="chevron-forward-outline"></Ionicons>
                        </Pressable>
                    </View>
                </View>

                {/* rating + logout */}
                <View style={styles.bottonsContainer}>
                    <Pressable
                        style={[styles.Button, { backgroundColor: "#E9E9E9", borderColor: "#D5D5D5" }]}
                    >
                        <FontAwesome6
                            name="star"
                            size={24}
                            color="#272727"
                        />
                        <Text style={styles.settingsText}>Rating</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.Button, { backgroundColor: "#E930371A", borderColor: "#E93037" }]}
                    >
                        <Image
                            tintColor={"#E93037"}
                            style={{ width: 24, height: 24 }}
                            source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/logout-1.png" }}
                        ></Image>
                        <Text style={[styles.settingsText, { color: "#E93037" }]}>Log Out</Text>
                    </Pressable>
                </View>
            </View>

            <Text style={[styles.versionText, { textAlign: "center" }]}>Version: RS.0.0.1</Text>

            {/* notification settings modal */}
            <ModalNotificationSettings
                visible={menuVisible}
                onClose={() => setMenuVisible(false)}
            ></ModalNotificationSettings>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    userContainer: {
        backgroundColor: "#D76527",
        paddingTop: 15,
        paddingHorizontal: 10,
        zIndex: 0,
        paddingBottom: 40
    },
    profileTitle: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        marginBottom: 40
    },
    userInfo: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    pointsContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: "#06A3161A",
        borderWidth: 1,
        borderColor: "#06A31680",
        borderRadius: 10,
        gap: 6,
        width: "45%"

    },
    cardsContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: "#06A3161A",
        borderWidth: 1,
        borderColor: "#FFA92780",
        borderRadius: 10,
        gap: 6,
        width: "45%"
    },
    pointImage: {
        width: 52,
        height: 30,
        marginHorizontal: "auto"
    },
    giftCardImage: {
        width: 30,
        height: 30,
        marginHorizontal: "auto"
    },
    pointsTitle: {
        color: "#272727",
        fontSize: 18,
        fontWeight: "700"
    },
    parentContainer: {
        flexDirection: "row",
        gap: 20,
        justifyContent: "center",
        paddingVertical: 20,
        zIndex: 1,
        marginTop: -20,
        backgroundColor: "#F5F5F5",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    }, versionText: {
        fontSize: 14,
        fontWeight: "500",
        marginVertical: 20,
        color: "#D76527",
    }, settingsTitle: {
        color: "#828282",
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 20,
    }, generalContainer: {
        padding: 16,
        borderRadius: 10,
        backgroundColor: "#E9E9E9"
    },
    settingsText: {
        fontSize: 16,
        fontWeight: "500"
    },
    language: {
        borderWidth: 1,
        borderColor: "#ADADAD",
        paddingVertical: 6,
        paddingHorizontal: 8,
        flexDirection: "row",
        gap: 13,
        alignItems: "center",
        borderRadius: 6,
    }, container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    toggleContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#D5D5D5",
        borderRadius: 50,
        padding: 3,
    },
    iconButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    activeButton: {
        backgroundColor: "#D76527",
    },
    settingsBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    Button: {
        borderWidth: 1,
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 10,
        flexDirection: "row",
        gap: 6,
        justifyContent: "center",
        alignItems: "center",
        width: "45%"
    },
    bottonsContainer: {
        flexDirection: "row",
        gap: 20,
        justifyContent: "space-between"
    }
})