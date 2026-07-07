import Header from "@/components/Header";
import SmallFoodCard from "@/components/SmallFoodCard";
import { View, StyleSheet, FlatList } from "react-native";
import { useAppSelector } from "@/store/hooks";

export default function WishList() {

    const wishlistData = useAppSelector((state) => state.wishlist.items);

    return (
        <View style={{ flex: 1 }}>
            {/* header */}
            <View
                style={styles.header}
            >
                <Header count={wishlistData.length} page={"wishlist"}></Header>
            </View>
            {/* -------------------------------------------------------- */}
            <FlatList
                data={wishlistData}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={{ marginHorizontal: 10 }}>
                            <SmallFoodCard item={item} page={"wishlist"}></SmallFoodCard>
                        </View>
                    )
                }
                }

                ItemSeparatorComponent={() => <View style={{
                    height: 1,
                    backgroundColor: "#D5D5D5",
                    marginVertical: 16,
                    marginHorizontal: 10,
                }}>
                </View>}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 25,
        marginHorizontal: 10,
        marginBottom: 20
    },
})