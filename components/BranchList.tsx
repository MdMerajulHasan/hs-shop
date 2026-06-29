import React from "react";
import {
    ScrollView,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSelectedBranch } from "@/features/branch/branchSlice";

type Props = {
    onSelect: () => void;
};

export default function BranchList({ onSelect }: Props) {
    const branchData = useAppSelector((state) => state.branch.items);
    const dispatch = useAppDispatch();

    return (
        <View style={styles.container}>
            {/* <View style={styles.handle} /> */}

            <Text style={styles.title}>Select Branch</Text>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {branchData.map((branch) => (
                    <Pressable
                        key={branch.id}
                        style={({ pressed }) => [
                            styles.branchItem,
                            pressed && styles.pressed,
                        ]}
                        onPress={() => {
                            dispatch(setSelectedBranch(branch));
                            onSelect()
                        }}
                    >
                        <Text style={styles.branchName}>
                            {branch.name}
                        </Text>

                        <Text style={styles.address}>
                            {branch.address}
                        </Text>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingTop: 12,
        paddingHorizontal: 20,
        maxHeight: "80%",
    },

    handle: {
        width: 50,
        height: 5,
        borderRadius: 5,
        backgroundColor: "#6A6A6A",
        alignSelf: "center",
        marginBottom: 10,
    },

    title: {
        color: "#272727",
        fontSize: 22,
        fontWeight: "600",
        marginBottom: 16,
        textAlign: "center"
    },

    scrollContent: {
        paddingBottom: 24,
    },

    branchItem: {
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderBottomColor: "#2D2D2D",
    },

    pressed: {
        opacity: 0.6,
    },

    branchName: {
        color: "#272727",
        fontSize: 17,
        fontWeight: "600",
    },

    address: {
        color: "#575757",
        fontSize: 14,
        marginTop: 6,
        lineHeight: 20,
    },
});