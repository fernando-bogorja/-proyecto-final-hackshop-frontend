import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    token: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.token = action.payload.token;
        },
        logoutUser: (state, action) => {
            state = null;
        }
    },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
