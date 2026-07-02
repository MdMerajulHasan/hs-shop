import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
    id: string;
    name: string;
    email: string;
    username: string;
    image?: string | null;
    role: string;
    isSupplier: boolean;
    isExpert: boolean;
    token: string;
    refreshToken: string;
};


type UserState = {
    currentUser: User | null;
    loading: boolean;
    error: string | null;
};

const initialState: UserState = {
    currentUser: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state, action: PayloadAction<User>) {
            state.currentUser = action.payload;
        },
        logout(state) {
            state.currentUser = null;
        },
        updateProfile(state, action: PayloadAction<Partial<User>>) {
            if (state.currentUser) {
                state.currentUser = {
                    ...state.currentUser,
                    ...action.payload
                }
            }
        }
    }
});

export const { login, logout, updateProfile } = userSlice.actions;

export default userSlice.reducer;