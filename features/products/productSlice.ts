import { createSlice } from "@reduxjs/toolkit";
import { Product, PRODUCTS } from "@/assets/products";

type productState = {
    items: Product[];
}

const initialState: productState = {
    items: PRODUCTS,
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    }
});

export default productSlice.reducer;