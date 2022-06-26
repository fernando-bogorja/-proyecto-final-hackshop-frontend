import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: {
        _id: "",
        name: "",
        lastName: "",
        password: "",
        email: "",
    },
    token: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const query = axios({
                method: "POST",
                url: "http://localhost:3001/api/user/login",
                data: {
                    email: action.payload.email,
                    password: action.payload.password,
                }
            }).then(res => {
                return res.data;
            }).catch(err => {
                console.log(err);
            });

            state.user = {
                _id: query.user._id,
                name: query.user.name,
                lastName: query.user.lastName,
                password: query.user.password,
                email: query.user.email,
            }
            state.token = query.token;
        },
        logoutUser: (state, action) => {
            state.user = {};
            state.token = "";
        }
    },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
