import districts from "@/assets/bddistricts.json";
import cities from "@/assets/cities.json";
import subdistricts from "@/assets/upazilas.json";
import PrimaryButton from "@/components/PrimaryButton";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useMemo, useState } from "react";
import { Alert, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { addAddress, Address, addTag, } from "@/features/address/addressSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

type Props = {
    addresses: Address[];
    setAddressId: (id: string) => void;
}

export default function AddNewAddress({ addresses, setAddressId }: Props) {
    const userData = useAppSelector((state) => state.auth.currentUser);
    const addressTag = useAppSelector((state) => state.address.tags);


    const [name, setName] = useState(userData?.name ?? "");
    const [mobile, setMobile] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [district, setDistrict] = useState<string | null>(null);
    const [subDistrictId, setSubDistrictId] = useState("");
    const [subDistrict, setSubDistrict] = useState<string | null>(null);
    const [selectedCity, setSelectedCity] = useState("");
    const [postCode, setPostCode] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState(userData?.email ?? "");
    const [orderNote, setOrderNote] = useState("");
    const [focusedTag, setFocusedTag] = useState("");
    const [tag, setTag] = useState<string | null>(null);
    const [showAddTag, setShowAddTag] = useState(false);
    const [newTag, setNewTag] = useState<string>("");
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (userData?.name) {
            setName(userData.name);
        }
        if (userData?.email) {
            setEmail(userData.email);
        }
    }, [userData]);

    const filteredSubDistrcts = useMemo(() => {
        return subdistricts.upazilas.filter((upazila) => upazila.district_id === selectedDistrict);
    }, [selectedDistrict]);

    const filteredCities = useMemo(() => {
        return cities.cities.filter((city) => city.subdiscrict_id === subDistrictId);
    }, [subDistrictId]);

    const filterTag = useMemo(() => {
        return new Set(addresses.map(address => address.tagId));
    }, [addresses]);

    const [errors, setErrors] = useState({
        name: "", mobile: "", email: "", district: "", subDistrict: "", postCode: "", address: "",
    });

    const addNewTag = (newTag: string) => {
        const value = newTag.trim();

        if (!value) {
            Alert.alert("Error", "Please enter a tag name.");
            return;
        }

        const exists = addressTag.some(
            tag => tag.name.toLowerCase() === value.toLowerCase()
        );

        if (exists) {
            Alert.alert(
                "Duplicate Tag",
                "Tag name must be unique!"
            );
            return;
        }

        dispatch(
            addTag({
                id: value.toLowerCase().replace(/\s+/g, "-"),
                name: value,
            })
        );

        Alert.alert(
            "Success",
            "Tag added successfully!"
        );

        setNewTag("");
        setShowAddTag(false);
    };

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

        if (!tag) {
            Alert.alert("Error", "Please select an address tag.");
            return;
        }

        const newAddress: Address = {
            id: Date.now().toString(),

            name,
            mobile,
            email: email || undefined,

            district: district ?? "",
            subDistrict: subDistrict ?? "",
            city: selectedCity,
            postCode,

            address,

            tagId: tag,

            isDefault: addresses.length === 0, // Making the first address default

            createdAt: new Date().toISOString(),
        };

        dispatch(addAddress(newAddress));
        setAddressId(newAddress.tagId);
        Alert.alert("Success", "Address added successfully!");
    };




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
                            placeholderTextColor={"#ADADAD"}
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
                            keyboardType="phone-pad"
                            placeholderTextColor={"#ADADAD"}
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
                                    style={{ color: district ? "#272727" : "#ADADAD" }}
                                    dropdownIconColor={district ? "#272727" : "#ADADAD"}

                                >
                                    <Picker.Item label="Select" value="" color="#ADADAD" />
                                    {
                                        districts.districts.map((district) => (<Picker.Item
                                            key={district.id}
                                            label={`${district.name}`}
                                            value={district.id}
                                            color="#272727"
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
                                    style={{ color: subDistrict? "#272727": "#ADADAD" }}
                                    dropdownIconColor={subDistrict ? "#272727" : "#ADADAD"}

                                >
                                    <Picker.Item label="Select" value=""  color="#ADADAD"/>
                                    {
                                        filteredSubDistrcts.map((subDis) => (<Picker.Item
                                            key={subDis.id}
                                            label={`${subDis.name}`}
                                            value={subDis.id}
                                            color={"#272727"}
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
                                    style={{ color: selectedCity? "#272727": "#ADADAD" }}
                                    dropdownIconColor={selectedCity ? "#272727" : "#ADADAD"}

                                >
                                    <Picker.Item label="Select" value="" color="#ADADAD" />
                                    {
                                        filteredCities.map((area) => (<Picker.Item
                                            key={area.id}
                                            label={`${area.name}`}
                                            value={area.name}
                                            color="#272727"
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
                                keyboardType="numeric"
                                placeholderTextColor={"#ADADAD"}
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
                            placeholder="Village / Floor, House, Road, Area..."
                            placeholderTextColor={"#ADADAD"}
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
                            placeholderTextColor={"#ADADAD"}
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
                        onPress={() => setShowAddTag(true)}
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

                            const alreadyTaken = filterTag.has(item.id);

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
                                    <Text style={{ color: "#57575780", fontSize: 14, fontWeight: "400" }}>{item.name}</Text>
                                </Pressable>)
                            } else {
                                return (<Pressable
                                    onPress={() => {
                                        setFocusedTag(item.id);
                                        setTag(item?.id ?? null);
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
                                    <Text style={{ color: isSelected ? "" : "#575757", fontSize: 14, fontWeight: "400" }}>{item.name}</Text>
                                </Pressable>)
                            }
                        }}
                    >

                    </FlatList>
                </View>
                {
                    showAddTag ? <View>
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
                <Pressable
                    onPress={() => getNewAddress()}
                >
                    <PrimaryButton label={"Save"}></PrimaryButton>
                </Pressable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        borderWidth: 1,
        backgroundColor: "#F5F5F5",
        borderColor: "#D5D5D5",
        borderRadius: 8,
        marginHorizontal: 10,
        padding: 20,
        marginVertical: 20,
       
    },
    listTitle: {
        color: "#1D1D1D",
        fontSize: 22,
        fontWeight: "700",
    },
    inputField: {
        color: "#272727",
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 56,
        backgroundColor: "#FEFEFE",
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
        borderColor: "#D5D5D5"
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