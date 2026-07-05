import Header from "@/components/Header";
import { OrderStatus } from "@/features/order/orderSlice";
import { useAppSelector } from "@/store/hooks";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

type Props = {
    id: string;
    title: string;
    status: OrderStatus;
    icon: string;
}[];

const orderStatuses: Props = [
    { id: "1", title: "All Order", status: "any", icon: "https://d.hs-bd.com/wp-content/uploads/2026/07/Order.png" },
    { id: "2", title: "Peding", status: "pending", icon: "https://d.hs-bd.com/wp-content/uploads/2026/07/wallet.png" },
    { id: "3", title: "On The way", status: "on_the_way", icon: "https://d.hs-bd.com/wp-content/uploads/2026/07/Shipping-Car-time.png" },
    { id: "4", title: "Delivered", status: "delivered", icon: "https://d.hs-bd.com/wp-content/uploads/2026/07/Delivered.png" },
    { id: "5", title: "Cancelled", status: "cancelled", icon: "https://d.hs-bd.com/wp-content/uploads/2026/07/Cross-square.png" },

]

export const formatOrderDate = (dateString: string) => {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    const time = date
        .toLocaleString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        })
        .replace(" AM", "am")
        .replace(" PM", "pm");

    return `${day}, ${month} ${year} (${time})`;
};

export default function Order() {

    const [selected, setSelected] = useState<string>("1");
    const [selectedStatus, setSelectedStatus] = useState<(typeof orderStatuses)[number] | undefined>(undefined);


    const orderData = useAppSelector(s => s.order.items);
    const shipping = useMemo(() => {
        return (orderData.filter(order => order.tracking.outForDelivery === true)).length;
    }, [orderData])


    useEffect(() => {
        const theStatus = orderStatuses.find((o) => o.id === selected);
        setSelectedStatus(theStatus);
    }, [selected])

    return (
        <View>
            <View style={styles.header}>
                <Header count={shipping} page="orderstatus" />
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                <FlatList
                    data={orderData}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 200 }}
                    ListHeaderComponent={
                        <>

                            <View style={{ marginVertical: 20 }}>
                                <FlatList
                                    horizontal
                                    data={orderStatuses}
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => {
                                        const isSelected = item.id === selected;

                                        return (
                                            <Pressable
                                                onPress={() => setSelected(item.id)}
                                                style={styles.statusListContainer}
                                            >
                                                <Image
                                                    source={{ uri: item.icon }}
                                                    style={{ width: 24, height: 24 }}
                                                    tintColor={isSelected ? "#D76527" : "#272727"}
                                                />

                                                <Text
                                                    style={{
                                                        fontSize: 10,
                                                        fontWeight: "500",
                                                        color: isSelected
                                                            ? "#D76527"
                                                            : "#575757",
                                                    }}
                                                >
                                                    {item.title}
                                                </Text>
                                            </Pressable>
                                        );
                                    }}
                                />
                            </View>

                            <Text
                                style={{
                                    fontSize: 22,
                                    fontWeight: "700",
                                    color: "#1D1D1D",
                                    marginBottom: 10,
                                }}
                            >
                                {selectedStatus?.title}
                            </Text>
                        </>
                    }
                    renderItem={({ item: order }) => (
                        <View style={{ padding: 16 }}>
                            {/* Order Header */}

                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    borderBottomWidth: 1,
                                    borderBottomColor: "#828282",
                                    paddingBottom: 16,
                                    marginBottom: 16,
                                }}
                            >
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: "600",
                                            color: "#272727",
                                        }}
                                    >
                                        Order ID: #{order.id}
                                    </Text>

                                    <Text
                                        style={{
                                            fontSize: 12,
                                            fontWeight: "500",
                                            color: "#828282",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontWeight: "700",
                                                color: "#575757",
                                            }}
                                        >
                                            Order Date:{" "}
                                        </Text>

                                        {formatOrderDate(order.createdAt)}
                                    </Text>
                                </View>

                                <Pressable
                                    onPress={() => router.push({
                                        pathname: "/orderDetails",
                                        params: {
                                            id: order.id
                                        }
                                    })}
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: "500",
                                            color: "#D76527",
                                        }}
                                    >
                                        Details
                                    </Text>

                                    <Ionicons
                                        name="chevron-forward-outline"
                                        size={24}
                                        color="#D76527"
                                    />
                                </Pressable>
                            </View>

                            {/* Products */}

                            {order.items.map((product, index) => (
                                <View key={product.id}>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            gap: 10,
                                        }}
                                    >
                                        <Image
                                            source={{ uri: product.image }}
                                            style={{
                                                width: 90,
                                                height: 90,
                                                borderRadius: 10,
                                            }}
                                        />

                                        <View style={{ flex: 1 }}>
                                            <Text
                                                style={{
                                                    fontSize: 14,
                                                    fontWeight: "600",
                                                    color: "#272727",
                                                }}
                                            >
                                                {product.title}
                                            </Text>

                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    color: "#575757",
                                                }}
                                            >
                                                Qty: {product.quantity}
                                            </Text>

                                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                                <View
                                                    style={{
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                        gap: 4,
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            fontSize: 16,
                                                            fontWeight: "700",
                                                        }}
                                                    >
                                                        ${product.price}
                                                    </Text>

                                                    <Text
                                                        style={{
                                                            fontSize: 12,
                                                            color: "#ADADAD",
                                                            textDecorationLine: "line-through",
                                                        }}
                                                    >
                                                        ${product.oldPrice}
                                                    </Text>
                                                </View>
                                                <View style={{ backgroundColor: "#EB94101A", paddingHorizontal: 6, paddingVertical: 4, borderRadius: 40 }}>
                                                    <Text style={{ fontSize: 12, fontWeight: "500", color: "#EB9410" }}>{order.paymentStatus}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>

                                    {index !== order.items.length - 1 && (
                                        <View
                                            style={{
                                                height: 1,
                                                backgroundColor: "#D5D5D5",
                                                marginVertical: 16,
                                            }}
                                        />
                                    )}
                                </View>
                            ))}
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 25,
        marginHorizontal: 10,
    },
    statusListContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
        backgroundColor: "#D765271A",
        borderRadius: 10
    }
})