import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/assets/products";

type wishlistState = {
    items: Product[];
}

const initialState: wishlistState = {
    items: []
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist(state, action: PayloadAction<Product>) {
            state.items.push(action.payload)
        },
        removeFromWishlist(state, action: PayloadAction<string>) {
            state.items = state.items.filter(item => item.id !== action.payload)
        }

    }
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;