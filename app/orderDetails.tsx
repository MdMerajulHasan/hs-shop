import Header from "@/components/Header";
import { useAppSelector } from "@/store/hooks";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { formatOrderDate } from "@/app/(tabs)/order";
import { useMemo } from "react";

export default function OrderDetails() {

    const { id } = useLocalSearchParams<{ id: string }>();

    const orderData = useAppSelector((data) => data.order.items.find(o => o.id === id));
    

    if (!orderData) {
        return (
            <View style={{ padding: 20 }}>
                <Text>Order not found.</Text>
            </View>
        );
    }

    return (
        <View style={{ paddingHorizontal: 10 }}>
            <View style={{ marginTop: 25, marginBottom: 20 }}>
                <Header id={id} page="orderDetails" />
            </View>

            <View>
                <Text>Order ID: #{id}</Text>
                <Text>{formatOrderDate(orderData.createdAt)}</Text>
                <Text>{}</Text>
            </View>
        </View>
    );

}