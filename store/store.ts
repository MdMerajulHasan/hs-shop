import cartReducer from "@/features/cart/cartSlice";
import wishlistReducer from "@/features/wishlist/wishlistSlice";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/features/user/userSlice";
import branchReducer from "@/features/branch/branchSlice";
import productReducer from "@/features/products/productSlice"


export const store = configureStore({
    reducer: {
        wishlist: wishlistReducer,
        cart: cartReducer,
        auth: userReducer,
        branch: branchReducer,
        products: productReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;