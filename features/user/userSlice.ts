import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
    id: string;
    name: string;
    email: string;
    phone?: string;
    image?: string;
    address?: string;
    city?: string;
    token?: string; //access token
    isVerified: boolean;
};


const demoUser = {
    id: "1",
    name: "Md Merajul Hasan",
    email: "merajuljim@gmail.com",
    image: "https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/671830664_1764717098216705_5702402513238370206_n.jpg?stp=dst-jpg_tt6&cstp=mx1056x1066&ctp=s1056x1066&_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=rY8SLAoBPccQ7kNvwEgVLyE&_nc_oc=AdqshCKnr28D2jIMfRnVKEgKOQqqE4HCnpRi8ye0eDbQprskceeEVo-XnuK-fr0-_Mo&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=eqaD8WVu0Ies2Sof053t0A&_nc_ss=7b289&oh=00_Af9EnkwTU-yRZv2RjxieK_9swQjfBew4JWTm3lfxIlTQ8Q&oe=6A37FFB6",
    isVerified: true
}

type UserState = {
    currentUser: User | null;
    loading: boolean;
    error: string | null;
};

const initialState: UserState = {
    currentUser: demoUser,
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