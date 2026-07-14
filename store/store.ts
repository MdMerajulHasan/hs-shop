import addressReducer from "@/features/address/addressSlice";
import branchReducer from "@/features/branch/branchSlice";
import cartReducer from "@/features/cart/cartSlice";
import notificationsReducer from "@/features/notifications/notificationsSlice";
import orderReducer from "@/features/order/orderSlice";
import productReducer from "@/features/products/productSlice";
import userReducer from "@/features/user/userSlice";
import wishlistReducer from "@/features/wishlist/wishlistSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
    auth: userReducer,
    branch: branchReducer,
    products: productReducer,
    order: orderReducer,
    address: addressReducer,
    notification: notificationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
