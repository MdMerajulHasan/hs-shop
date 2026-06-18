import { useState } from "react";
import {
    Modal,
    View,
    Text,
    Pressable,
    Switch,
    Dimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const { width: Width } = Dimensions.get("screen");

type Props = {
    visible: boolean;
    onClose: () => void;
};

export default function ModalNotificationSettings({
    visible,
    onClose,
}: Props) {
    const [isEnabledNoti, setIsEnabledNoti] = useState(true);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const options = [
        "Order & Delivery Updates",
        "Exclusive Offers & Promotions",
        "Reservation Reminders",
        "Loyalty Rewards & Points Alerts",
        "Security & Account Notifications",
    ];

    const toggleOption = (item: string) => {
        setSelectedOptions((prev) =>
            prev.includes(item)
                ? prev.filter((i) => i !== item)
                : [...prev, item]
        );
    };

    return (
        <Modal
            visible={visible}
            transparent
            animationType="none"
            statusBarTranslucent
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: "rgba(0,0,0,0.4)",
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
                    {/* Header */}
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Pressable
                            onPress={onClose}
                            style={{
                                padding: 8,
                                borderWidth: 1,
                                borderColor: "#D5D5D5",
                                borderRadius: 30,
                            }}
                        >
                            <Ionicons
                                name="arrow-back"
                                size={24}
                                color="#272727"
                            />
                        </Pressable>

                        <Text
                            style={{
                                flex: 1,
                                marginLeft: 16,
                                fontSize: 18,
                                fontWeight: "500",
                            }}
                        >
                            Notification Settings
                        </Text>

                        <Switch
                            value={isEnabledNoti}
                            onValueChange={() => setIsEnabledNoti(!isEnabledNoti)}
                            trackColor={{ false: "#828282", true: "#D76527" }}
                            thumbColor={"#F5F5F5"}
                            style={{
                                transform: [
                                    { scaleX: 1.5 },
                                    { scaleY: 1.5 },
                                ],
                            }}
                        />
                    </View>

                    {options.map((item) => {
                        const selected = selectedOptions.includes(item);

                        return (
                            <Pressable
                                key={item}
                                onPress={() => toggleOption(item)}
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    paddingVertical: 14,
                                }}
                            >
                                <Text>{item}</Text>

                                <View
                                    style={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: 12,
                                        borderWidth: 2,
                                        borderColor: selected ? "#D76527" : "#BDBDBD",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    {selected && (
                                        <View
                                            style={{
                                                width: 12,
                                                height: 12,
                                                borderRadius: 6,
                                                backgroundColor: "#D76527",
                                            }}
                                        />
                                    )}
                                </View>
                            </Pressable>
                        );
                    })}
                </View>
            </View>
        </Modal>
    );
}