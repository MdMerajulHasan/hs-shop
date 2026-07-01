import AddNewAddress from "@/components/AddNewAddress";
import Header from "@/components/Header";
import PreviousAddress from "@/components/PreviousAddress";
import PrimaryButton from "@/components/PrimaryButton";
import { useAppSelector } from "@/store/hooks";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const cartData = [
    {
        id: 1,
        name: "Delicious And Crispy Potato French Fries",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
        price: 18.88,
        oldPrice: 32.88,
        rating: 4.9,
        discount: 54,
        isFavorite: false
    },
    {
        id: 2,
        name: "Classic Cheese Pizza",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection1.png",
        price: 15.99,
        oldPrice: 24.99,
        rating: 4.8,
        discount: 36,
        isFavorite: true
    },
    {
        id: 3,
        name: "Spicy Chicken Burger",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
        price: 12.50,
        oldPrice: 18.50,
        rating: 4.7,
        discount: 32,
        isFavorite: false
    },
    {
        id: 4,
        name: "Delicious And Crispy Potato French Fries",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection1.png",
        price: 18.88,
        oldPrice: 32.88,
        rating: 4.9,
        discount: 54,
        isFavorite: false
    },
]


const initialAddresses = [
    {
        id: 1,
        name: "Bayzid Islam",
        address: "House - 18, Avenue - 1, Block - C, House - 18, Sector - 2, Mirpur, Dhaka, Avenue 1, Dhaka 1216",
        postcode: "1216",
        phone: "+880 1737 880513",
        badge: {
            type: "home",
            text: "Home"
        },
        isDefault: true
    },
    {
        id: 2,
        name: "Bayzid Islam",
        address: "House - 18, Avenue - 1, Block - C, House - 18, Sector - 2, Mirpur, Dhaka, Avenue 1, Dhaka 1216",
        postcode: "1216",
        phone: "+880 1737 880513",
        badge: {
            type: "home2",
            text: "Home"
        },
        isDefault: false
    },
    {
        id: 3,
        name: "Bayzid Islam",
        address: "House - 18, Avenue - 1, Block - C, House - 18, Sector - 2, Mirpur, Dhaka, Avenue 1, Dhaka 1216",
        postcode: "1216",
        phone: "+880 1737 880513",
        badge: {
            type: "office",
            text: "Office"
        },
        isDefault: false
    }
]

const deliVeriTimes = [
    {
        id: 1,
        label: "Now",
    },
    {
        id: 2,
        label: "Next Hours",
    },
    {
        id: 3,
        label: "Custom",
    }

]

const paymentMethod = [
    { id: 1, type: "bkash", title: "BKash", image: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/bkash.png" } },
    { id: 2, type: "nagad", title: "Nagad", image: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/nogod-scaled.png" } },
    { id: 3, type: "rocket", title: "Rocket", image: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/rocket.png" } },
    { id: 4, type: "upay", title: "Upay", image: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/upay-scaled.png" } },
    { id: 5, type: "card", title: "Visa Card", image: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/card.png" } },
]

export default function PlaceOrder() {

    const [orderNote, setOrderNote] = useState("");
    const [focusedTime, setFocusedTime] = useState(0);
    const [time, setTime] = useState(new Date());
    const [showTime, setShowTime] = useState(false);
    const [date, setDate] = useState(new Date());
    const [showDate, setShowDate] = useState(false);
    const [cashOn, setCashOn] = useState(true);
    const [payTypeId, setPayTypeId] = useState(0);
    const [payType, setPayType] = useState("");

    const orderedItems = useAppSelector((state) => state.cart.items);


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

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ }}
            >
                {/* header section */}
                <View style={styles.header}>
                    <Header count={orderedItems.length} page={"placeorder"}></Header>
                </View>
                {/* products / ordered item list section */}
                <View style={styles.orderedItemsList}>
                    <Text style={styles.listTitle}>Products</Text>
                    <View style={styles.itemContainer}>
                        {
                            orderedItems.map((item, index) => <View key={item.id} style={styles.item}>
                                <View>
                                    <Text style={styles.itemTitle}>{item.name}</Text>
                                    <Text style={styles.itemTitle}>{item.quantity} X 1</Text>
                                </View>
                                <Text style={styles.itemPrice}>${(item.quantity * item.price).toFixed(2)}</Text>
                            </View>)
                        }
                    </View>
                </View>
                {/* saved addresses section */}
                <PreviousAddress></PreviousAddress>
                {/* add a new address section */}
                <AddNewAddress></AddNewAddress>
                {/* custom / set delivery time section */}
                <View style={styles.formContainer}>
                    <Text style={styles.listTitle}>Custom Delivery Time</Text>
                    <View style={{ gap: 16, marginTop: 24 }}>
                        <View>
                            <FlatList
                                data={deliVeriTimes}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item, index }) => {
                                    const isSelected = item.id === focusedTime;

                                    return (
                                        <Pressable
                                            onPress={() => {
                                                setFocusedTime(item.id);
                                                setDate(new Date());
                                                setTime(new Date());
                                            }}
                                            style={[styles.tagListContainer, { backgroundColor: isSelected ? "#D7652733" : "#F5F5F5", borderColor: isSelected ? "" : '#FEFEFE', marginRight: 10 }]}
                                        >
                                            <View style={[{
                                                borderWidth: 2,
                                                borderColor: isSelected ? "#D76527" : "#828282",
                                                width: 24,
                                                height: 24,
                                                borderRadius: 50,
                                            }]}>
                                                {
                                                    isSelected &&
                                                    <View style={styles.radioButton}>

                                                    </View>
                                                }
                                            </View>
                                            <Text
                                                style={{ color: "#575757", fontSize: 14, fontWeight: "400" }}>
                                                {item.label}
                                            </Text>
                                        </Pressable>
                                    )
                                }}
                            >
                            </FlatList>
                        </View>
                        <View>
                            <View style={styles.dateTimeContainer}>
                                <View style={{ width: "50%" }}>
                                    <Text style={styles.text}>Date*</Text>
                                    <Pressable
                                        onPress={() => {
                                            if (focusedTime === 3) {
                                                setShowDate(true);
                                            }
                                        }} style={styles.inputContainer}>
                                        <Text style={{ color: "#575757" }}>
                                            {currentDate.day + "-" + currentDate.month + "-" + currentDate.year}
                                        </Text>
                                        <Image style={{ width: 18, height: 18, tintColor: "#575757" }} source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/calendar-2.png" }}></Image>
                                    </Pressable>
                                </View>
                                <View style={{ width: "50%" }}>
                                    <Text style={styles.text}>Time*</Text>
                                    <Pressable onPress={() => {
                                        if (!(focusedTime === 1)) {
                                            setShowTime(true)
                                        }
                                    }} style={styles.inputContainer}>
                                        <Text style={{ color: "#575757" }}>{currentTime}</Text>
                                        <Image style={{ width: 18, height: 18, tintColor: "#575757" }} source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/clock.png" }}></Image>
                                    </Pressable>
                                </View>
                            </View>
                            <View>
                                <Text style={[styles.inputTitle, { marginTop: 0 }]}>Order Notes<Text style={{ color: "#ADADAD" }}> (optional)</Text></Text>
                                <TextInput
                                    value={orderNote}
                                    multiline={true}
                                    numberOfLines={2}
                                    placeholder="Write text...."
                                    placeholderTextColor={"#828282"}
                                    onChangeText={(text: string) => setOrderNote(text)}
                                    style={[styles.inputField, { height: 90, borderRadius: 20, textAlignVertical: "top" }]}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginBottom: 50, marginHorizontal: 10 }}>
                    <Text style={[styles.listTitle]}>Payment Method</Text>
                    <View style={styles.cashOnContainer}>
                        <Pressable
                            onPress={() => {
                                setCashOn(!cashOn);
                                setPayTypeId(0);
                            }}
                            style={{ width: 24, height: 28, padding: 2 }}
                        >
                            <View style={[{
                                borderWidth: 2,
                                borderColor: cashOn ? "#D76527" : "#828282",
                                width: 24,
                                height: 24,
                                borderRadius: 50,
                            }]}>

                                {
                                    cashOn &&
                                    <View style={styles.radioButton}>

                                    </View>
                                }
                            </View>
                        </Pressable>
                        <View style={{ flex: 1, gap: 6, justifyContent: "flex-start", alignItems: "flex-start" }}>
                            <Text
                                style={{ color: "#404341", fontSize: 16, fontWeight: "600", textAlign: "left" }}>
                                Cash on delivery (Time 8-12 Hours)
                            </Text>
                            <Text style={{ color: "#7F8280", fontSize: 14, fontWeight: "400", textAlign: "left" }}>
                                Pay with cash upon delivery / পণ্য ডেলিভারির সময় নগদে মূল্য পরিশোধ
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                        }}
                    >
                        {paymentMethod.map((item) => {
                            const isSelected = item.id === payTypeId;

                            return (
                                <Pressable
                                    key={item.id}
                                    onPress={() => {
                                        setPayTypeId(item.id);
                                        setCashOn(false);
                                        setPayType(item.type);
                                    }}
                                    style={
                                        {
                                            width: item.type === "card" ? "100%" : "50%",
                                            borderRadius: 8,
                                            padding: 8
                                        }
                                    }
                                >
                                    <View style={[styles.tagListContainer, { borderColor: "#E9E9E9", backgroundColor: "#FEFEFE" }]}>
                                        <View
                                            style={{
                                                borderWidth: 2,
                                                borderColor: isSelected ? "#D76527" : "#828282",
                                                width: 24,
                                                height: 24,
                                                borderRadius: 50,
                                            }}
                                        >
                                            {isSelected && <View style={styles.radioButton} />}
                                        </View>

                                        <View style={{ flex: 1 }}>
                                            <Image
                                                style={{
                                                    height: 44,
                                                    width: "100%",
                                                }}
                                                source={item.image}
                                            />
                                        </View>
                                    </View>
                                </Pressable>
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
            <View
                style={{
                    borderBottomColor: "#0000",
                    borderColor: "#D5D5D5",
                    backgroundColor: "#F5F5F5",
                    borderWidth: 1,
                    marginTop: -20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}
            >
                <View style={{ paddingHorizontal: 10 }}>
                    <Pressable
                        style={{ paddingTop: 20, marginBottom: 10 }}>
                        <PrimaryButton label={"($59.28) Place Order"}></PrimaryButton>
                    </Pressable>
                </View>
            </View>
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
                    onChange={(event, selectedTime?: Date) => {
                        setShowTime(false);

                        if (!selectedTime) return;

                        const now = new Date();

                        const selectedDateTime = new Date(date);
                        selectedDateTime.setHours(
                            selectedTime.getHours(),
                            selectedTime.getMinutes(),
                            0,
                            0
                        );

                        const isToday =
                            date.toDateString() === now.toDateString();

                        if (isToday && selectedDateTime < now) {
                            alert("Invalid Time, Please select a future time.");
                            return;
                        }

                        setTime(selectedTime);
                    }}
                />
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 25,
        marginHorizontal: 10,
        marginBottom: 20
    },
    orderedItemsList: {
        padding: 20,
        marginTop: 27,
        borderWidth: 1,
        borderColor: "#D76527",
        backgroundColor: "#D765271A",
        marginHorizontal: 10,
        borderRadius: 10,
        gap: 16,
    },
    listTitle: {
        color: "#1D1D1D",
        fontSize: 22,
        fontWeight: "700",
        marginTop: 20
    },
    itemTitle: {
        color: "#272727",
        fontSize: 12,
        fontWeight: "400"
    },
    itemPrice: {
        color: "#272727",
        fontSize: 16,
        fontWeight: "600"
    },
    itemContainer: {
        gap: 20
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    formContainer: {
        borderWidth: 1,
        borderColor: "#CED2CE",
        borderRadius: 8,
        marginHorizontal: 10,
        padding: 20,
        marginTop: 16,
        marginBottom: 16
    },
    inputTitle: {
        color: "#575757",
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 4
    },
    inputField: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 56,
        backgroundColor: "#FEFEFE",
        borderWidth: 1,
        borderColor: "#D5D5D5",
    },
    radioButton: {
        width: 12,
        height: 12,
        backgroundColor: "#D76527",
        marginHorizontal: "auto",
        marginVertical: "auto",
        borderRadius: 50,
    },
    tagListContainer: {
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,

    },
    dateTimeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4
    },
    inputContainer: {
        flexDirection: 'row',
        gap: 1,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#D5D5D5",
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 38,
        color: "#575757",
        fontSize: 16,
        fontWeight: "400",
        marginBottom: 20,
        justifyContent: "space-between"
    },
    text: {
        fontSize: 16,
        fontWeight: "500",
        color: "#575757",
        marginBottom: 4,
        textAlign: 'left'
    },
    cashOnContainer: {
        flexDirection: "row",
        gap: 8,
        marginVertical: 20
    }
});