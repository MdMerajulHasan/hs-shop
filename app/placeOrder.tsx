import districts from "@/assets/bddistricts.json";
import cities from "@/assets/cities.json";
import subdistricts from "@/assets/upazilas.json";
import FilterIcon from "@/components/FilterIcon";
import Header from "@/components/Header";
import PrimaryButton from "@/components/PrimaryButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useMemo, useState } from "react";
import { Alert, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";


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

const deliVeriTimes = [
    {
        id: 1,
        label: "Now",
    },
    {
        id: 2,
        label: "Next Hours",
    },
    {
        id: 3,
        label: "Custom",
    }

]

const paymentMethod = [
    { id: 1, type: "bkash", title: "BKash", image: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/bkash.png" } },
    { id: 2, type: "nagad", title: "Nagad", image: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/nogod-scaled.png" } },
    { id: 3, type: "rocket", title: "Rocket", image: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/rocket.png" } },
    { id: 4, type: "upay", title: "Upay", image: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/upay-scaled.png" } },
    { id: 5, type: "card", title: "Visa Card", image: { uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/card.png" } },
]

export default function PlaceOrder() {

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [selected, setSelected] = useState(initialAddresses[0].id);
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
    const [focusedTime, setFocusedTime] = useState(0);
    const [tag, setTag] = useState<string | null>(null);
    const [addTag, setAddTag] = useState(false);
    const [newTag, setNewTag] = useState<string>("");
    const [time, setTime] = useState(new Date());
    const [showTime, setShowTime] = useState(false);
    const [date, setDate] = useState(new Date());
    const [showDate, setShowDate] = useState(false);
    const [cashOn, setCashOn] = useState(false);
    const [payTypeId, setPayTypeId] = useState(0);
    const [payType, setPayType] = useState("");

    const currentDate = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
    };

    const currentTime = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    }).format(time);

    const filteredSubDistrcts = useMemo(() => {
        return subdistricts.upazilas.filter((upazila) => upazila.district_id === selectedDistrict);
    }, [selectedDistrict]);

    const filteredCities = useMemo(() => {
        return cities.cities.filter((city) => city.subdiscrict_id === subDistrict);
    }, [subDistrict]);

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
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            {/* header section */}
            <View style={styles.header}>
                <Header count={cartData.length} page={"placeorder"}></Header>
                <Pressable>
                    <FilterIcon></FilterIcon>
                </Pressable>
            </View>
            {/* products / ordered item list section */}
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
            {/* saved addresses section */}
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
            {/* add a new address section */}
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
            {/* custom / set delivery time section */}
            <View style={styles.formContainer}>
                <Text style={styles.listTitle}>Custom Delivery Time</Text>
                <View style={{ gap: 16, marginTop: 24 }}>
                    <View>
                        <FlatList
                            data={deliVeriTimes}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item, index }) => {
                                const isSelected = item.id === focusedTime;

                                return (
                                    <Pressable
                                        onPress={() => {
                                            setFocusedTime(item.id);
                                            setDate(new Date());
                                            setTime(new Date());
                                        }}
                                        style={[styles.tagListContainer, { backgroundColor: isSelected ? "#D7652733" : "#F5F5F5", borderColor: isSelected ? "" : '#FEFEFE' }]}
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
                                        <Text
                                            style={{ color: "#575757", fontSize: 14, fontWeight: "400" }}>
                                            {item.label}
                                        </Text>
                                    </Pressable>
                                )
                            }}
                        >
                        </FlatList>
                    </View>
                    <View>
                        <View style={styles.dateTimeContainer}>
                            <View style={{ width: "50%" }}>
                                <Text style={styles.text}>Date*</Text>
                                <Pressable
                                    onPress={() => {
                                        if (focusedTime === 3) {
                                            setShowDate(true);
                                        }
                                    }} style={styles.inputContainer}>
                                    <Text style={{ color: "#575757" }}>
                                        {currentDate.day + "-" + currentDate.month + "-" + currentDate.year}
                                    </Text>
                                    <Image style={{ width: 18, height: 18, tintColor: "#575757" }} source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/calendar-2.png" }}></Image>
                                </Pressable>
                            </View>
                            <View style={{ width: "50%" }}>
                                <Text style={styles.text}>Time*</Text>
                                <Pressable onPress={() => {
                                    if (!(focusedTime === 1)) {
                                        setShowTime(true)
                                    }
                                }} style={styles.inputContainer}>
                                    <Text style={{ color: "#575757" }}>{currentTime}</Text>
                                    <Image style={{ width: 18, height: 18, tintColor: "#575757" }} source={{ uri: "https://d.hs-bd.com/wp-content/uploads/2026/06/clock.png" }}></Image>
                                </Pressable>
                            </View>
                        </View>
                        <View>
                            <Text style={[styles.inputTitle, { marginTop: 0 }]}>Order Notes<Text style={{ color: "#ADADAD" }}> (optional)</Text></Text>
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
                </View>
            </View>
            <View style={{ marginBottom: 50, marginHorizontal: 10 }}>
                <Text style={[styles.listTitle]}>Payment Method</Text>
                <View style={styles.cashOnContainer}>
                    <Pressable
                        onPress={() => {
                            setCashOn(!cashOn);
                            setPayTypeId(0);
                        }}
                        style={{ width: 24, height: 28, padding: 2 }}
                    >
                        <View style={[{
                            borderWidth: 2,
                            borderColor: cashOn ? "#D76527" : "#828282",
                            width: 24,
                            height: 24,
                            borderRadius: 50,
                        }]}>

                            {
                                cashOn &&
                                <View style={styles.radioButton}>

                                </View>
                            }
                        </View>
                    </Pressable>
                    <View style={{ flex: 1, gap: 6, justifyContent: "flex-start", alignItems: "flex-start" }}>
                        <Text
                            style={{ color: "#404341", fontSize: 16, fontWeight: "600", textAlign: "left" }}>
                            Cash on delivery (Time 8-12 Hours)
                        </Text>
                        <Text style={{ color: "#7F8280", fontSize: 14, fontWeight: "400", textAlign: "left" }}>
                            Pay with cash upon delivery / পণ্য ডেলিভারির সময় নগদে মূল্য পরিশোধ
                        </Text>
                    </View>
                </View>
                <View>
                    <FlatList
                        data={paymentMethod}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={{ gap: 16 }}
                        renderItem={({ item, index }) => {
                            const isSelected = item.id === payTypeId;
                            return (
                                <Pressable
                                    onPress={() => {
                                        setPayTypeId(item.id);
                                        setCashOn(false);
                                        setPayType(item.type);
                                    }}
                                    style={[styles.tagListContainer,
                                    {
                                        width: item.type === "card" ? "100%" : "50%", borderWidth: 1,
                                        borderColor: "#E9E9E9", backgroundColor: "#FEFEFE", borderRadius: 8
                                    }]}
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
                                    <Image style={{ height: 44, width: item.type === "card" ? 165 : "65%" }} source={item.image}></Image>
                                </Pressable>
                            )
                        }}
                    ></FlatList>
                    <Text style={{ color: "#828282", fontSize: 12, fontWeight: "400", marginTop: 10 }}>{`By clicking/Tapping "Place Order", I agree with - Terms and Conditions, Returns Policy, Privacy Policy *`}</Text>
                </View>
            </View>
            {
                (cashOn || (payTypeId !== 0)) && <View
                    style={{
                        borderBottomColor: "#0000",
                        borderColor: "#D5D5D5",
                        borderWidth: 1,
                        marginTop: -20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        zIndex: 1
                    }}
                >
                    <View style={{ paddingHorizontal: 10 }}>

                        <Pressable
                            style={{ marginTop: 20, marginBottom: 40 }}>
                            <PrimaryButton label={"($59.28) Place Order"}></PrimaryButton>
                        </Pressable>
                    </View>
                </View>
            }
            {showDate && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    minimumDate={new Date()}
                    onChange={(event, selectedDate) => {
                        setShowDate(false);

                        if (selectedDate) {
                            setDate(selectedDate);
                        }
                    }}
                />
            )}
            {showTime && (
                <DateTimePicker
                    value={time}
                    mode="time"
                    is24Hour={false}
                    onChange={(event, selectedTime?: Date) => {
                        setShowTime(false);

                        if (!selectedTime) return;

                        const now = new Date();

                        const selectedDateTime = new Date(date);
                        selectedDateTime.setHours(
                            selectedTime.getHours(),
                            selectedTime.getMinutes(),
                            0,
                            0
                        );

                        const isToday =
                            date.toDateString() === now.toDateString();

                        if (isToday && selectedDateTime < now) {
                            alert("Invalid Time, Please select a future time.");
                            return;
                        }

                        setTime(selectedTime);
                    }}
                />
            )}
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
    },
    errorText: {
        color: "#FF3B30",
        fontSize: 12,
        marginTop: 4,
        marginLeft: 10,
    },
    dateTimeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4
    },
    inputContainer: {
        flexDirection: 'row',
        gap: 1,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#D5D5D5",
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 38,
        color: "#575757",
        fontSize: 16,
        fontWeight: "400",
        marginBottom: 20,
        justifyContent: "space-between"
    },
    text: {
        fontSize: 16,
        fontWeight: "500",
        color: "#575757",
        marginBottom: 4,
        textAlign: 'left'
    },
    cashOnContainer: {
        flexDirection: "row",
        gap: 8,
        marginVertical: 20
    }
})