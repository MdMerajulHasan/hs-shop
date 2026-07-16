import { Product } from "@/assets/products";
import BestDeals from "@/components/BestDeals";
import BookYourTable from "@/components/BookYourTable";
import Category from "@/components/Category";
import ComboSlider from "@/components/ComboSlider";
import FoodCard from "@/components/FoodCard";
import Items from "@/components/Items";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import PopularItems from "@/components/PopularItems";
import SearchBar from "@/components/SearchBar";
import Slider from "@/components/Slider";
import TitleBar from "@/components/TitleBar";
import { useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

type HomeData = {
  specialItems: Product[];
  productsToShow: Product[];
  comboData: Product[];
  bestDeals: Product[];
  popularItems: Product[];
};


export default function Index() {
  const [loading, setLoading] = useState(true);
  const PRODUCTS = useAppSelector((s) => s.products.items);
  const [homeData, setHomeData] = useState<HomeData>({
    specialItems: [],
    productsToShow: [],
    comboData: [],
    bestDeals: [],
    popularItems: [],
  });

  useEffect(() => {
    setLoading(true);

    const productsToShow = PRODUCTS.filter(
      (p) => p.itemType !== "Special" && !p.isCombo
    );

    const specialItems = PRODUCTS.filter(
      (p) => p.itemType === "Special"
    );

    const comboData = PRODUCTS.filter(
      (p) => p.isCombo
    );

    const bestDeals = productsToShow
      .filter((p) => p.isAvailable)
      .sort((a, b) => b.discount - a.discount)
      .slice(0, 5);

    const popularItems = productsToShow
      .filter((p) => p.isPopular)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);

    setHomeData({
      specialItems,
      productsToShow,
      comboData,
      bestDeals,
      popularItems,
    });

    setLoading(false);
  }, [PRODUCTS]);



  // const specialItems = useMemo(() => {
  //   return PRODUCTS.filter((food) => {
  //     return food.itemType === "Special";
  //   });
  // }, [PRODUCTS]);

  // const productsToShow = useMemo(() => {
  //   return PRODUCTS.filter((p) => p.itemType !== "Special" && !p.isCombo);
  // }, [PRODUCTS]);

  // const comboData = useMemo(
  //   () => PRODUCTS.filter((p) => p.isCombo),
  //   [PRODUCTS],
  // );

  // const bestDeals = useMemo(() => {
  //   return productsToShow
  //     .filter((item) => item.isAvailable)
  //     .sort((a, b) => b.discount - a.discount)
  //     .slice(0, 5);
  // }, [productsToShow]);

  // const popularItems = useMemo(() => {
  //   return productsToShow
  //     .filter((item) => item.isPopular)
  //     .sort((a, b) => b.rating - a.rating)
  //     .slice(0, 5);
  // }, [productsToShow]);



  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#D76527" />
      </View>
    );
  }

  return (
    <View>
      <View
        style={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingVertical: 15,
          zIndex: 1,
          backgroundColor: "#F5F5F5",
        }}
      >
        <Navbar></Navbar>
      </View>
      <View style={{ marginTop: -20, zIndex: 0 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <View>
                {/* searchbar */}
                <View
                  style={{
                    paddingTop: 15,
                    paddingBottom: 16,
                    backgroundColor: "#F5F5F5",
                    zIndex: 200,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                >
                  <SearchBar></SearchBar>
                </View>

                {/* Carousel */}
                <View style={{ zIndex: 1, marginTop: -16 }}>
                  <Slider></Slider>
                </View>
              </View>

              {/* category */}
              <Category></Category>
              {/* <Button
                title="Show Onboarding Again"
                onPress={resetOnboarding}
              /> */}
              {/* best deals */}
              <BestDeals bestDeals={homeData?.bestDeals}></BestDeals>

              {/* items */}
              <Items specialItems={homeData?.specialItems}></Items>

              {/* book your table */}
              <View
                style={{
                  marginHorizontal: 10,
                  backgroundColor: "#070C12",
                  borderRadius: 20,
                }}
              >
                <Menu></Menu>
                <BookYourTable></BookYourTable>
              </View>

              {/* polular items */}
              <PopularItems popularItems={homeData?.popularItems}></PopularItems>
              {/* combo */}
              <ComboSlider comboItems={homeData?.comboData}></ComboSlider>

              {/* all items title */}
              <View style={{ marginHorizontal: 10 }}>
                <TitleBar label={"All Items"}></TitleBar>
              </View>
            </>
          }
          data={homeData?.productsToShow}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginHorizontal: 10,
            gap: 20,
          }}
          contentContainerStyle={{
            paddingBottom: 190, // space for bottom nav
          }}
          renderItem={({ item, index }) => (
            <FoodCard isVertical={true} item={item} index={index}></FoodCard>
          )}
        ></FlatList>
      </View>
    </View>
  );
}
