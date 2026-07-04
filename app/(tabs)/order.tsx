import Header from "@/components/Header";
import { useAppSelector } from "@/store/hooks";
import { useMemo } from "react";
import { ScrollView, Text, View, StyleSheet, FlatList } from "react-native";
import { OrderStatus } from "@/features/order/orderSlice";

type Props = {
    id: string;
    status: OrderStatus;
}[];

export default function Order() {

    const orderStatuses: Props = [
        { id: "1", status: "pending" },
        { id: "2", status: "preparing" },
        { id: "3", status: "on_the_way" },
        { id: "4", status: "delivered" },
        { id: "5", status: "cancelled" },

    ]

    const orderData = useAppSelector(s => s.order.items);
    const shipping = useMemo(() => {
        return (orderData.filter(order => order.tracking.outForDelivery === true)).length;
    }, [orderData])
    console.log(orderData);


    return (
        <ScrollView>
            <View style={styles.header}>
                <Header count={shipping} page={"orderstatus"}></Header>
            </View>
            <View>
                <FlatList
                    data={orderStatuses}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={(item) => <View>
                        <Text>{item.item.status}</Text>
                    </View>}
                ></FlatList>
            </View>
            <Text style={{ marginTop: 300, textAlign: "center" }}>Order</Text>
        </ScrollView>
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
})