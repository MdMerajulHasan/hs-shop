import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../cart/cartSlice";

export type PaymentMethod = | "cash" | "bkash" | "nagad" | "rocket" | "upay" | "card";

export type OrderStatus = | "pending" | "preparing" | "on_the_way" | "delivered" | "cancelled";

interface Tracking {
    confirmed: boolean;
    preparing: boolean;
    outForDelivery: boolean;
    delivered: boolean;
}

export interface Order {
    id: string;
    createdAt: string;

    items: CartItem[];

    subtotal: number;
    deliveryFee: number;
    total: number;

    paymentMethod: PaymentMethod;
    paymentStatus: "pending" | "paid";
    paymentId?: string;

    status: OrderStatus;

    tracking: Tracking;

    deliveryAddress: {
        name: string | undefined;
        phone: string | undefined;
        address: string | undefined;
    };

    note?: string;
}

const initialState: { items: Order[] } = {
    items: [],
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        placeOrder(state, action: PayloadAction<Order>) {
            state.items.push(action.payload);
        },
        updateOrderStatus(
            state,
            action: PayloadAction<{
                id: string;
                status: OrderStatus;
            }>
        ) {
            const order = state.items.find(
                item => item.id === action.payload.id
            );

            if (!order) return;

            order.status = action.payload.status;

            switch (action.payload.status) {
                case "pending":
                    order.tracking.confirmed = true;
                    break;

                case "preparing":
                    order.tracking.preparing = true;
                    break;

                case "on_the_way":
                    order.tracking.outForDelivery = true;
                    break;

                case "delivered":
                    order.tracking.delivered = true;
                    break;
            }
        },
        updatePaymentStatus(
            state,
            action: PayloadAction<{
                id: string;
                paymentStatus: "pending" | "paid";
            }>
        ) {
            const order = state.items.find(
                item => item.id === action.payload.id
            );

            if (order) {
                order.paymentStatus = action.payload.paymentStatus;
            }
        },
        cancelOrder(
            state,
            action: PayloadAction<string>
        ) {
            const order = state.items.find(
                item => item.id === action.payload
            );

            if (!order) return;

            order.status = "cancelled";

            order.tracking = {
                confirmed: true,
                preparing: false,
                outForDelivery: false,
                delivered: false,
            };
        },
    }
})

export const { placeOrder, updateOrderStatus, updatePaymentStatus, cancelOrder } = orderSlice.actions;

export default orderSlice.reducer;