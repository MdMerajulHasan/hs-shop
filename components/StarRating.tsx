import React from "react";
import { View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
    rating: number;
    size?: number;
    color?: string;
};

export default function StarRating({
    rating,
    size = 16,
    color = "#FFA927",
}: Props) {
    const stars = [1, 2, 3, 4, 5];

    return (
        <View style={{ flexDirection: "row" , alignItems: "center"}}>
            {stars.map((star, index) => {
                let link = ""

                if (rating >= star) {
                    link = "https://d.hs-bd.com/wp-content/uploads/2026/06/Star.png"
                } else if (rating >= star - 0.5) {
                    link = "https://d.hs-bd.com/wp-content/uploads/2026/06/Star-1.png";
                } else {
                    link = "https://d.hs-bd.com/wp-content/uploads/2026/06/png-1.png";
                    size=16
                }

                return (
                    <Image key={index} tintColor={color} style={{ height: size, width: size }} source={{ uri: link }}></Image>
                );
            })}
        </View>
    );
}