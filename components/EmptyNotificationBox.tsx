import { Image, View, StyleSheet, Text } from "react-native";

export default function EmptyNotificationBox() {
    return (
        <View
            style={styles.emptyBox}
        >
            <Image style={{ width: 58, height: 58 }}
                source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/Frame.png" }}>
            </Image>
            <Text style={styles.emptyTitle}>No Notifications</Text>
            <Text style={styles.emptyDescription}>{"We’ll let you know when there will be " + "\n"  + "something to update you."}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    emptyBox: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    emptyTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#272727",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 12
    }, 
    emptyDescription: {
        color: "#797979",
        textAlign: "center",
        fontSize: 14, 
        fontWeight: "400"

    }
}
)