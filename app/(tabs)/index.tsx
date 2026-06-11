import AllItems from "@/components/AllItems";
import BestDeals from "@/components/BestDeals";
import Category from "@/components/Category";
import Items from "@/components/Items";
import Navbar from "@/components/Navbar";
import PopularItems from "@/components/PopularItems";
import SearchBar from "@/components/SearchBar";
import Slider from "@/components/Slider";
import { ScrollView, View } from "react-native";

export default function Index() {
  return (
  <ScrollView style={{ backgroundColor: "#fff" }}>
    {/* navbar and carousel */}
    <View style={{ position: 'relative' }}>
      {/* navbar and searchbar */}
      <View style={{
        zIndex: 1,
        paddingBottom: 20,
      }}>
        <Navbar></Navbar>
        <SearchBar></SearchBar>
      </View>

      {/* Carousel */}
      <View style={{ zIndex: 0, marginTop:-20 }}>
        <Slider></Slider>
      </View>

    </View>

      {/* category */}
      <Category></Category>

      {/* best deals */}
      <BestDeals></BestDeals>
      
      {/* items */}
      <Items></Items>

      {/* polular items */}
      <PopularItems></PopularItems>

      {/* all items */}
      <AllItems></AllItems>
  </ScrollView>
  );
}


