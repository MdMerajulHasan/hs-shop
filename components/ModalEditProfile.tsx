import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import * as ImagePicker from "expo-image-picker";
import { Dispatch, SetStateAction, useState } from "react";
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import Header from "./Header";
import PrimaryButton from "./PrimaryButton";

type Props = {
  userName: string;
  userImage: string | null;
  onClose: () => void;
  setUpdatedName: Dispatch<SetStateAction<string>>;
  setUpdatedImage: Dispatch<SetStateAction<string | null>>;
};

export default function ModalEditProfile({
  userName,
  userImage,
  onClose,
  setUpdatedName,
  setUpdatedImage,
}: Props) {
  const [name, setName] = useState(userName);
  const [image, setImage] = useState<string | null>(userImage);

  const handleUpdate = () => {
    setUpdatedName(name);
    setUpdatedImage(image);
    onClose();
  };

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View style={styles.header}>
        <Header page="editProfile" isModal onClose={onClose} />
      </View>
      <BottomSheetScrollView
        contentContainerStyle={{
          paddingBottom: 30,
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          onPress={pickImage}
          style={{ alignItems: "center", marginBottom: 20, marginTop: 10 }}
        >
          {image ? (
            <Image
              source={{ uri: image }}
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
              }}
            />
          ) : (
            <View
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                backgroundColor: "#E9E9E9",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="camera-outline" size={40} color="#575757" />
            </View>
          )}

          <Text
            style={{
              marginTop: 10,
              color: "#D76527",
              fontWeight: "600",
            }}
          >
            Change Photo
          </Text>
        </Pressable>

        <View style={{ marginBottom: 16 }}>
          <Text style={styles.text}>Name</Text>
          <TextInput
            style={styles.inputContainer}
            value={name}
            onChangeText={setName}
            placeholderTextColor="#575757"
            keyboardType="default"
            autoCapitalize="none"
          />
        </View>

        <View>
          <Pressable
            onPress={() => {
              handleUpdate();
            }}
          >
            <PrimaryButton label={"Update"}></PrimaryButton>
          </Pressable>
        </View>
      </BottomSheetScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#D5D5D5",
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "#272727",
    marginBottom: 10,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    gap: 1,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#575757",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 38,
    color: "#575757",
    fontSize: 16,
    fontWeight: "400",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#575757",
    marginBottom: 4,
    textAlign: "left",
  },
});
