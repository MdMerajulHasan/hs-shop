import React, { useState, useMemo } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    Pressable,
    StyleSheet,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { PRODUCTS } from "@/assets/products";

type Size = {
    id: string;
    label: string;
    price: number;
};

export default function Details() {
    const { id } = useLocalSearchParams<{ id: string }>();

    const product = useMemo(() => {
        if (!id) return null;
        return PRODUCTS.find((p) => String(p.id) === String(id));
    }, [id]);

    const [qty, setQty] = useState(1);
    const [selectedSize, setSelectedSize] = useState<Size | null>(null);

    React.useEffect(() => {
        if (product?.sizes?.length) {
            setSelectedSize(product.sizes[0]);
        }
    }, [product]);

    if (!product) {
        return (
            <View style={styles.center}>
                <Text>Product not found</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* IMAGE */}
                <View style={styles.imageBox}>
                    <Image source={{ uri: product.image }} style={styles.image} />
                    {/* TOP BAR */}
                    <View style={styles.topBar}>
                        <Pressable
                            style={styles.backButtonContainer}
                            onPress={() => router.back()}>
                            <Ionicons name="arrow-back" size={24} color="#272727" />
                        </Pressable>

                        <View style={{ flexDirection: "row", gap: 15 }}>
                            <View style={styles.backButtonContainer}>
                                <Image style={{ width: 24, height: 24 }}
                                    tintColor={"#272727"}
                                    source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/heart.png" }}>
                                </Image>
                            </View>
                            <View 
                            style={styles.backButtonContainer}
                            >
                            <Ionicons name="share-social-outline" size={24} color="#272727" />
                            </View>
                        </View>
                    </View>

                    {/* BADGE */}
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            {product.discount}% OFF
                        </Text>
                        <Text style={styles.badgeText}>{product.badge}</Text>
                    </View>
                </View>

                {/* DETAILS CARD */}
                <View style={styles.card}>

                    {/* TITLE ROW */}
                    <View style={styles.row}>
                        <Text style={styles.name}>{product.name}</Text>
                        <Text>
                            ⭐ {product.rating} ({product.totalReviews} Reviews)
                        </Text>
                    </View>

                    <Text style={styles.title}>{product.title}</Text>

                    <Text style={styles.desc}>{product.description}</Text>

                    {/* SIZE */}
                    <Text style={styles.section}>Size</Text>

                    <View style={styles.sizeRow}>
                        {product.sizes.map((s) => (
                            <Pressable
                                key={s.id}
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

                    {/* SKU / STOCK */}
                    <View style={styles.row}>
                        <Text>SKU: {product.sku}</Text>
                        <Text>{product.stock} In Stock</Text>
                    </View>

                    {/* INGREDIENTS */}
                    <Text style={styles.section}>Ingredients</Text>

                    <View style={styles.grid}>
                        {product.ingredients.map((i, index) => (
                            <Text key={index} style={styles.ing}>
                                • {i}
                            </Text>
                        ))}
                    </View>

                    {/* REVIEWS */}
                    <Text style={styles.section}>Reviews</Text>

                    {product.reviews.map((r) => (
                        <View key={r.id} style={styles.reviewCard}>
                            <Image source={{ uri: r.image }} style={styles.avatar} />
                            <View style={{ flex: 1 }}>
                                <Text>
                                    {r.name} ⭐ {r.rating}
                                </Text>
                                <Text>{r.review}</Text>
                            </View>
                        </View>
                    ))}

                    {/* SIMILAR ITEMS (FIXED - NO FLATLIST) */}
                    <Text style={styles.section}>Similar Items</Text>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {product.similarItems.map((item) => (
                            <View key={item.id} style={styles.cardItem}>
                                <Image source={{ uri: item.image }} style={styles.itemImg} />
                                <Text>{item.name}</Text>
                                <Text>${item.price}</Text>
                            </View>
                        ))}
                    </ScrollView>

                </View>
            </ScrollView>

            {/* BOTTOM BAR */}
            <View style={styles.bottom}>
                <View style={styles.qtyBox}>
                    <Pressable onPress={() => setQty((q) => Math.max(1, q - 1))}>
                        <Text style={styles.btn}>-</Text>
                    </Pressable>

                    <Text>{qty}</Text>

                    <Pressable onPress={() => setQty(qty + 1)}>
                        <Text style={styles.btn}>+</Text>
                    </Pressable>
                </View>

                <Text>${selectedSize?.price ?? product.price}</Text>

                <View style={styles.actions}>
                    <Pressable style={styles.cart}>
                        <Text style={{ color: "#fff" }}>Add To Cart</Text>
                    </Pressable>

                    <Pressable style={styles.buy}>
                        <Text style={{ color: "#fff" }}>Buy Now</Text>
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
    imageBox: { height: 250 },
    image: { width: "100%", height: "100%" },
    topBar: {
        position: "absolute",
        top: 20,
        left: 15,
        right: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    badge: {
        position: "absolute",
        top: 70,
        left: 10,
        backgroundColor: "#D76527",
        padding: 8,
        borderRadius: 8,
    },

    badgeText: { color: "#fff" },

    card: {
        marginTop: -20,
        backgroundColor: "#fff",
        padding: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    name: { color: "#D76527", fontWeight: "600" },

    title: { fontSize: 24, fontWeight: "500", marginVertical: 5 },

    desc: { color: "#555" },

    section: { marginTop: 15, fontWeight: "600" },

    sizeRow: { flexDirection: "row", gap: 10 },

    sizeBox: {
        borderWidth: 1,
        padding: 8,
        borderRadius: 6,
    },

    activeSize: {
        borderColor: "#D76527",
    },

    sizeText: { color: "#555" },

    activeSizeText: { color: "#D76527" },

    grid: { flexDirection: "row", flexWrap: "wrap" },

    ing: { width: "50%", color: "#555" },

    reviewCard: {
        flexDirection: "row",
        marginVertical: 5,
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
        borderColor: "#eee",
    },

    qtyBox: { flexDirection: "row", gap: 10 },

    btn: { fontSize: 20 },

    actions: {
        flexDirection: "row",
        gap: 10,
        marginTop: 10,
    },

    cart: {
        flex: 1,
        backgroundColor: "#D76527",
        padding: 10,
        alignItems: "center",
    },

    buy: {
        flex: 1,
        backgroundColor: "#000",
        padding: 10,
        alignItems: "center",
    },
});