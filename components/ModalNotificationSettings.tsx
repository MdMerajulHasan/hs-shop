import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useState } from "react";
import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
import Header from "./Header";

type Props = {
    onClose: () => void;
};

export default function ModalNotificationSettings({ onClose }: Props) {
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
        <View
            style={{ paddingHorizontal: 20, flex: 1 }}
        >
            {/* Header */}
            <View style={styles.header}>
                <Header onClose={onClose} isModal={true} page="notificationsettings"></Header>
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

            <BottomSheetScrollView
                contentContainerStyle={{
                    gap: 20,
                    marginTop: 20,
                    flex: 1
                }}
                showsVerticalScrollIndicator={false}
            >

                {options.map((item) => {
                    const selected = selectedOptions.includes(item);

                    return (
                        <Pressable
                            key={item}
                            onPress={() => toggleOption(item)}
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
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

            </BottomSheetScrollView>
        </View>
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
})