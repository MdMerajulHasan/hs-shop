import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function SearchBar() {
  const [query, setQuery] = useState<string | undefined>("");

  return (
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder="Search food, dring & more..."
        value={query}
        onChangeText={setQuery}
      ></TextInput>
      <View style={styles.searchIcon}>
        <Ionicons color={"#272727"} size={24} name="search-outline"></Ionicons>
        <Text style={{ color: "#272727" }}>Search</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    borderColor: "#D5D5D5",
    borderWidth: 1,
    marginHorizontal: 10,
    paddingVertical: 2,
    paddingLeft: 16,
    paddingRight: 2,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between"

  },
  searchIcon: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    gap: 8,
    backgroundColor: "#E9E9E9",
    borderRadius: 50
  }
})