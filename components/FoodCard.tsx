import { Product } from "@/assets/products";
import { addToCart } from "@/features/cart/cartSlice";
import { addNotification } from "@/features/notifications/notificationsSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/features/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { sendNotification } from "@/utils/sendNotification";
import Ionicons from "@expo/vector-icons/Ionicons";
import { nanoid } from "@reduxjs/toolkit";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const createTwoButtonAlert = () =>
  Alert.alert("Added to wishlist", "", [
    {
      text: "Stay Here",
      onPress: () => { },
      style: "cancel",
    },
    { text: "See Wishlist", onPress: () => router.push("/wishlist") },
  ]);

export type Props = {
  item: Product;
  index: number;
  isVertical?: boolean;
};

const { width } = Dimensions.get("window");
const verticalCardWidth = width * 0.45;

export default function FoodCard({ item, index, isVertical }: Props) {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.wishlist.items);
  const isWishlisted = wishlist.some((p) => p.id === item.id);
  const [visible, setVisible] = useState(false);


  return (
    <View
      style={[
        styles.cardContainer,
        {
          width: isVertical ? verticalCardWidth : 200,
          height: isVertical ? 280 : 330,
        },
      ]}
    >
      <View style={styles.offerTextContainer}>
        <Text style={styles.offerText}>-{item.discount}% off</Text>
      </View>

      <Pressable
        style={styles.loveIcon}
        onPress={() => {
          if (isWishlisted) {
            dispatch(removeFromWishlist(item.id));
          } else {
            dispatch(addToWishlist(item));
            createTwoButtonAlert();
          }
        }}
      >
        <Ionicons
          name={isWishlisted ? "heart" : "heart-outline"}
          size={24}
          color={isWishlisted ? "#E93037" : "#575757"}
        ></Ionicons>
      </Pressable>

      <Pressable
        onPress={() => {
          router.push({
            pathname: "/Details",
            params: {
              id: item.id,
            },
          });
        }}
        style={styles.cardImageContainre}
      >
        <Image
          style={[
            styles.cardImage,
            {
              width: "100%",
              height: isVertical ? 170 : 220,
            },
          ]}
          source={{ uri: item.image }}
        ></Image>
      </Pressable>

      <View style={{ flex: 1, justifyContent: "space-between", padding: 1 }}>
        <Text style={styles.itemName}>{item.title}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Text
                style={{ fontWeight: "700", fontSize: 20, color: "#272727" }}
              >
                ${item.price}
              </Text>
              <Text style={styles.oldPrice}>${item.oldPrice}</Text>
            </View>
            <View
              style={{ flexDirection: "row", gap: 4, alignItems: "center" }}
            >
              <Image
                source={{
                  uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/Star.png",
                }}
                style={{ width: 15, height: 14 }}
              ></Image>
              <Text
                style={{ color: "#575757", fontSize: 14, fontWeight: "400" }}
              >
                {item.rating}
              </Text>
            </View>
          </View>

          <Pressable
            style={styles.cartContainer}
            onPress={async () => {
              dispatch(addToCart(item));
              dispatch(addNotification({
                id: nanoid(),
                title: "Added To Cart",
                body: `${item.title} has added to cart successfully.`,
                type: "cart",
                isRead: false,
                createdAt: Date.now(),
                actionLabel: "View Cart",
              }));
              await sendNotification(
                "Added to Cart",
                `${item.title} has been added to your cart.`
              );
            }
            }
          >
            <Image
              tintColor={"#F5F5F5"}
              source={{
                uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/bag.png",
              }}
              style={{ width: 24, height: 24 }}
            ></Image>
          </Pressable>
        </View>
      </View>
      <Modal visible={visible}>
        <View
          style={{ backgroundColor: "#FEFEFE", width: "80%", height: "25%" }}
        >
          <Text>The item is added to wishlist!</Text>
          <Pressable
            onPress={() => {
              router.push("/wishlist");
              setVisible(false);
            }}
          >
            <Text>See Wishlist</Text>
          </Pressable>
          <Pressable onPress={() => setVisible(false)}>
            <Text>Ok</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    height: 340,
    flexDirection: "column",
    gap: 10,
    borderRadius: 10,
  },
  cardImageContainre: {
    borderRadius: 10,
    borderColor: "#D5D5D5",
    borderWidth: 1,
  },
  offerTextContainer: {
    backgroundColor: "#E93037",
    width: 63,
    height: 24,
    borderRadius: 40,
    paddingVertical: 4,
    paddingHorizontal: 6,
    position: "absolute",
    top: 8,
    left: 8,
    zIndex: 1,
  },
  offerText: {
    color: "#F5F5F5",
    fontWeight: "500",
    fontSize: 12,
    textAlign: "center",
  },
  loveIcon: {
    position: "absolute",
    zIndex: 2,
    top: 8,
    right: 8,
    padding: 4,
    backgroundColor: "#5757571A",
    borderRadius: 30,
  },
  cardImage: {
    height: 160,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: "auto",
  },
  itemName: {
    color: "#575757",
    fontSize: 16,
    fontWeight: "500",
    overflow: "hidden",
  },
  cartContainer: {
    backgroundColor: "#D76527",
    padding: 12,
    width: 48,
    height: 48,
    borderRadius: 66,
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: "#ADADAD",
    paddingVertical: 4,
    fontWeight: "400",
  },
});
