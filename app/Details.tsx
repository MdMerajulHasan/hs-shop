import { RESTAURANT } from "@/assets/restaurant";
import { REVIEWS } from "@/assets/reviews";
import FoodCard from "@/components/FoodCard";
import StarRating from "@/components/StarRating";
import TitleBar from "@/components/TitleBar";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getTimeAgo } from "@/utils/getTimeAgo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useMemo, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View, } from "react-native";
import { addToCart } from "@/features/cart/cartSlice";
import { addToWishlist, removeFromWishlist } from "@/features/wishlist/wishlistSlice";

type Size = {
    id: string;
    label: string;
    price: number;
};

export default function Details() {
    const PRODUCTS = useAppSelector((s) => s.products.items);

    const [qty, setQty] = useState(1);
    const [selectedSize, setSelectedSize] = useState<Size | null>(null);
    const { id } = useLocalSearchParams<{ id: string }>();

    // getting the product by id from products data
    const product = useMemo(() => {
        if (!id) return null;
        return PRODUCTS.find((p) => String(p.id) === String(id));
    }, [id, PRODUCTS]);

    const dispatch = useAppDispatch();
    const wishlist = useAppSelector((state) => state.wishlist.items);
    const isWishlisted = wishlist.some((p) => p.id === product?.id);

    // getting the reviews  under the product
    const productReview = useMemo(() => {
        return REVIEWS.filter((review) => review.productId === product?.id);
    }, [product]);

    // initial value of product size is the first size
    React.useEffect(() => {
        if (product?.sizes?.length) {
            setSelectedSize(product.sizes[0]);
        }
    }, [product]);

    const similarItems = useMemo(() => {
        if (!product) return [];

        return PRODUCTS
            .filter(item => item.id !== product.id)
            .map(item => {
                let score = 0;

                // Same item type
                if (item.itemType === product.itemType) score += 3;

                // Same meal
                if (item.mealType === product.mealType) score += 2;

                // Same category
                if (item.category === product.category) score += 2;

                // Same menu
                if (item.menu === product.menu) score += 1;

                // Name contains each other
                if (
                    item.name?.toLowerCase().includes(product.name?.toLowerCase()) ||
                    product.name?.toLowerCase().includes(item.name?.toLowerCase())
                ) {
                    score += 4;
                }

                // Shared ingredients
                const commonIngredients = item.ingredients.filter(ingredient =>
                    product.ingredients.some(
                        p =>
                            p?.toLowerCase() === ingredient?.toLowerCase()
                    )
                );

                score += commonIngredients.length * 2;

                return {
                    ...item,
                    score,
                };
            })
            .filter(item => item.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 10);
    }, [product, PRODUCTS]);

    // if id not matched return product not found
    if (!product) {
        return (
            <View style={styles.center}>
                <Text>Product not found</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={styles.imageBox}>
                    {/* product image */}
                    <Image source={{ uri: product.image }} style={styles.image} />
                    {/* top nav bar */}
                    <View style={styles.topBar}>
                        <Pressable
                            style={styles.backButtonContainer}
                            onPress={() => router.back()}>
                            <Ionicons name="arrow-back" size={24} color="#272727" />
                        </Pressable>

                        <View style={{ flexDirection: "row", gap: 15 }}>
                            <Pressable
                                style={styles.backButtonContainer}
                                onPress={() => {
                                    if (isWishlisted) {
                                        dispatch(removeFromWishlist(product.id))
                                    } else {
                                        dispatch(addToWishlist(product))
                                    }
                                }}
                            >
                                <Ionicons name={isWishlisted ? "heart" : "heart-outline"} size={24} color={isWishlisted ? "#E93037" : "#575757"}></Ionicons>
                            </Pressable>
                            <View
                                style={styles.backButtonContainer}
                            >
                                <Ionicons name="share-social-outline" size={24} color="#272727" />
                            </View>
                        </View>
                    </View>

                    {/* badges */}
                    <View style={styles.badgeContainer}>
                        <View style={[styles.badge, { backgroundColor: "#E93037", maxWidth: 80, marginHorizontal: "auto" }]}>
                            <Text style={styles.badgeText}>
                                -{product.discount}% OFF
                            </Text>
                        </View>
                        <View style={[styles.badge, { backgroundColor: "#06A316" }]}>
                            <Text style={styles.badgeText}>{product.badge}</Text>
                        </View>
                    </View>
                </View>
                {/* details card */}
                <View
                    style={styles.card}>
                    <View style={{ marginHorizontal: 10 }}>
                        {/* name and rating */}
                        <View style={styles.row}>
                            <Text style={styles.name}>{product.name}</Text>
                            <View style={{ flexDirection: "row", gap: 4 }}>
                                <Image
                                    style={{ width: 24, height: 24 }}
                                    source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/Star.png" }}>
                                </Image>
                                <Text style={styles.ratingText}>
                                    {product.rating} ({product.totalReviews} Reviews)
                                </Text>
                            </View>
                        </View>

                        <Text style={styles.title}>{product.title}</Text>

                        <Text style={styles.desc}>{product.description}</Text>

                        <View
                            style={{ borderBottomWidth: 1, borderBottomColor: "#E9E9E9", marginVertical: 16 }}
                        ></View>

                        {/* size */}
                        <Text style={{ fontSize: 14, fontWeight: "500", color: "#1D1D1D", marginBottom: 10 }}>Size:</Text>
                        <View style={styles.sizeRow}>
                            {product.sizes.map((s) => (
                                <Pressable
                                    key={s.id}
                                    // onclick updating the product size
                                    onPress={() => setSelectedSize(s)}
                                    style={[
                                        styles.sizeBox,
                                        selectedSize?.id === s.id && styles.activeSize,
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.sizeText,
                                            selectedSize?.id === s.id &&
                                            styles.activeSizeText,
                                        ]}
                                    >
                                        {s.label}
                                    </Text>
                                </Pressable>
                            ))}
                        </View>

                        <View
                            style={{ borderBottomWidth: 1, borderBottomColor: "#E9E9E9", marginVertical: 20 }}
                        ></View>

                        {/* SKU / STOCK */}
                        <View style={styles.row}>
                            <Text style={{ fontSize: 14, fontWeight: "500", color: "#272727" }}>
                                SKU: {product.sku}
                            </Text>
                            {
                                product.stock ?
                                    <View style={styles.inStock}>
                                        <Text style={{ color: "#D76527", fontSize: 12, fontWeight: "500" }}>
                                            {product.stock} In Stock
                                        </Text>
                                    </View>
                                    : <View style={styles.stockOut}>
                                        <Text style={{ color: "#a71d1d", fontSize: 12, fontWeight: "500" }}>
                                            Stock Out
                                        </Text>
                                    </View>
                            }

                        </View>

                        <View
                            style={{ borderBottomWidth: 1, borderBottomColor: "#E9E9E9", marginVertical: 20 }}
                        ></View>

                        {/* INGREDIENTS */}
                        <Text style={styles.section}>Products Ingredients</Text>

                        <View style={styles.grid}>
                            {product.ingredients.map((i, index) => (
                                <Text key={index} style={styles.ing}>
                                    • {i}
                                </Text>
                            ))}
                        </View>

                        {/* shipping cards */}
                        <View style={styles.shippingContainer}>
                            <View style={{ width: "49%" }}>
                                <View style={styles.shippingIcon}>
                                    <Image tintColor={"#F5F5F5"} style={{ height: 18, width: 18 }} source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/group-1.png" }}></Image>
                                </View>
                                <View>
                                    <Text style={styles.shippingCardTitle}>Shipping & Returns:</Text>
                                    <Text style={styles.shippingText}>Available on all orders over ${RESTAURANT.minimumOrder}</Text>
                                </View>
                            </View>
                            <View style={{ width: "49%" }}>
                                <View style={styles.shippingIcon}>
                                    <Image tintColor={"#F5F5F5"} style={{ height: 18, width: 18 }} source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/box.png" }}></Image>
                                </View>
                                <Text style={styles.shippingCardTitle}>Estimated Delivery:</Text>
                                <Text style={styles.shippingText}>
                                    Orders are typically dispatched within  {RESTAURANT.estimatedDeliveryTime}
                                </Text>

                            </View>
                        </View>

                        {/* REVIEWS */}

                        {
                            productReview.length ?
                                <View style={{ borderBottomWidth: 1, borderBottomColor: "#E9E9E9", paddingBottom: 16 }}>
                                    <Text style={[styles.section, { marginBottom: 0 }]}>Client Feedback</Text>
                                </View>
                                : null
                        }

                        {productReview ? productReview.map((r) => (
                            <View key={r.id} style={styles.reviewCard}>
                                <Image source={{ uri: r.userImage }} style={styles.avatar} />
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text style={{ fontSize: 14, fontWeight: "600", color: "#272727" }}>{r.userName}</Text>
                                        <Text style={{ fontSize: 12, fontWeight: "400", color: "#575757" }}>{getTimeAgo(r.createdAt)}</Text>
                                    </View>
                                    <Text style={{ marginTop: 4, marginBottom: 10 }}>
                                        <StarRating rating={r.rating} />
                                    </Text>
                                    <Text style={{ fontSize: 12, fontWeight: "400", color: "#575757" }}>{r.review}</Text>
                                </View>
                            </View>
                        )) : null}

                        {/* similar items */}
                        {
                            similarItems.length > 0 ? <>
                                <TitleBar itemName={similarItems[0].name} label={"Similar Items"}></TitleBar>
                                <ScrollView
                                    style={{ marginBottom: 40 }}
                                    horizontal showsHorizontalScrollIndicator={false}>
                                    {similarItems.map((item, index) => (
                                        <View key={index}
                                            style={{ marginRight: 20 }}
                                        >
                                            <FoodCard item={item} index={index}></FoodCard>
                                        </View>
                                    ))}
                                </ScrollView>
                            </> : <View
                                style={{ paddingTop: 1, marginTop: 19 }}
                            >
                            </View>
                        }

                    </View>


                </View>
            </ScrollView>
            {/* BOTTOM BAR */}
            <View style={styles.bottom}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginBottom: 10 }}>
                    <View style={styles.qtyBox}>
                        <Pressable onPress={() => setQty((q) => Math.max(1, q - 1))}>
                            <Ionicons size={18} color={"#ADADAD"} name="remove-circle-sharp"></Ionicons>
                        </Pressable>

                        <Text style={{ fontSize: 20, fontWeight: "600", color: "#272727" }}>{qty}</Text>

                        <Pressable onPress={() => setQty(qty + 1)}>
                            <Ionicons size={18} color={"#272727"} name="add-circle-sharp"></Ionicons>
                        </Pressable>
                    </View>
                    <Text style={{ color: "#272727", fontSize: 28, fontWeight: "700" }}>${selectedSize?.price ?? product.price}</Text>
                </View>

                <View style={styles.actions}>
                    <Pressable
                        style={styles.cartContainer}
                        onPress={() => dispatch(addToCart(product))}
                    >
                        <Image source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/bag.png" }}
                            style={{ width: 24, height: 24 }}
                            tintColor={"#F5F5F5"}
                        ></Image>
                        <Text style={{ color: '#F5F5F5', fontSize: 16, fontWeight: "500" }}>Add To Cart</Text>
                    </Pressable>
                    <Pressable style={styles.buy}>
                        <Image source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/bag.png" }}
                            style={{ width: 24, height: 24 }}
                            tintColor={"#F5F5F5"}
                        ></Image>
                        <Text style={{ color: "#F5F5F5", fontSize: 16, fontWeight: "500" }}>Buy Now</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
    center: { flex: 1, justifyContent: "center", alignItems: "center" },
    backButtonContainer: {
        backgroundColor: "#F5F5F5", padding: 10, borderRadius: 30,
        borderColor: "#D5D5D5", borderWidth: 1
    },
    loveBox: {
        padding: 10,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#D5D5D5",
        backgroundColor: '#F5F5F5'
    },
    imageBox: { height: 300 },
    image: { width: "100%", height: "100%" },
    topBar: {
        position: "absolute",
        top: 25,
        left: 15,
        right: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    badgeContainer: {
        position: "absolute",
        top: 85,
        left: 10,
        gap: 8
    },
    badge: {
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 40,
        marginLeft: 0
    },
    badgeText: {
        color: "#F5F5F5",
        fontSize: 12,
        fontWeight: "500",
        textAlign: "center"
    },
    ratingText: {
        color: "#575757",
        fontSize: 16,
        fontWeight: "500"
    },
    card: {
        marginTop: -20,
        backgroundColor: "#fff",
        paddingVertical: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginBottom: 40
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
        alignItems: "center"
    },

    name: { color: "#D76527", fontWeight: "600", fontSize: 16 },

    title: { color: "#272727", fontSize: 28, fontWeight: "500", marginBottom: 10 },

    desc: { color: "#575757", fontSize: 14, fontWeight: "400" },

    section: { fontSize: 22, color: "#1D1D1D", fontWeight: "700", marginBottom: 10 },

    sizeRow: { flexDirection: "row", gap: 12 },

    sizeBox: {
        borderWidth: 1,
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 6,
        marginBottom: 16
    },

    activeSize: {
        borderColor: "#D76527",
    },

    sizeText: { color: "#555" },

    activeSizeText: { color: "#D76527" },

    grid: { flexDirection: "row", flexWrap: "wrap" },

    ing: { width: "50%", color: "#272727", fontSize: 14, fontWeight: "400" },

    reviewCard: {
        flexDirection: "row",
        marginTop: 16,
        gap: 10,
    },

    avatar: { width: 40, height: 40, borderRadius: 20 },

    cardItem: {
        width: 140,
        marginRight: 10,
    },

    itemImg: { width: "100%", height: 80 },

    bottom: {
        padding: 10,
        borderTopWidth: 1,
        borderBottomColor: "#0000",
        borderColor: "#D5D5D5",
        borderWidth: 1,
        marginTop: -20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        zIndex: 1,
        marginBottom: 25,
        backgroundColor: "#fff"
    },

    qtyBox: { flexDirection: "row", gap: 15, justifyContent: "space-between", alignItems: "center", borderWidth: 1, borderColor: '#D5D5D5', backgroundColor: "#FEFEFE", padding: 10,borderRadius: 66 },

    actions: {
        flexDirection: "row",
        gap: 10,
        marginTop: 10,
    },

    buy: {
        flex: 1,
        backgroundColor: "#000",
        padding: 10,
        alignItems: "center",
        paddingVertical: 12,
        borderRadius: 66,
        flexDirection: "row",
        justifyContent: "center",
        gap: 8
    },
    inStock: {
        backgroundColor: "#D7652729",
        borderWidth: 1,
        borderColor: "#D76527",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6
    },
    stockOut: {
        backgroundColor: "#a71d1d29",
        borderWidth: 1,
        borderColor: "#a71d1d",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6
    },
    shippingIcon: { backgroundColor: "#272727", padding: 8, borderRadius: 60, width: 34, marginHorizontal: "auto", marginBottom: 14 },
    shippingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 4,
        borderColor: "#E9E9E9",
        borderRadius: 10
    },
    shippingCardTitle: {
        textAlign: "center", fontSize: 16, fontWeight: "600", marginBottom: 4
    },
    shippingText: { textAlign: "center", fontSize: 14, fontWeight: "400" },
    cartContainer: {
        flex: 1,
        backgroundColor: "#D76527",
        paddingVertical: 12,
        borderRadius: 66,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8
    },
});