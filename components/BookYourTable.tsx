import { StyleSheet, View } from "react-native";
import BookingForm from "./BookingForm";
import MenuFormTitle from "./MenuFormTitle";

export default function BookYourTable(){
    return (
        <View style={[styles.bookingContainer,{ paddingTop: 20, marginBottom: 40}]}>
            <MenuFormTitle label={"Book Your Table"}></MenuFormTitle>
            <BookingForm></BookingForm>
        </View>
    )
}

const styles= StyleSheet.create({
    bookingContainer: {
        paddingHorizontal: 20
    }
})