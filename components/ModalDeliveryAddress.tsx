import { View, StyleSheet } from "react-native";
import Header from "./Header";
import PrimaryButton from "./PrimaryButton";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

type Props = {
    onClose: () => void;
}

export default function ModalDeliveryAddress({ onClose }: Props) {
    return (
        <View style={{paddingBottom: 60}}>
            <View style={styles.header}>
                <Header
                    page="deliveryaddress"
                    isModal
                    onClose={onClose}
                />
            </View>
            
            <BottomSheetScrollView
                contentContainerStyle={{
                    paddingBottom: 30,
                }}
                showsVerticalScrollIndicator={false}
            >
                {/* <PreviousAddress />

                <AddNewAddress /> */}

                <View style={{ margin: 16 }}>
                    <PrimaryButton label="Save" />
                </View>
            </BottomSheetScrollView>
        </View>
    );
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
})