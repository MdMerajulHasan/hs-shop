import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/assets/products";

export type CartItem = Product & {
    quantity: number;
};

type cartState = {
    items: CartItem[];
};

const initialState: cartState = {
    items: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {
            const item = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
        },
        decreaseQuantity(state, action: PayloadAction<string>) {
            const item = state.items.find(
                (item) => item.id === action.payload
            );

            if (!item) return;

            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.items = state.items.filter(
                    (item) => item.id !== action.payload
                );
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
        clearCart(state) {
            state.items = [];
        }
    }
});

export const { addToCart, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;