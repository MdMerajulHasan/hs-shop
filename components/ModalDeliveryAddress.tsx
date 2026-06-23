import { Modal, ScrollView, View, StyleSheet } from "react-native";
import PreviousAddress from "./PreviousAddress";
import AddNewAddress from "./AddNewAddress";
import Header from "./Header";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "./PrimaryButton";

type Props = {
    visible: boolean;
    onClose: () => void;
}

export default function ModalDeliveryAddress({ visible, onClose }: Props) {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: "rgba(0,0,0,0.4)",
                    justifyContent: "flex-end"
                }}
            >
                <View
                    style={{
                        height: "100%",
                        backgroundColor: "#fff",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        paddingHorizontal: 10,
                        paddingBottom: 60
                    }}
                >
                    <SafeAreaView
                        edges={["left", "right", "bottom"]}
                    >
                        <View
                            style={styles.header}
                        >
                            <Header isModal={true} onClose={onClose} page={"deliveryaddress"}></Header>
                        </View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                        >
                            <PreviousAddress></PreviousAddress>
                            <AddNewAddress></AddNewAddress>

                            <View style={{marginBottom: 16, marginHorizontal: 16}}>
                                <PrimaryButton label={"Save"}></PrimaryButton>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 20,
        marginHorizontal: 10,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#D5D5D5"
    },
})