import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../cart/cartSlice";

export type PaymentMethod = | "cash" | "bkash" | "nagad" | "rocket" | "upay" | "card";

export type OrderStatus = "any" | "pending" | "preparing" | "on_the_way" | "delivered" | "cancelled";

interface Tracking {
    confirmed?: string;
    preparing?: string;
    outForDelivery?: string;
    delivered?: string;
}

export interface Order {
    id: string;
    createdAt: string;

    items: CartItem[];

    subtotal: number;
    deliveryFee: number;
    total: number;
    vatTax: number, 
    discount: number,
    specialDiscount: number,
    freeShippingDiscount: number,
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
    branchId?: string;
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
                    order.tracking.confirmed ??= new Date().toISOString();
                    break;

                case "preparing":
                    order.tracking.confirmed ??= order.createdAt;
                    order.tracking.preparing ??= new Date().toISOString();
                    break;

                case "on_the_way":
                    order.tracking.confirmed ??= order.createdAt;
                    order.tracking.preparing ??= new Date().toISOString();
                    order.tracking.outForDelivery ??= new Date().toISOString();
                    break;

                case "delivered":
                    order.tracking.confirmed ??= order.createdAt;
                    order.tracking.preparing ??= new Date().toISOString();
                    order.tracking.outForDelivery ??= new Date().toISOString();
                    order.tracking.delivered ??= new Date().toISOString();
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
                confirmed: order.tracking.confirmed ?? order.createdAt,
                preparing: undefined,
                outForDelivery: undefined,
                delivered: undefined,
            };
        },
    }
})

export const { placeOrder, updateOrderStatus, updatePaymentStatus, cancelOrder } = orderSlice.actions;

export default orderSlice.reducer;