import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Address {
    id: string;

    name: string;
    mobile: string;
    email?: string;

    district: string;
    subDistrict: string;
    city: string;
    postCode: string;

    address: string;

    addressTag: string;

    isDefault: boolean;

    createdAt: string;
    updatedAt?: string;
}

interface AddressState {
    items: Address[];
}

const initialState: AddressState = {
    items: [],
};

const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        addAddress(state, action: PayloadAction<Address>) {
            state.items.push(action.payload);
        },

        updateAddress(state, action: PayloadAction<Address>) {
            const index = state.items.findIndex(
                item => item.id === action.payload.id
            );

            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },

        deleteAddress(state, action: PayloadAction<string>) {
            state.items = state.items.filter(
                item => item.id !== action.payload
            );
        },

        setDefaultAddress(state, action: PayloadAction<string>) {
            state.items.forEach(item => {
                item.isDefault = item.id === action.payload;
            });
        },
    },
});

export const {
    addAddress,
    updateAddress,
    deleteAddress,
    setDefaultAddress,
} = addressSlice.actions;

export default addressSlice.reducer;