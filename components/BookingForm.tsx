import { useAppSelector } from "@/store/hooks";
import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View, Modal } from "react-native";
import Toast from "react-native-toast-message";
import BranchList from "./BranchList";
import PrimaryButton from "./PrimaryButton";


export default function BookingForm() {
    const [branchModalVisible, setBranchModalVisible] = useState(false);
    const userData = useAppSelector((state) => state.auth.currentUser);
    const [name, setName] = useState(userData?.name); // Replace with logged-in user's name
    const email = userData?.email; // Replace with logged-in user's email
    const [phone, setPhone] = useState("");
    const [guest, setGuest] = useState(2);
    const [date, setDate] = useState(new Date());
    const [showDate, setShowDate] = useState(false);
    const [time, setTime] = useState(new Date());
    const [showTime, setShowTime] = useState(false);
    const branch = useAppSelector((state) => state.branch.selectedBranch);


    const currentDate = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
    };

    const currentTime = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    }).format(time);

    const parseTime = (time: string) => {
        const [hourMinute, period] = time.split(" ");
        let [hour, minute] = hourMinute.split(":").map(Number);

        if (period === "PM" && hour !== 12) hour += 12;
        if (period === "AM" && hour === 12) hour = 0;

        return { hour, minute };
    };


    const getBranchHours = () => {
        if (!branch) return null;

        const day = date.getDay();

        switch (day) {
            case 0:
                return branch.hours.sunday;

            case 6:
                return branch.hours.saturday;

            default:
                return branch.hours.weekday;
        }
    };

    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Booking Inprogress',
            text2: 'You will get an email soon!',
            position: "bottom",
        });
    }

    const handleBooking = () => {
        if (!name?.trim()) {
            alert("Name is required.");
            return;
        }

        if (!phone.trim()) {
            alert("Phone number is required.");
            return;
        }

        if (!branch) {
            alert("Please select a branch.");
            return;
        }

        if (!time) {
            alert("Please select a time.");
            return;
        }
        showToast();
    };
    return (
        <>
            <View style={styles.formContainer}>

                <Text style={styles.text}>Name*</Text>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Full Name"
                    placeholderTextColor="#E9E9E9"
                    value={name}
                    onChangeText={setName}
                />

                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Email Address"
                    placeholderTextColor="#E9E9E9"
                    defaultValue={email}
                    readOnly
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.text}>Phone*</Text>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Phone Number"
                    placeholderTextColor="#E9E9E9"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />

                <Text style={styles.text}>Branch*</Text>
                <Pressable
                    style={[styles.pickerContainer, {
                        paddingVertical: 10,
                        paddingHorizontal: 14,
                        height: "auto",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        alignItems: "center",
                    }]}
                    onPress={() => setBranchModalVisible(true)}
                >
                    <Text
                        style={{
                            color: branch ? "#E9E9E9" : "#8F8F8F",
                            fontSize: 16,
                        }}
                    >
                        {branch?.name ?? "Select Branch"}
                    </Text>

                    <Ionicons
                        name="chevron-down"
                        size={20}
                        color="#E9E9E9"
                    />
                </Pressable>
                {branch && (
                    <Text
                        style={{
                            color: "#ADADAD",
                            marginTop: -12,
                            marginBottom: 16,
                            textAlign: "center"
                        }}
                    >
                        Open Hours: {getBranchHours()}
                    </Text>
                )}

                <View style={styles.dateTimeContainer}>
                    <View>
                        <Text style={styles.text}>Date</Text>
                        <Pressable onPress={() => setShowDate(true)} style={styles.inputContainer}>
                            <Text style={{ color: "#E9E9E9" }}>{currentDate.day + "-" + currentDate.month + "-" + currentDate.year}</Text>
                            <Image style={{ width: 18, height: 18, tintColor: "#ADADAD" }} source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/calendar-2.png" }}></Image>
                        </Pressable>
                    </View>
                    <Image style={{ width: 10, height: 2, tintColor: "#575757" }} source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/Vector-3053.png" }}></Image>
                    <View>
                        <Text style={styles.text}>Time*</Text>
                        <Pressable disabled={!branch} onPress={() => { setShowTime(true) }} style={[styles.inputContainer, { opacity: branch ? 1 : 0.5, }]}>
                            <Text style={{ color: "#E9E9E9" }}>{currentTime}</Text>
                            <Image style={{ width: 18, height: 18, tintColor: "#ADADAD" }} source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/clock.png" }}></Image>
                        </Pressable>
                    </View>
                </View>

                <Text style={styles.text}>Guest count</Text>
                <View
                    style={[styles.pickerContainer, { justifyContent: "center", }]}
                >
                    <Picker
                        selectedValue={guest}
                        onValueChange={(value) => setGuest(value)}
                        style={{ color: "#E9E9E9" }}
                        dropdownIconColor="#E9E9E9"
                    >
                        <Picker.Item label="Guest Number" value={0} color="#E9E9E9" />
                        <Picker.Item label="1" value={1} color="#E9E9E9" />
                        <Picker.Item label="2" value={2} color="#E9E9E9" />
                        <Picker.Item label="3" value={3} color="#E9E9E9" />
                        <Picker.Item label="4" value={4} color="#E9E9E9" />
                    </Picker>
                </View>
                <Pressable
                    onPress={handleBooking}
                >
                    <PrimaryButton label={"Booking Now"}></PrimaryButton>
                </Pressable>

                {showDate && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        minimumDate={new Date()}
                        onChange={(event, selectedDate) => {
                            setShowDate(false);

                            if (selectedDate) {
                                setDate(selectedDate);
                            }
                        }}
                    />
                )}
                {showTime && (
                    <DateTimePicker
                        value={time}
                        mode="time"
                        is24Hour={false}
                        onChange={(event, selectedTime) => {
                            setShowTime(false);

                            if (!selectedTime) return;

                            // Branch must be selected
                            if (!branch) {
                                alert("Please select a branch first.");
                                return;
                            }

                            const hours = getBranchHours();

                            // Branch closed
                            if (hours === "Close") {
                                alert("This branch is closed on the selected day.");
                                return;
                            }

                            if (!hours) return;

                            const now = new Date();

                            const selectedDateTime = new Date(date);
                            selectedDateTime.setHours(
                                selectedTime.getHours(),
                                selectedTime.getMinutes(),
                                0,
                                0
                            );

                            // Prevent past time today
                            if (
                                date.toDateString() === now.toDateString() &&
                                selectedDateTime < now
                            ) {
                                alert("Please select a future time.");
                                return;
                            }

                            const [open, close] = hours.split(" - ");

                            const openTime = parseTime(open);
                            const closeTime = parseTime(close);

                            const selectedMinutes =
                                selectedTime.getHours() * 60 +
                                selectedTime.getMinutes();

                            const openMinutes =
                                openTime.hour * 60 +
                                openTime.minute;

                            const closeMinutes =
                                closeTime.hour * 60 +
                                closeTime.minute;

                            if (
                                selectedMinutes < openMinutes ||
                                selectedMinutes > closeMinutes
                            ) {
                                alert(`Branch hours are ${open} - ${close}`);
                                return;
                            }

                            setTime(selectedTime);
                        }}
                    />
                )}
                <Toast></Toast>
            </View>
            <Modal
                visible={branchModalVisible}
                animationType="slide"
                transparent
                statusBarTranslucent={true}
                navigationBarTranslucent={true}
                onRequestClose={() => setBranchModalVisible(false)}
            >
                <Pressable
                    style={styles.modalOverlay}
                    onPress={() => setBranchModalVisible(false)}
                >
                    <Pressable
                        style={styles.modalContainer}
                        onPress={() => { setBranchModalVisible(false) }}
                    >
                        <BranchList
                            onSelect={() => {
                                setBranchModalVisible(false);
                            }}

                        />
                    </Pressable>
                </Pressable>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        padding: 20,
        borderWidth: 1,
        borderColor: "#272727",
        borderRadius: 10,
        marginBottom: 20,
        flex: 1
    },
    text: {
        fontSize: 16,
        fontWeight: "500",
        color: "#ADADAD",
        marginBottom: 4,
        textAlign: 'left'
    },
    inputContainer: {
        flexDirection: 'row',
        gap: 1,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#575757",
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 38,
        color: "#E9E9E9",
        fontSize: 16,
        fontWeight: "400",
        marginBottom: 20,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: "#575757",
        borderRadius: 38,
        marginBottom: 20,
        height: 44,
        overflow: "hidden",
        paddingHorizontal: 10
    },
    dateTimeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "flex-end",

    },

    modalContainer: {
        borderBottomColor: "#FFF",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingTop: 12,
    },
})