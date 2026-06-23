import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Pressable, StyleSheet, Text, View, Dimensions } from "react-native";
import ImageViewer from "./ImageViewer";

type TabRouteName = "index" | "shopping" | "order" | "profile" | "wishlist";

const { width: Width } = Dimensions.get("screen");

export default function CustomTabBar({
    state,
    descriptors,
    navigation,
}: BottomTabBarProps) {

    const images = {
        index: {
            active: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/Vector.png" },
            inactive: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/home-2.png" },
        },
        shopping: {
            active: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/Bag.png" },
            inactive: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/bag-2.png" },
        },
        order: {
            active: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/Shipping-Car.png" },
            inactive: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/Shipping-Car-fast.png" },
        },
        wishlist: {
            active: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/heart-1.png" },
            inactive: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/heart.png" },
        },
        profile: {
            active: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/user-1.png" },
            inactive: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/user.png" },
        },
    };

    return (
        <View style={styles.container}>
            <View style={{
                width: 277, height: 93,
                marginHorizontal: 'auto',
                borderRadius: 65,
                justifyContent: "center",
                alignItems: "center"
            }}>
                {state.routes.map((route, index) => {
                    const focused = state.index === index;
                    const { options } = descriptors[route.key];
                    const title = options.title ?? route.name;
                    const routeName = route.name as TabRouteName;
                    const ITEM_WIDTH = 60;
                    const GAP = 50;
                    const left = index * GAP;

                    const image = images[routeName as keyof typeof images];

                    if (!image) {
                        return null;
                    }

                    const imgSource = focused ? image.active : image.inactive;

                    return (
                        <Pressable
                            key={route.key}
                            onPress={() => navigation.navigate(route.name)}
                            style={[{
                                position: "absolute",
                                left: left,
                                bottom: 10,
                                width: ITEM_WIDTH,
                                alignItems: "center",
                                zIndex: focused ? 999 : 5 - index,
                            }]}
                        >
                            <View
                                style={[{
                                    backgroundColor: focused ? "#D76527" : "#00001A",
                                    width: focused ? 70 : 60,
                                    height: focused ? 70 : 60,
                                    borderRadius: 110,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    transform: [
                                        { translateY: -15 },
                                        { scale: focused ? 1.15 : 1 },
                                    ],
                                    elevation: focused ? 10 : 5,
                                }, focused ? { borderWidth: 0 } : { borderWidth: 1, borderColor: '#242424' }]}
                            >
                                <ImageViewer imgSource={imgSource} />

                                {focused && (
                                    <Text style={styles.text}>
                                        {title}
                                    </Text>
                                )}
                            </View>
                        </Pressable>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        position: "relative",
        paddingBottom: 13,
        width: Width,
        marginHorizontal: "auto",
    },
    text: {
        fontWeight: "400",
        color: "#F5F5F5",
        fontSize: 10
    }
});

