import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "./PrimaryButton";

export default function BookingForm() {

    const [branch, setBranch] = useState("");
    const [guest, setGuest] = useState(2);
    const [date, setDate] = useState(new Date());
    const [showDate, setShowDate] = useState(false);
    const [time, setTime] = useState(new Date());
    const [showTime, setShowTime] = useState(false);
    const now = new Date();



    return (
        <View style={styles.formContainer}>

            <Text style={styles.text}>Name</Text>
            <TextInput style={styles.inputContainer}
                placeholder="Full Name"
                placeholderTextColor={"#E9E9E9"}
            ></TextInput>

            <Text style={styles.text}>Email</Text>
            <TextInput style={styles.inputContainer}
                placeholder="Email Address"
                placeholderTextColor={"#E9E9E9"}
            ></TextInput>

            <Text style={styles.text}>Phone</Text>
            <TextInput
                style={styles.inputContainer}
                placeholder="Phone number"
                placeholderTextColor={"#E9E9E9"}
            ></TextInput>

            <Text style={styles.text}>Branch</Text>
            <View
                style={styles.pickerContainer}
            >
                <Picker
                    selectedValue={branch}
                    onValueChange={(value) => setBranch(value)}
                    style={{ color: "#E9E9E9" }}
                    dropdownIconColor="#E9E9E9"

                >
                    <Picker.Item label="Select Branch" value="" />
                    <Picker.Item label="Mirpur 10" value="Mirpur 10" />
                    <Picker.Item label="Mirpur 1" value="Mirpur 1" />
                    <Picker.Item label="Dhanmondi" value="Dhanmondi" />
                    <Picker.Item label="Gulshan" value="Gulshan" />
                </Picker>
            </View>

            <View style={styles.dateTimeContainer}>
                <View>
                    <Text style={styles.text}>Date</Text>
                    <Pressable onPress={() => setShowDate(true)} style={styles.inputContainer}>
                        <Text style={{ color: "#E9E9E9" }}>Select Date</Text>
                        <Image style={{ width: 18, height: 18, tintColor: "#ADADAD" }} source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/calendar-2.png" }}></Image>
                    </Pressable>
                </View>
                <Image style={{ width: 10, height: 2, tintColor: "#575757" }} source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/Vector-3053.png" }}></Image>
                <View>
                    <Text style={styles.text}>Time</Text>
                    <Pressable onPress={() => { setShowTime(true) }} style={styles.inputContainer}>
                        <Text style={{ color: "#E9E9E9" }}>Select Time</Text>
                        <Image style={{ width: 18, height: 18, tintColor: "#ADADAD" }} source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/clock.png" }}></Image>
                    </Pressable>
                </View>
            </View>

            <Text style={styles.text}>Guest count</Text>
            <View
                style={styles.pickerContainer}
            >
                <Picker
                    selectedValue={guest}
                    onValueChange={(value) => setGuest(value)}
                    style={{ color: "#E9E9E9" }}
                    dropdownIconColor="#E9E9E9"

                >
                    <Picker.Item label="Guest Number" value={0} />
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={2} />
                    <Picker.Item label="3" value={3} />
                    <Picker.Item label="4" value={4} />
                </Picker>
            </View>
            <PrimaryButton label={"Booking Now"}></PrimaryButton>

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
                    onChange={(event: any, selectedTime?: Date) => {
                        setShowTime(false);

                        if (!selectedTime) return;

                        const isToday = date.toDateString() === now.toDateString();

                        if (isToday && selectedTime < now) {
                            alert("Invalid Time, " + "Please select a future time.");
                            return;
                        }

                        if (selectedTime) {
                            setTime(selectedTime);
                        }
                    }}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        padding: 20,
        borderWidth: 1,
        borderColor: "#272727",
        borderRadius: 10,
        marginBottom: 20

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
        marginBottom: 20
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: "#575757",
        borderRadius: 38,
        marginBottom: 20,
        height: 44,
        overflow: "hidden",
        justifyContent: "center",
        paddingHorizontal: 16
    },
    dateTimeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 4
    }
})