import districts from "@/assets/bddistricts.json";
import cities from "@/assets/cities.json";
import subdistricts from "@/assets/upazilas.json";
import FilterIcon from "@/components/FilterIcon";
import Header from "@/components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import { useMemo, useState } from "react";
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const cartData = [
    {
        id: 1,
        name: "Delicious And Crispy Potato French Fries",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
        price: 18.88,
        oldPrice: 32.88,
        rating: 4.9,
        discount: 54,
        isFavorite: false
    },
    {
        id: 2,
        name: "Classic Cheese Pizza",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection1.png",
        price: 15.99,
        oldPrice: 24.99,
        rating: 4.8,
        discount: 36,
        isFavorite: true
    },
    {
        id: 3,
        name: "Spicy Chicken Burger",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
        price: 12.50,
        oldPrice: 18.50,
        rating: 4.7,
        discount: 32,
        isFavorite: false
    },
    {
        id: 4,
        name: "Delicious And Crispy Potato French Fries",
        image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection1.png",
        price: 18.88,
        oldPrice: 32.88,
        rating: 4.9,
        discount: 54,
        isFavorite: false
    },
]
const addressTag = [
    { id: 1, type: "home", text: "Home" },
    { id: 2, type: "office", text: "Office" },
    { id: 3, type: "school", text: "School" },
    { id: 4, type: "university", text: "University" },
    { id: 5, type: "playground", text: "Play Ground" }
];

const initialAddresses = [
    {
        id: 1,
        name: "Bayzid Islam",
        address: "House - 18, Avenue - 1, Block - C, House - 18, Sector - 2, Mirpur, Dhaka, Avenue 1, Dhaka 1216",
        postcode: "1216",
        phone: "+880 1737 880513",
        badge: {
            type: "home",
            text: "Home"
        },
        isDefault: true
    },
    {
        id: 2,
        name: "Bayzid Islam",
        address: "House - 18, Avenue - 1, Block - C, House - 18, Sector - 2, Mirpur, Dhaka, Avenue 1, Dhaka 1216",
        postcode: "1216",
        phone: "+880 1737 880513",
        badge: {
            type: "home2",
            text: "Home"
        },
        isDefault: false
    },
    {
        id: 3,
        name: "Bayzid Islam",
        address: "House - 18, Avenue - 1, Block - C, House - 18, Sector - 2, Mirpur, Dhaka, Avenue 1, Dhaka 1216",
        postcode: "1216",
        phone: "+880 1737 880513",
        badge: {
            type: "office",
            text: "Office"
        },
        isDefault: false
    }
]

export default function PlaceOrder() {

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [selected, setSelected] = useState(initialAddresses[0].id);
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [subDistrict, setSubDistrict] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [postCode, setPostCode] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [orderNote, setOrderNote] = useState("");
    const [focusedTag, setFocusedTag] = useState(0);

    const filteredSubDistrcts = useMemo(() => {
        return subdistricts.upazilas.filter((upazila) => upazila.district_id === selectedDistrict);
    }, [selectedDistrict]);

    const filteredCities = useMemo(() => {
        return cities.cities.filter((city) => city.subdiscrict_id === subDistrict);
    }, [subDistrict]);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.header}>
                <Header count={cartData.length} page={"placeorder"}></Header>
                <Pressable>
                    <FilterIcon></FilterIcon>
                </Pressable>
            </View>
            <View style={styles.orderedItemsList}>
                <Text style={styles.listTitle}>Products</Text>
                <View style={styles.itemContainer}>
                    {
                        cartData.map((item, index) => <View key={item.id} style={styles.item}>
                            <View>
                                <Text style={styles.itemTitle}>{item.name}</Text>
                                <Text style={styles.itemTitle}>2 X 1</Text>
                            </View>
                            <Text style={styles.itemPrice}>${item.price}</Text>
                        </View>)
                    }
                </View>
            </View>

            <View style={styles.addressContainer}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.listTitle}>Select Shipping Address</Text>
                </View>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={initialAddresses}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        const isSelected = selected === item.id;
                        return (<Pressable
                            onPress={() => setSelected(item.id)} style={[styles.addressCard, { borderColor: isSelected ? "#D76527" : "#E9E9E9", backgroundColor: isSelected ? "#FBF0E9" : "#FEFEFE" }]}>
                            <Ionicons
                                color={isSelected ? "#D76527" : "#ADADAD"}
                                style={{ marginHorizontal: "auto" }}
                                size={24} name="checkmark-circle">
                            </Ionicons>
                            {
                                item.isDefault ? <Text style={[styles.addressType, { color: isSelected ? "#D76527" : "#1D1D1D" }]}>Last Delivery</Text> :
                                    <Text style={[styles.addressType, { color: isSelected ? "#D76527" : "#1D1D1D" }]}>{item.badge?.text}
                                    </Text>
                            }
                            <Text style={styles.address}>{item.address}</Text>
                        </Pressable>)
                    }}
                ></FlatList>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.listTitle}>Add New Address</Text>
                <View style={{ gap: 16, marginTop: 24 }}>
                    <View>
                        <Text style={styles.inputTitle}>Name*</Text>
                        <TextInput
                            value={name}
                            placeholder="Name"
                            placeholderTextColor={"#828282"}
                            onChangeText={(text: string) => setName(text)}
                            secureTextEntry
                            style={styles.inputField}
                        />
                    </View>
                    <View>
                        <Text style={styles.inputTitle}>Mobile*</Text>
                        <TextInput
                            value={mobile}
                            placeholder="+88 0"
                            placeholderTextColor={"#828282"}
                            onChangeText={(text: string) => setMobile(text)}
                            secureTextEntry
                            style={styles.inputField}
                        />
                    </View>
                    {/* districts and sub districts */}
                    <View style={{ flexDirection: "row", gap: 16, justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ width: "48%" }}>
                            <Text style={styles.inputTitle}>District*</Text>
                            <View
                                style={styles.pickerContainer}
                            >
                                <Picker
                                    selectedValue={selectedDistrict}
                                    onValueChange={(value) => setSelectedDistrict(value)}
                                    style={{ color: "#ADADAD" }}
                                    dropdownIconColor="#E9E9E9"

                                >
                                    <Picker.Item label="Select" value="" />
                                    {
                                        districts.districts.map((district) => (<Picker.Item
                                            key={district.id}
                                            label={`${district.name}`}
                                            value={district.id}
                                        />))
                                    }
                                </Picker>
                            </View>
                        </View>
                        <View style={{ width: "48%" }}>
                            <Text style={styles.inputTitle}>Sub-District*</Text>
                            <View
                                style={styles.pickerContainer}
                            >
                                <Picker
                                    selectedValue={subDistrict}
                                    onValueChange={(value) =>
                                        setSubDistrict(value)
                                    }
                                    style={{ color: "#ADADAD" }}
                                    dropdownIconColor="#E9E9E9"

                                >
                                    <Picker.Item label="Select" value="" />
                                    {
                                        filteredSubDistrcts.map((subDis) => (<Picker.Item
                                            key={subDis.id}
                                            label={`${subDis.name}`}
                                            value={subDis.id}
                                        />))
                                    }
                                </Picker>
                            </View>
                        </View>
                    </View>

                    {/* city and post code */}
                    <View style={{ flexDirection: "row", gap: 16, justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ width: "48%" }}>
                            <Text style={styles.inputTitle}>City</Text>
                            <View
                                style={styles.pickerContainer}
                            >
                                <Picker
                                    selectedValue={selectedCity}
                                    onValueChange={(value) => setSelectedCity(value)}
                                    style={{ color: "#ADADAD" }}
                                    dropdownIconColor="#E9E9E9"

                                >
                                    <Picker.Item label="Select" value="" />
                                    {
                                        filteredCities.map((area) => (<Picker.Item
                                            key={area.id}
                                            label={`${area.name}`}
                                            value={area.id}
                                        />))
                                    }
                                </Picker>
                            </View>
                        </View>
                        <View style={{ width: "48%" }}>
                            <Text style={styles.inputTitle}>Post Code*</Text>
                            <TextInput
                                value={postCode}
                                placeholder="Post Code"
                                placeholderTextColor={"#828282"}
                                onChangeText={(text: string) => setPostCode(text)}
                                secureTextEntry
                                style={styles.pickerContainer}
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={styles.inputTitle}>Address*</Text>
                        <TextInput
                            value={address}
                            placeholder="Floor, House, Road, Area..."
                            placeholderTextColor={"#828282"}
                            onChangeText={(text: string) => setAddress(text)}
                            secureTextEntry
                            style={styles.inputField}
                        />
                    </View>

                    <View>
                        <Text style={styles.inputTitle}>Email<Text style={{ color: '#ADADAD' }}> (optional)</Text></Text>
                        <TextInput
                            value={email}
                            placeholder="@email"
                            placeholderTextColor={"#828282"}
                            onChangeText={(text: string) => setEmail(text)}
                            secureTextEntry
                            style={styles.inputField}
                        />
                    </View>

                    <View>
                        <Text style={styles.inputTitle}>Order Notes<Text style={{ color: "#ADADAD" }}> (optional)</Text></Text>
                        <TextInput
                            value={orderNote}
                            multiline={true}
                            numberOfLines={2}
                            placeholder="Write text...."
                            placeholderTextColor={"#828282"}
                            onChangeText={(text: string) => setOrderNote(text)}
                            secureTextEntry
                            style={[styles.inputField, { height: 90, borderRadius: 20, textAlignVertical: "top" }]}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 100, marginTop: 16, flexDirection: "row", alignItems: "center", }}>
                    <View style={styles.tagListContainer}>
                        <Image style={{width: 24, height: 24, tintColor: "#575757"}} source={require("@/assets/images/edit.png")}></Image>
                        <Text style={{ color: "#ADADAD", fontSize: 14, fontWeight: "400" }}>Add tag</Text>
                    </View>
                    <FlatList
                        data={addressTag}
                        horizontal
                        renderItem={({ item, index }) => {
                            const isSelected = item.id === focusedTag;
                            return (<Pressable
                                onPress={() => setFocusedTag(item.id)}
                                style={styles.tagListContainer}
                            >
                                <View style={[{
                                    borderWidth: 2,
                                    borderColor: isSelected ? "#D76527" : "#828282",
                                    width: 24,
                                    height: 24,
                                    borderRadius: 50,
                                }]}>

                                    {
                                        isSelected &&
                                        <View style={styles.radioButton}>

                                        </View>
                                    }
                                </View>
                                <Text style={{ color: isSelected ? "" : "#575757", fontSize: 14, fontWeight: "400" }}>{item.text}</Text>
                            </Pressable>)
                        }}
                    >

                    </FlatList>
                </View>
            </View>
        </ScrollView>
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
    orderedItemsList: {
        padding: 20,
        marginTop: 27,
        borderWidth: 1,
        borderColor: "#D76527",
        backgroundColor: "#D765271A",
        marginHorizontal: 10,
        borderRadius: 10,
        gap: 16,
    },
    listTitle: {
        color: "#1D1D1D",
        fontSize: 22,
        fontWeight: "700",
        marginTop: 20
    },
    itemTitle: {
        color: "#272727",
        fontSize: 12,
        fontWeight: "400"
    },
    itemPrice: {
        color: "#272727",
        fontSize: 16,
        fontWeight: "600"
    },
    itemContainer: {
        gap: 20
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    addressContainer: {
        marginHorizontal: 10,
        borderRadius: 8,
        backgroundColor: "#F5F5F5",
        borderWidth: 2,
        borderColor: "#CED2CE",
        padding: 20,
        marginTop: 40,
    },
    addressType: {
        fontSize: 14,
        fontWeight: "600",
        textAlign: "center",
    },
    address: {
        color: "#828282",
        fontSize: 10,
        fontWeight: "400",
        textAlign: "center",
    },
    addressCard: {
        maxWidth: 140,
        borderWidth: 1,
        borderColor: "#E9E9E9",
        borderRadius: 8,
        gap: 4,
        padding: 8,
        marginRight: 10
    },
    formContainer: {
        borderWidth: 1,
        borderColor: "#CED2CE",
        borderRadius: 8,
        marginHorizontal: 10,
        padding: 20,
        marginTop: 16,
        marginBottom: 16
    },
    inputTitle: {
        color: "#575757",
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 4
    },
    inputField: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 56,
        backgroundColor: "#FEFEFE",
        borderWidth: 1,
        borderColor: "#D5D5D5",
    }, pickerContainer: {
        borderWidth: 1,
        borderRadius: 38,
        height: 44,
        overflow: "hidden",
        justifyContent: "center",
        paddingHorizontal: 16,
        backgroundColor: "#FEFEFE",
        borderColor: "#D5D5D5",
    },
    radioButton: {
        width: 12,
        height: 12,
        backgroundColor: "#D76527",
        marginHorizontal: "auto",
        marginVertical: "auto",
        borderRadius: 50,
    },
    tagListContainer: {
        flexDirection: "row",
        marginRight: 10,
        gap: 3,
        alignItems: "center",
        backgroundColor: "#FEFEFE",
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E9E9E9"
    }
})