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

    tagId: string;

    isDefault: boolean;

    createdAt: string;
    updatedAt?: string;
}

export interface AddressTag {
    id: string;
    name: string;
}

interface AddressState {
    items: Address[];
    tags: AddressTag[];
}

const initialState: AddressState = {
    items: [],
    tags: [
        { id: "home", name: "Home" },
        { id: "office", name: "Office" },
        { id: "other", name: "Other" },
    ],
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
        addTag(state, action: PayloadAction<AddressTag>) {
            const exists = state.tags.some(
                tag => tag.name.toLowerCase() === action.payload.name.toLowerCase()
            );

            if (!exists) {
                state.tags.push(action.payload);
            }
        },
    },
});

export const {
    addAddress,
    updateAddress,
    deleteAddress,
    setDefaultAddress,
    addTag,
} = addressSlice.actions;

export default addressSlice.reducer;