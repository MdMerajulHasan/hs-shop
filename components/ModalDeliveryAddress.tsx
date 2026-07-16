import { useAppSelector } from "@/store/hooks";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./Header";
import PrimaryButton from "./PrimaryButton";
import PreviousAddress from "./PreviousAddress";
import AddNewAddress from "./AddNewAddress";

type Props = {
    onClose: () => void;
}

export default function ModalDeliveryAddress({ onClose }: Props) {

    const addresses = useAppSelector(s => s.address.items);
    const defaultAddress = useMemo(() => {
        return addresses.find(address => address.isDefault === true)
    }, [addresses]);

    const [selected, setSelected] = useState(addresses[0]?.id);
    const [addressId, setAddressId] = useState(defaultAddress?.tagId);

    return (
        <View style={{ paddingBottom: 60 }}>
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

                {/* Previous Addresses */}
                <PreviousAddress selected={selected} setSelected={setSelected} setAddressId={setAddressId} addresses={addresses}></PreviousAddress>
                <AddNewAddress setAddressId={setAddressId} addresses={addresses}></AddNewAddress>
                {/* <PreviousAddress />
                    
                <AddNewAddress /> */}
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