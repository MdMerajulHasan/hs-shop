import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
    LayoutAnimation,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    UIManager,
    View,
} from "react-native";

type Props = {
    title: string;
    children: React.ReactNode;

    defaultOpen?: boolean;

    scrollable?: boolean;

    maxHeight?: number;
};

export default function FilterSection({
    title,
    children,
    defaultOpen = false,
    scrollable = false,
    maxHeight = 180,
}: Props) {
    const [expanded, setExpanded] = useState(defaultOpen);

    const toggle = () => {
        LayoutAnimation.configureNext(
            LayoutAnimation.Presets.easeInEaseOut
        );

        setExpanded(prev => !prev);
    };

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.header}
                onPress={toggle}
            >
                <Text style={styles.title}>
                    {title}
                </Text>

                <Ionicons
                    name={
                        expanded
                            ? "chevron-up"
                            : "chevron-down"
                    }
                    size={18}
                    color="#272727"
                />
            </Pressable>

            {expanded && (
                scrollable ? (
                    <ScrollView
                        style={{
                            maxHeight,
                        }}
                        nestedScrollEnabled
                        showsVerticalScrollIndicator={false}
                    >
                        {children}
                    </ScrollView>
                ) : (
                    <View>
                        {children}
                    </View>
                )
            )}
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#CED2CE",
        paddingBottom: 10,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },

    title: {
        fontSize: 16,
        fontWeight: "500",
        color: "#272727",
    },

});