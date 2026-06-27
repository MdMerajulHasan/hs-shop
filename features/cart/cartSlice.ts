import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/assets/products";

type cartState = {
    items: Product[];
};

const initialState: cartState = {
    items: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {
            const exists = state.items.find((item) => item.id === action.payload.id);
            if (!exists) {
                state.items.push(action.payload);
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        clearCart(state) {
            state.items = [];
        }
    }
});

export const { addToCart, removeFromCart, clearCart, } = cartSlice.actions;

export default cartSlice.reducer;