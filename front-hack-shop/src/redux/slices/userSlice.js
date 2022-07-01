import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { toastConfig } from "../../theme";

const initialState = {
    token: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.token = action.payload.token;
            state.data = action.payload.user;
            toast(`Bienvenido ${state.data.name}`, toastConfig);
        },
        logoutUser: (state, action) => {
            state.token = null;
            state.data = null;
            toast(`Sesión cerrada`, toastConfig);
        }
    },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
