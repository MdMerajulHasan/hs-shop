import { Dimensions, Image, View } from "react-native";
import Carousel, { Pagination } from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";

const { width } = Dimensions.get("window");

const offers = [
    {
        id: "1",
        uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/slider-offer-pic-scaled.jpg",
    },
    {
        id: "2",
        uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/slider-offer-pic-scaled.jpg",
    },
    {
        id: "3",
        uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/slider-offer-pic-scaled.jpg",
    },
    {
        id: "4",
        uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/slider-offer-pic-scaled.jpg",
    },
];

export default function Slider() {
    const progress = useSharedValue(0);

    return (
        <View style={{ position: "relative" }}>
            <Carousel
                loop
                width={width}
                height={200}
                autoPlay
                data={offers}
                onProgressChange={progress}
                autoPlayInterval={4000}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item.uri }}
                        style={{
                            width,
                            height: 200,
                        }}
                    />
                )}
            />

            <View
                style={{
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    right: 0,
                    alignItems: "center",
                }}
            >
                <Pagination.Basic
                    progress={progress}
                    data={offers}
                    dotStyle={{
                        width: 15,
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: "rgba(255,255,255,0.5)",
                    }}
                    activeDotStyle={{
                        width: 15,
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: "#F5F5F5",
                    }}
                    containerStyle={{
                        gap: 6,
                    }}
                />
            </View>
        </View>
    );
}