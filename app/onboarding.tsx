import PrimaryButton from "@/components/PrimaryButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
    Dimensions,
    FlatList,
    ImageBackground,
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
        title: "Your Favorite Experience",
        description: "Discover tasty meals, exclusive offers, and seamless online ordering with our all-in-one restaurant app.",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/07/onboarding1.png",
    },
    {
        id: "2",
        title: "Fast Ordering. Easy Dining.",
        description: "Browse menus, reserve tables, and enjoy quick checkout with secure payment and instant delivery.",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/07/onboarding2.png",
    },
    {
        id: "3",
        title: "Smart Dining Starts Here",
        description: "Experience smarter food ordering, personalized rewards, and faster service for modern food lovers.",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/07/onboarding3.png",
    },
];

export default function Onboarding() {
    const flatListRef = useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const finishOnboarding = async () => {
        await AsyncStorage.setItem("onboardingCompleted", "true");
        router.replace("/registration");
    };
    const finishOnboardingSkip = async () => {
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
                    <ImageBackground source={{ uri: item?.image }} style={styles.slide}>
                        <TouchableOpacity style={{ position: "absolute", top: 50, right: 10 }} onPress={finishOnboardingSkip}>
                            <Text style={styles.skip}>Skip</Text>
                        </TouchableOpacity>
                        <View style={styles.footer}>
                            <Text style={styles.title}>{item?.title}</Text>
                            <Text style={styles.description}>{item?.description}</Text>
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
                                    onPress={finishOnboarding}
                                >
                                    <PrimaryButton onboarding={true} label={"Get Started"}></PrimaryButton>

                                </TouchableOpacity>
                            ) : (
                                <View>
                                    <TouchableOpacity
                                        onPress={nextSlide}>
                                        <PrimaryButton onboarding={true} label={"Next"}></PrimaryButton>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                    </ImageBackground>
                )}
            />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slide: {
        width,
        alignItems: "center",
        justifyContent: "center",
        resizeMode: "contain",
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        textAlign: "center",
        color: "#F5F5F5"
    },
    description: {
        fontSize: 16,
        textAlign: "center",
        color: "#D5D5D5",
        lineHeight: 24,
    },
    footer: {
        paddingHorizontal: 10,
        position: "absolute",
        bottom: 40,
        left: 0,
        right: 0,
        marginHorizontal: "auto"
    },
    dots: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 30,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: "#D5D5D5",
        marginHorizontal: 4,
    },
    activeDot: {
        width: 50,
        backgroundColor: "#F5F5F5",
        borderRadius: 40,
        height: 8,
        borderWidth: 1,
        borderColor: "#D5D5D5"
    },
    skip: {
        alignSelf: "flex-end",
        fontSize: 16,
        color: "#F5F5F5",
        fontWeight: "500"
    },

});