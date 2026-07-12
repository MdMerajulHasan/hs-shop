import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
    Dimensions,
    FlatList,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const { width } = Dimensions.get("window");

const slides = [
    {
        id: "1",
        title: "Welcome to HS Restaurant",
        description: "Discover delicious food from your favorite restaurants.",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/07/onboarding1.png",
    },
    {
        id: "2",
        title: "Fast Delivery",
        description: "Get your meals delivered quickly to your doorstep.",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/07/onboarding2.png",
    },
    {
        id: "3",
        title: "Order Easily",
        description: "Browse the menu, place your order, and enjoy your food.",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/07/onboarding3.png",
    },
];

export default function Onboarding() {
    const flatListRef = useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const finishOnboarding = async () => {
        await AsyncStorage.setItem("onboardingCompleted", "true");
        router.replace("/(tabs)");
    };

    const nextSlide = () => {
        if (currentIndex < slides.length - 1) {
            flatListRef.current?.scrollToIndex({
                index: currentIndex + 1,
                animated: true,
            });
        } else {
            finishOnboarding();
        }
    };

    const previousSlide = () => {
        if (currentIndex > 0) {
            flatListRef.current?.scrollToIndex({
                index: currentIndex - 1,
                animated: true,
            });
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden />

            <FlatList
                ref={flatListRef}
                data={slides}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                onMomentumScrollEnd={(event) => {
                    const index = Math.round(
                        event.nativeEvent.contentOffset.x / width
                    );
                    setCurrentIndex(index);
                }}
                renderItem={({ item }) => (
                    <View style={styles.slide}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                )}
            />

            <View style={styles.footer}>
                <TouchableOpacity onPress={finishOnboarding}>
                    <Text style={styles.skip}>Skip</Text>
                </TouchableOpacity>

                <View style={styles.dots}>
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                currentIndex === index && styles.activeDot,
                            ]}
                        />
                    ))}
                </View>

                {currentIndex === slides.length - 1 ? (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={finishOnboarding}
                    >
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                ) : (
                    <View style={styles.actions}>
                        {currentIndex > 0 && (
                            <TouchableOpacity onPress={previousSlide}>
                                <Text style={styles.back}>Back</Text>
                            </TouchableOpacity>
                        )}

                        <TouchableOpacity style={styles.button} onPress={nextSlide}>
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    slide: {
        width,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 30,
    },
    image: {
        width: 260,
        height: 260,
        resizeMode: "contain",
        marginBottom: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 15,
    },
    description: {
        fontSize: 16,
        textAlign: "center",
        color: "#666",
        lineHeight: 24,
    },
    footer: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    dots: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 25,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#d0d0d0",
        marginHorizontal: 4,
    },
    activeDot: {
        width: 24,
        backgroundColor: "#007AFF",
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    back: {
        fontSize: 16,
        color: "#007AFF",
        marginRight: 20,
    },
    skip: {
        alignSelf: "flex-end",
        fontSize: 16,
        color: "#666",
    },
    button: {
        backgroundColor: "#007AFF",
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});