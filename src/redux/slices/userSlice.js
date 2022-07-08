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
        registerUser: (state, action) => {
            toast(`Usuario registrado con éxito`, toastConfig);
        },
        addAddress: (state, action) => {
            state.data.address = action.payload;
            toast(`Dirección agregada con éxito`, toastConfig);
        },
        addOrder: (state, action) => {
            state.data.orders.push(action.payload);
            toast(`Pedido realizado con éxito`, toastConfig);
        },
        logoutUser: (state, action) => {
            state.token = null;
            state.data = null;
            toast(`Sesión cerrada`, toastConfig);
        },
        handleError: (state, action) => {
            toast(action.payload, toastConfig);
        }
    },
});

export const { setUser, logoutUser, registerUser, addAddress, handleError, addOrder } = userSlice.actions;

export default userSlice.reducer;
