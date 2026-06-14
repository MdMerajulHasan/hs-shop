import BestDeals from "@/components/BestDeals";
import BookYourTable from "@/components/BookYourTable";
import Category from "@/components/Category";
import ComboSlider from "@/components/ComboSlider";
import FoodCard from "@/components/FoodCard";
import Items from "@/components/Items";
import Navbar from "@/components/Navbar";
import PopularItems from "@/components/PopularItems";
import SearchBar from "@/components/SearchBar";
import Slider from "@/components/Slider";
import TitleBar from "@/components/TitleBar";
import { FlatList, View } from "react-native";

export default function Index() {

  const allItemsData = [
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
    {
      id: 5,
      name: "Classic Cheese Pizza",
      image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
      price: 15.99,
      oldPrice: 24.99,
      rating: 4.8,
      discount: 36,
      isFavorite: true
    },
    {
      id: 6,
      name: "Spicy Chicken Burger",
      image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection1.png",
      price: 12.50,
      oldPrice: 18.50,
      rating: 4.7,
      discount: 32,
      isFavorite: false
    },
    {
      id: 7,
      name: "Delicious And Crispy Potato French Fries",
      image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
      price: 18.88,
      oldPrice: 32.88,
      rating: 4.9,
      discount: 54,
      isFavorite: false
    },
    {
      id: 8,
      name: "Classic Cheese Pizza",
      image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection1.png",
      price: 15.99,
      oldPrice: 24.99,
      rating: 4.8,
      discount: 36,
      isFavorite: true
    },
    {
      id: 9,
      name: "Spicy Chicken Burger",
      image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
      price: 12.50,
      oldPrice: 18.50,
      rating: 4.7,
      discount: 32,
      isFavorite: false
    },
    {
      id: 10,
      name: "Delicious And Crispy Potato French Fries",
      image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection1.png",
      price: 18.88,
      oldPrice: 32.88,
      rating: 4.9,
      discount: 54,
      isFavorite: false
    },
    {
      id: 11,
      name: "Classic Cheese Pizza",
      image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
      price: 15.99,
      oldPrice: 24.99,
      rating: 4.8,
      discount: 36,
      isFavorite: true
    },
    {
      id: 12,
      name: "Spicy Chicken Burger",
      image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection1.png",
      price: 12.50,
      oldPrice: 18.50,
      rating: 4.7,
      discount: 32,
      isFavorite: false
    },
    {
      id: 13,
      name: "Delicious And Crispy Potato French Fries",
      image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
      price: 18.88,
      oldPrice: 32.88,
      rating: 4.9,
      discount: 54,
      isFavorite: false
    },
    {
      id: 14,
      name: "Classic Cheese Pizza",
      image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection1.png",
      price: 15.99,
      oldPrice: 24.99,
      rating: 4.8,
      discount: 36,
      isFavorite: true
    },
    {
      id: 15,
      name: "Spicy Chicken Burger",
      image: "https://d.hs-bd.com/wp-content/uploads/2026/06/appsection2.png",
      price: 12.50,
      oldPrice: 18.50,
      rating: 4.7,
      discount: 32,
      isFavorite: false
    },

  ]

  return (
    <View style={{zIndex: 0}}>
      {/* <Navbar></Navbar> */}
      <View style={{
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingVertical: 20,
      }}>
        <Navbar></Navbar>
      </View>
      <FlatList
        ListHeaderComponent={
          <>
            <View>
              {/* searchbar */}
              <View style={{
                paddingBottom: 16,
                backgroundColor: "#F5F5F5",
                zIndex: 200,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20
              }}>
                <SearchBar></SearchBar>
              </View>

              {/* Carousel */}
              <View style={{ zIndex: 1, marginTop: -16 }}>
                <Slider></Slider>
              </View>

            </View>

            {/* category */}
            <Category></Category>

            {/* best deals */}
            <BestDeals></BestDeals>

            {/* items */}
            <Items></Items>

            {/* book your table */}
            <View style={{ marginHorizontal: 10 }}>
              <BookYourTable></BookYourTable>
            </View>

            {/* polular items */}
            <PopularItems></PopularItems>
            {/* combo */}
            <ComboSlider></ComboSlider>

            {/* all items title */}
            <View style={{ marginHorizontal: 10 }}>
              <TitleBar label={"All Items"}></TitleBar>
            </View>
          </>
        }

        data={allItemsData}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginHorizontal: 10,
          gap: 20,
        }}
        renderItem={({ item, index }) =>
          (<FoodCard isVertical={true} key={index} item={item} index={item.id} ></FoodCard>)}
        ListFooterComponent={<View style={{ height: 165 }} />}
      >
      </FlatList>
    </View>
  );
}


