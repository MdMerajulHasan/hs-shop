import { View, StyleSheet } from "react-native";
import MenuFormTitle from "./MenuFormTitle";
import BookingForm from "./BookingForm";

export default function BookYourTable(){
    return (
        <View style={[styles.bookingContainer,{borderRadius: 10, paddingTop: 20, marginBottom: 40}]}>
            <MenuFormTitle label={"Book Your Table"}></MenuFormTitle>
            <BookingForm></BookingForm>
        </View>
    )
}

const styles= StyleSheet.create({
    bookingContainer: {
        backgroundColor: "#070C12",
        paddingHorizontal: 20
    }
})