import Header from "@/components/Header";
import PrimaryButton from "@/components/PrimaryButton";
import SmallFoodCard from "@/components/SmallFoodCard";
import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "@/store/hooks";
import Toast from "react-native-toast-message";


export default function Shopping() {

    const cartData = useAppSelector((state) => state.cart.items);
    const totalItems = cartData.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartData.reduce((total, item) => total + item.price * item.quantity, 0);
    const deliveryCharge = totalItems ? 6 : 0;
    const vatTax = totalItems ? 5 : 0;
    const discount = totalItems ? 2 : 0;
    const specialDiscount = totalItems ? 1 : 0;
    const freeShippingDiscount = totalItems ? 1 : 0;
    const totalAmount = totalPrice + deliveryCharge + vatTax - discount - specialDiscount - freeShippingDiscount;

    const handleOrder = () => {
        Toast.show({
            type: 'error',
            text1: 'Cart is empty',
            text2: 'Please add items to your cart before placing an order.',
            position: 'top',
            visibilityTime: 3000,
        });
    }

    return (
        <View style={{ flex: 1 }}>
            {/* header */}
            <View
                style={styles.header}
            >
                <Header count={totalItems} page={"cart"}></Header>
            </View>
            {/* body */}
            <FlatList
                style={{ flex: 1 }}
                data={cartData}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (<View style={{ marginHorizontal: 10 }}>

                        <SmallFoodCard item={item} page={"cart"}></SmallFoodCard>
                    </View>)
                }}
                ItemSeparatorComponent={() => <View style={{
                    height: 1,
                    backgroundColor: "#E9E9E9",
                    marginVertical: 16,
                    marginHorizontal: 10,
                }}>
                </View>}
                contentContainerStyle={{
                    paddingBottom: 40,
                }}
                ListFooterComponent={() => <View>
                    <View style={styles.footerContainer}>
                        <View style={styles.voucherContainer}>
                            <View style={styles.voucherItem}>
                                <Text style={styles.voucherItemText}>Subtotal</Text>
                                <Text style={styles.voucherItemText}>${totalPrice.toFixed(2)}</Text>
                            </View>
                            <View style={styles.voucherItem}>
                                <Text style={styles.voucherItemText}>Delivery Charge</Text>
                                <Text style={[styles.voucherItemText, { color: "#FE6568" }]}>+${deliveryCharge.toFixed(2)}</Text>
                            </View>
                            <View style={styles.voucherItem}>
                                <Text style={styles.voucherItemText}>Vat./Tax</Text>
                                <Text style={[styles.voucherItemText, { color: "#FE6568" }]}>+${vatTax.toFixed(2)}</Text>
                            </View>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: "#D5D5D5",
                                }}
                            ></View>
                            <View style={styles.voucherItem}>
                                <Text style={styles.voucherItemText}>Discount</Text>
                                <Text style={[styles.voucherItemText, { color: "#06A316" }]}>-${discount.toFixed(2)}</Text>
                            </View>
                            <View style={styles.voucherItem}>
                                <Text style={styles.voucherItemText}>Special Discount</Text>
                                <Text style={[styles.voucherItemText, { color: "#06A316" }]}>-${specialDiscount.toFixed(2)}</Text>
                            </View>
                            <View style={styles.voucherItem}>
                                <Text style={styles.voucherItemText}>Free Shipping Discount</Text>
                                <Text style={[styles.voucherItemText, { color: "#06A316" }]}>-${freeShippingDiscount.toFixed(2)}</Text>
                            </View>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: "#272727",
                                }}
                            ></View>
                            <View style={styles.voucherItem}>
                                <Text style={styles.voucherItemText2}>Total:</Text>
                                <Text style={[styles.voucherItemText2]}>${totalAmount.toFixed(2)}</Text>
                            </View>
                        </View>
                    </View>
                </View>}
            ></FlatList>
            <View
                style={{
                    borderBottomColor: "#0000",
                    borderColor: "#D5D5D5",
                    backgroundColor: "#F5F5F5",
                    borderWidth: 1,
                    marginTop: -20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    zIndex: 1
                }}
            >
                <View style={{ paddingHorizontal: 10 }}>
                    <View style={[styles.voucherItem, { paddingTop: 20, marginBottom: 10 }]}>
                        <Text style={styles.voucherItemText3}>Total:</Text>
                        <Text style={[styles.voucherItemText3]}>${totalAmount.toFixed(2)}</Text>
                    </View>
                    <Pressable
                        onPress={() => {
                            if (totalItems === 0) {
                                handleOrder();
                                return;
                            }
                            router.push({
                                pathname: "/placeOrder",
                                params: {
                                    totalAmount: totalAmount.toString(),
                                },
                            });

                        }}
                        style={{ marginVertical: 20 }}>
                        <PrimaryButton label={"Place Order"}></PrimaryButton>
                    </Pressable>
                </View>
            </View>
            <Toast></Toast>
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
        marginBottom: 20
    },
    footerContainer: {
        marginTop: 40,
        paddingBottom: 40,
        zIndex: 0,
        marginHorizontal: 10
    },
    voucherContainer: {
        backgroundColor: "#D765271A",
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#D76527",
        gap: 16,
        paddingTop: 20,
        paddingBottom: 20
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
    },
    voucherItemText3: {
        fontSize: 22,
        fontWeight: "500",
        color: "#272727"
    }
})