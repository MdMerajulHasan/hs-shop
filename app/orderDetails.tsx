import { formatOrderDate } from "@/app/(tabs)/order";
import Header from "@/components/Header";
import { useAppSelector } from "@/store/hooks";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, LayoutAnimation, Platform, Pressable, StyleSheet, Text, UIManager, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function OrderDetails() {

    const { id } = useLocalSearchParams<{ id: string }>();

    const orderData = useAppSelector((data) => data.order.items.find(o => o.id === id));
    const branch = useAppSelector(data => data.branch.items.find(b => b.id === orderData?.branchId));

    const [expandedProducts, setExpandedProducts] = useState(false);
    const [expandedSummary, setExpandedSummary] = useState(false);
    const email = useAppSelector(s => s.auth.currentUser?.email);

    const toggle = () => {
        LayoutAnimation.configureNext(
            LayoutAnimation.Presets.easeInEaseOut
        );

        setExpandedProducts(prev => !prev);
    };
    const toggleSummary = () => {
        LayoutAnimation.configureNext(
            LayoutAnimation.Presets.easeInEaseOut
        );

        setExpandedSummary(prev => !prev);
    };


    if (!orderData) {
        return (
            <View style={{ padding: 20 }}>
                <Text>Order not found.</Text>
            </View>
        );
    }

    const trackingSteps = [
        {
            title: "Order Confirmed",
            icon: "check",
            completed: !!orderData.tracking.confirmed,
            time: orderData.tracking.confirmed,
        },
        {
            title: "Preparing",
            icon: "package-variant-closed",
            completed: !!orderData.tracking.preparing,
            time: orderData.tracking.preparing,
        },
        {
            title: "Out Of Delivery",
            icon: "truck-fast",
            completed: !!orderData.tracking.outForDelivery,
            time: orderData.tracking.outForDelivery,
        },
        {
            title: "Delivered",
            icon: "hand-coin",
            completed: !!orderData.tracking.delivered,
            time: orderData.tracking.delivered,
        },
    ];

    return (
        <View style={{ paddingHorizontal: 10, paddingBottom: 200 }}>
            {/* navbar */}
            <View style={{ marginTop: 25, marginBottom: 20 }}>
                <Header id={id} page="orderDetails" />
            </View>

            <FlatList
                data={[orderData]}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 22, fontWeight: "700", color: "#1D1D1D" }}>Order ID: #{id}</Text>
                            <Text style={{ fontSize: 12, fontWeight: "500", color: "#828282" }}>{formatOrderDate(orderData.createdAt)}</Text>
                            {
                                branch && <Text style={{ fontSize: 16, fontWeight: "400", color: '#1D1D1D' }}>{branch.name}</Text>
                            }
                        </View>

                        <View style={{ padding: 20, borderRadius: 10, backgroundColor: "#F5F5F5" }}>
                            <Text style={{ fontSize: 22, fontWeight: "700", color: "#1D1D1D" }}>Order Tracking</Text>
                            <View style={{ marginTop: 20 }}>
                                {trackingSteps.map((step, index) => (
                                    <View
                                        key={step.title}
                                        style={{
                                            flexDirection: "row",
                                        }}
                                    >
                                        {/* Left Side */}
                                        <View
                                            style={{
                                                width: 50,
                                                alignItems: "center",
                                            }}
                                        >
                                            {/* Icon */}
                                            <View
                                                style={{
                                                    width: 42,
                                                    height: 42,
                                                    borderRadius: 21,
                                                    backgroundColor: step.completed ? "#06A31633" : "#D5D5D533",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        width: 34,
                                                        height: 34,
                                                        borderRadius: 17,
                                                        backgroundColor: step.completed ? "#16A34A" : "#E5E5E5",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <MaterialCommunityIcons
                                                        name={step.icon as any}
                                                        size={18}
                                                        color={step.completed ? "#F5F5F5" : "#272727"}
                                                    />
                                                </View>
                                            </View>

                                            {/* Dashed Connector */}
                                            {index !== trackingSteps.length - 1 && (
                                                <View
                                                    style={{
                                                        flex: 1,
                                                        alignItems: "center",
                                                        marginTop: 4,
                                                    }}
                                                >
                                                    {Array.from({ length: 8 }).map((_, i) => (
                                                        <View
                                                            key={i}
                                                            style={{
                                                                width: 2,
                                                                height: 6,
                                                                backgroundColor: step.completed
                                                                    ? "#16A34A"
                                                                    : "#D5D5D5",
                                                                marginBottom: 4,
                                                                borderRadius: 1,
                                                            }}
                                                        />
                                                    ))}
                                                </View>
                                            )}
                                        </View>

                                        {/* Right Side */}

                                        <View
                                            style={{
                                                flex: 1,
                                                paddingLeft: 10,
                                                paddingTop: 4,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 18,
                                                    fontWeight: "700",
                                                    color: step.completed ? "#16A34A" : "#707070",
                                                }}
                                            >
                                                {step.title}
                                            </Text>

                                            {step.time && (
                                                <Text
                                                    style={{
                                                        color: "#808080",
                                                        marginTop: 5,
                                                    }}
                                                >
                                                    {formatOrderDate(step.time)}
                                                </Text>
                                            )}
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </>
                }
                renderItem={() => {
                    return (
                        <>
                            {/* products section */}
                            <View style={{ backgroundColor: "#F5F5F5", padding: 20, borderRadius: 10, marginTop: 20, borderWidth: 1, borderColor: "#D5D5D5" }}>
                                <Pressable
                                    style={styles.header}
                                    onPress={toggle}
                                >
                                    <Text style={styles.title}>
                                        Products
                                    </Text>

                                    <Ionicons
                                        name={
                                            expandedProducts
                                                ? "chevron-up"
                                                : "chevron-down"
                                        }
                                        size={24}
                                        color="#272727"
                                    />
                                </Pressable>
                                <View style={{ gap: 16 }}>
                                    {expandedProducts && orderData.items.map((product, index) => (
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
                                                </View>
                                            </View>

                                            {index !== orderData.items.length - 1 && (
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
                            </View>

                            {/* order summary */}
                            <View style={{
                                backgroundColor: "#F5F5F5", padding: 20, borderRadius: 10, marginTop: 20, borderWidth: 1, borderColor: "#D5D5D5",
                            }}>
                                <Pressable
                                    style={styles.header}
                                    onPress={toggleSummary}
                                >
                                    <Text style={styles.title}>
                                        Order Summary
                                    </Text>

                                    <Ionicons
                                        name={
                                            expandedProducts
                                                ? "chevron-up"
                                                : "chevron-down"
                                        }
                                        size={24}
                                        color="#272727"
                                    />
                                </Pressable>

                                {
                                    expandedSummary && <View style={styles.voucherContainer}>
                                        <View style={styles.voucherItem}>
                                            <Text style={styles.voucherItemText}>Subtotal</Text>
                                            <Text style={styles.voucherItemText}>${orderData.subtotal.toFixed(2)}</Text>
                                        </View>
                                        <View style={styles.voucherItem}>
                                            <Text style={styles.voucherItemText}>Delivery Charge</Text>
                                            <Text style={[styles.voucherItemText, { color: "#FE6568" }]}>+${orderData.deliveryFee.toFixed(2)}</Text>
                                        </View>
                                        <View style={styles.voucherItem}>
                                            <Text style={styles.voucherItemText}>Vat./Tax</Text>
                                            <Text style={[styles.voucherItemText, { color: "#FE6568" }]}>+${orderData.vatTax.toFixed(2)}</Text>
                                        </View>
                                        <View
                                            style={{
                                                borderBottomWidth: 1,
                                                borderBottomColor: "#D5D5D5",
                                            }}
                                        ></View>
                                        <View style={styles.voucherItem}>
                                            <Text style={styles.voucherItemText}>Discount</Text>
                                            <Text style={[styles.voucherItemText, { color: "#06A316" }]}>-${orderData.discount.toFixed(2)}</Text>
                                        </View>
                                        <View style={styles.voucherItem}>
                                            <Text style={styles.voucherItemText}>Special Discount</Text>
                                            <Text style={[styles.voucherItemText, { color: "#06A316" }]}>-${orderData.specialDiscount.toFixed(2)}</Text>
                                        </View>
                                        <View style={styles.voucherItem}>
                                            <Text style={styles.voucherItemText}>Free Shipping Discount</Text>
                                            <Text style={[styles.voucherItemText, { color: "#06A316" }]}>-${orderData.freeShippingDiscount.toFixed(2)}</Text>
                                        </View>
                                        <View
                                            style={{
                                                borderBottomWidth: 1,
                                                borderBottomColor: "#272727",
                                            }}
                                        ></View>
                                        <View style={styles.voucherItem}>
                                            <Text style={styles.voucherItemText2}>Total:</Text>
                                            <Text style={[styles.voucherItemText2]}>${orderData.total.toFixed(2)}</Text>
                                        </View>
                                    </View>
                                }
                            </View>

                            {/* payment info */}
                            <View style={{
                                backgroundColor: "#F5F5F5", padding: 20, borderRadius: 10, marginTop: 20, borderWidth: 1, borderColor: "#D5D5D5",
                            }}>
                                <Text style={[styles.title, { marginBottom: 16 }]}>
                                    Payment
                                </Text>
                                <Text style={{ fontSize: 12, fontWeight: "400", color: "#272727", marginBottom: 8 }}>
                                    Payment by:
                                </Text>
                                <Text style={{ fontSize: 14, fontWeight: "500", color: "#272727" }}>{orderData.paymentMethod}{" "}{orderData.paymentStatus}</Text>
                            </View>
                            {/* delivery info */}
                            <View style={{
                                backgroundColor: "#F5F5F5", padding: 20, borderRadius: 10, marginTop: 20, borderWidth: 1, borderColor: "#D5D5D5",
                            }}>
                                <Text style={[styles.title, { marginBottom: 16 }]}>
                                    Delivery
                                </Text>
                                <View style={{ gap: 8 }}>
                                    <Text style={{ fontSize: 12, fontWeight: "400", color: "#272727" }}>
                                        Delivery to:
                                    </Text>
                                    <Text style={{ fontSize: 12, fontWeight: "500", color: "#272727" }}>{orderData.deliveryAddress.phone}</Text>
                                    <Text style={{ fontSize: 12, fontWeight: "500", color: "#272727" }}>{email}</Text>
                                    <Text style={{ fontSize: 12, fontWeight: "500", color: "#272727" }}>{orderData.deliveryAddress.address}</Text>
                                </View>
                            </View>
                        </>
                    )
                }}
            >
            </FlatList>
        </View>
    );

}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },

    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#1D1D1D",
    }, voucherContainer: {
        gap: 16,
    },
    voucherItem: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    voucherItemText: {
        color: "#272727",
        fontSize: 16,
        fontWeight: "400"
    },
    voucherItemText2: {
        fontSize: 18,
        fontWeight: "500",
        color: "#272727"
    }

})