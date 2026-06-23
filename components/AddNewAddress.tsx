import districts from "@/assets/bddistricts.json";
import cities from "@/assets/cities.json";
import subdistricts from "@/assets/upazilas.json";
import PrimaryButton from "@/components/PrimaryButton";
import { Picker } from "@react-native-picker/picker";
import { useMemo, useState } from "react";
import { Alert, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

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


export default function AddNewAddress() {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [district, setDistrict] = useState<string | null>(null);
    const [subDistrictId, setSubDistrictId] = useState("");
    const [subDistrict, setSubDistrict] = useState<string | null>(null);
    const [selectedCity, setSelectedCity] = useState("");
    const [postCode, setPostCode] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [orderNote, setOrderNote] = useState("");
    const [focusedTag, setFocusedTag] = useState(0);
    const [tag, setTag] = useState<string | null>(null);
    const [addTag, setAddTag] = useState(false);
    const [newTag, setNewTag] = useState<string>("");
    


    const filteredSubDistrcts = useMemo(() => {
        return subdistricts.upazilas.filter((upazila) => upazila.district_id === selectedDistrict);
    }, [selectedDistrict]);

    const filteredCities = useMemo(() => {
        return cities.cities.filter((city) => city.subdiscrict_id === subDistrictId);
    }, [subDistrictId]);

    const filterTag = useMemo(() => {
        return addressTag.filter((tag) => initialAddresses.some((address) => address.badge.type === tag.type));
    }, []);

    const [errors, setErrors] = useState({
        name: "",
        mobile: "",
        email: "",
        district: "",
        subDistrict: "",
        postCode: "",
        address: "",
    });

    const addNewTag = (newTag: string) => {
        const tagValue = newTag.replace(/\s+/g, "").toLowerCase();
        const exist = addressTag.some((tag) => tag.type === tagValue);
        if (exist) {
            Alert.alert(
                "Duplicate Tag",
                "Tag name must be unique!"
            );
            setAddTag(false);
            return;
        }
        const newObjTag = {
            id: addressTag.length + 1,
            type: tagValue,
            text: tagValue.charAt(0).toUpperCase() + tagValue.slice(1),
        };
        addressTag.push(newObjTag);
        Alert.alert(
            "Success",
            "Tag added successfully!"
        );
        setAddTag(false);
    }

    const validate = () => {
        const newErrors = {
            name: "",
            mobile: "",
            email: "",
            district: "",
            subDistrict: "",
            postCode: "",
            address: "",
        };

        let isValid = true;

        if (!name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        if (!mobile.trim()) {
            newErrors.mobile = "Mobile is required";
            isValid = false;
        }

        if (email.trim() && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        ) {
            newErrors.email = "Invalid email";
            isValid = false;
        }

        if (!selectedDistrict) {
            newErrors.district = "District is required";
            isValid = false;
        }

        if (!subDistrictId) {
            newErrors.subDistrict = "Sub-District is required";
            isValid = false;
        }

        if (!postCode.trim()) {
            newErrors.postCode = "Post Code is required";
            isValid = false;
        }

        if (!address.trim()) {
            newErrors.address = "Address is required";
            isValid = false;
        }

        setErrors(newErrors);

        return isValid;
    };

    const getNewAddress = () => {

        if (!validate()) return;

        const newAddress = {
            name: name,
            mobile: mobile,
            district: district,
            subDistrict: subDistrict,
            city: selectedCity,
            postCode: postCode,
            address: address,
            email: email,
            ordernote: orderNote,
            addresstag: tag
        };

        console.log(newAddress);
    }




    return (
        <ScrollView showsVerticalScrollIndicator={false}>
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
                            style={[styles.inputField, errors.name && { borderColor: "#b90e0e" }]}
                        />
                        {
                            errors.name ? (
                                <Text style={styles.errorText}>{errors.name}</Text>
                            ) : null
                        }
                    </View>
                    <View>
                        <Text style={styles.inputTitle}>Mobile*</Text>
                        <TextInput
                            value={mobile}
                            placeholder="+88 0"
                            placeholderTextColor={"#828282"}
                            onChangeText={(text: string) => setMobile(text)}
                            style={[styles.inputField, errors.mobile && { borderColor: "#b90e0e" }]}
                        />
                        {
                            errors.mobile ? (
                                <Text style={styles.errorText}>{errors.mobile}</Text>
                            ) : null
                        }
                    </View>
                    {/* districts and sub districts */}
                    <View style={{ flexDirection: "row", gap: 16, justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ width: "48%" }}>
                            <Text style={styles.inputTitle}>District*</Text>
                            <View
                                style={[styles.pickerContainer, errors.district && { borderColor: "#b90e0e" }]}
                            >
                                <Picker
                                    selectedValue={selectedDistrict}
                                    onValueChange={(value) => {
                                        setSelectedDistrict(value);
                                        const district = districts.districts.find((d) => d.id === value);
                                        setDistrict(district?.name ?? null);
                                    }}
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
                            {
                                errors.district ? (
                                    <Text style={styles.errorText}>{errors.district}</Text>
                                ) : null
                            }
                        </View>
                        <View style={{ width: "48%" }}>
                            <Text style={styles.inputTitle}>Sub-District*</Text>
                            <View
                                style={[styles.pickerContainer, errors.subDistrict && { borderColor: "#b90e0e" }]}
                            >
                                <Picker
                                    selectedValue={subDistrictId}
                                    onValueChange={(value) => {
                                        setSubDistrictId(value);
                                        const subDistrict = filteredSubDistrcts.find((s) => s.id === value);
                                        setSubDistrict(subDistrict?.name ?? null);
                                    }
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
                            {
                                errors.subDistrict ? (
                                    <Text style={styles.errorText}>{errors.subDistrict}</Text>
                                ) : null
                            }
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
                                            value={area.name}
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
                                style={styles.pickerContainer}
                            />
                            {
                                errors.postCode ? (
                                    <Text style={styles.errorText}>{errors.postCode}</Text>
                                ) : null
                            }
                        </View>
                    </View>

                    <View>
                        <Text style={styles.inputTitle}>Address*</Text>
                        <TextInput
                            value={address}
                            placeholder="Floor, House, Road, Area..."
                            placeholderTextColor={"#828282"}
                            onChangeText={(text: string) => setAddress(text)}
                            style={[styles.inputField, errors.address && { borderColor: "#b90e0e" }]}
                        />
                        {
                            errors.address ? (
                                <Text style={styles.errorText}>{errors.address}</Text>
                            ) : null
                        }
                    </View>

                    <View>
                        <Text style={styles.inputTitle}>Email<Text style={{ color: '#ADADAD' }}> (optional)</Text></Text>
                        <TextInput
                            value={email}
                            placeholder="@email"
                            placeholderTextColor={"#828282"}
                            onChangeText={(text: string) => setEmail(text)}
                            style={styles.inputField}
                        />
                        {
                            errors.email ? (
                                <Text style={styles.errorText}>{errors.email}</Text>
                            ) : null
                        }
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
                            style={[styles.inputField, { height: 90, borderRadius: 20, textAlignVertical: "top" }]}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 16, marginTop: 16, flexDirection: "row", alignItems: "center", }}>
                    <Pressable
                        onPress={() => setAddTag(true)}
                        style={styles.tagListContainer}>
                        <Image
                            style={{ width: 24, height: 24, tintColor: "#575757" }}
                            source={require("@/assets/images/edit.png")}>
                        </Image>
                        <Text style={{ color: "#ADADAD", fontSize: 14, fontWeight: "400" }}>Add tag</Text>
                    </Pressable>
                    <FlatList
                        data={addressTag}
                        horizontal
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item, index }) => {
                            const isSelected = item.id === focusedTag;

                            const alreadyTaken = filterTag.some((tag) => tag.type === item.type);

                            if (alreadyTaken) {
                                return (<Pressable
                                    style={styles.tagListContainer}
                                >
                                    <View style={[{
                                        borderWidth: 2,
                                        borderColor: "#D7652780",
                                        width: 24,
                                        height: 24,
                                        borderRadius: 50,
                                    }]}>
                                        <View style={[styles.radioButton, { backgroundColor: "#D7652780" }]}>

                                        </View>
                                    </View>
                                    <Text style={{ color: "#57575780", fontSize: 14, fontWeight: "400" }}>{item.text}</Text>
                                </Pressable>)
                            } else {
                                return (<Pressable
                                    onPress={() => {
                                        setFocusedTag(item.id);
                                        setTag(item?.type ?? null);
                                    }}
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
                            }
                        }}
                    >

                    </FlatList>
                </View>
                {
                    addTag ? <View>
                        <Text style={styles.inputTitle}>Add Address Tag</Text>
                        <TextInput
                            value={newTag}
                            placeholder="Make a address tag"
                            placeholderTextColor={"#828282"}
                            onChangeText={(text: string) => setNewTag(text)}
                            style={[styles.inputField]}
                        />
                        <Pressable
                            onPress={() => addNewTag(newTag)}
                            style={{ marginVertical: 16 }}
                        >
                            <PrimaryButton label="Add New Tag"></PrimaryButton>
                        </Pressable>
                    </View> : null
                }
                {/* <Pressable
                    onPress={() => getNewAddress()}
                >
                    <PrimaryButton label={"Save"}></PrimaryButton>
                </Pressable> */}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        borderWidth: 1,
        borderColor: "#CED2CE",
        borderRadius: 8,
        marginHorizontal: 10,
        padding: 20,
        marginTop: 16,
        marginBottom: 16
    },
    listTitle: {
        color: "#1D1D1D",
        fontSize: 22,
        fontWeight: "700",
        marginTop: 20
    },
    inputField: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 56,
        backgroundColor: "#FEFEFE",
        borderWidth: 1,
        borderColor: "#D5D5D5",
    },
    inputTitle: {
        color: "#575757",
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 4
    },
    errorText: {
        color: "#FF3B30",
        fontSize: 12,
        marginTop: 4,
        marginLeft: 10,
    },
    pickerContainer: {
        borderWidth: 1,
        borderRadius: 38,
        height: 44,
        overflow: "hidden",
        justifyContent: "center",
        paddingHorizontal: 16,
        backgroundColor: "#FEFEFE",
        borderColor: "#D5D5D5",
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
    },
    radioButton: {
        width: 12,
        height: 12,
        backgroundColor: "#D76527",
        marginHorizontal: "auto",
        marginVertical: "auto",
        borderRadius: 50,
    },
})