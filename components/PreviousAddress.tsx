import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View, StyleSheet } from "react-native";
import { Address } from "@/features/address/addressSlice";

type Props = {
    addresses: Address[];
    setAddressId: (id: string) => void;
    selected: string;
    setSelected: (id: string) => void;
}

export default function PreviousAddress({ addresses, setAddressId, setSelected, selected }: Props) {
    useEffect(() => {
        if (addresses.length > 0) {
            setSelected(addresses[0].id);
            setAddressId(addresses[0].tagId); // or addresses[0].id if that's what you need
        }
    }, [addresses, setAddressId, setSelected]);


    if (addresses.length <= 0) {
        return null;
    }
    return (
        <View style={styles.addressContainer}>
            <View style={{ marginBottom: 20 }}>
                <Text style={styles.listTitle}>Select Shipping Address</Text>
            </View>
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={addresses}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    const isSelected = selected === item.id;
                    return (<Pressable
                        onPress={() => {
                            setSelected(item.id);
                            setAddressId(item.tagId)
                        }}
                        style={[styles.addressCard, { borderColor: isSelected ? "#D76527" : "#E9E9E9", backgroundColor: isSelected ? "#FBF0E9" : "#FEFEFE" }]}>
                        <Ionicons
                            color={isSelected ? "#D76527" : "#ADADAD"}
                            style={{ marginHorizontal: "auto" }}
                            size={24} name="checkmark-circle">
                        </Ionicons>
                        {
                            item.isDefault ? <Text style={[styles.addressType, { color: isSelected ? "#D76527" : "#1D1D1D" }]}>Last Delivery</Text> :
                                <Text style={[styles.addressType, { color: isSelected ? "#D76527" : "#1D1D1D" }]}>{item.tagId}
                                </Text>
                        }
                        <Text style={styles.address}>{item.address}</Text>
                    </Pressable>)
                }}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    addressContainer: {
        marginHorizontal: 10,
        borderRadius: 8,
        backgroundColor: "#F5F5F5",
        borderWidth: 2,
        borderColor: "#CED2CE",
        padding: 20,
        marginTop: 40,
    },
    listTitle: {
        color: "#1D1D1D",
        fontSize: 22,
        fontWeight: "700",
        marginTop: 20
    },
    addressCard: {
        maxWidth: 140,
        borderWidth: 1,
        borderColor: "#E9E9E9",
        borderRadius: 8,
        gap: 4,
        padding: 8,
        marginRight: 10
    },
    addressType: {
        fontSize: 14,
        fontWeight: "600",
        textAlign: "center",
    },
    address: {
        color: "#828282",
        fontSize: 10,
        fontWeight: "400",
        textAlign: "center",
    },
})