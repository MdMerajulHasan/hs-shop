import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Slider from "@/components/Slider";
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (<ScrollView style={{ backgroundColor: "#fff" }}>
    <View style={{ position: 'relative' }}>
      <View style={{
        zIndex: 1,
        paddingBottom: 20,
      }}>
        <Navbar></Navbar>
        <SearchBar></SearchBar>
      </View>
      <View style={{ zIndex: 0, marginTop:-20 }}>
        <Slider></Slider>
      </View>
    </View>
    <Text style={{ marginTop: 300, textAlign: "center" }}>Home</Text>
  </ScrollView>
  );
}


