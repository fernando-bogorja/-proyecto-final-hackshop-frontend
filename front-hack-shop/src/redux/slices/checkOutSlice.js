import { createSlice } from "@reduxjs/toolkit";
//import axios from "axios";

const initialState = {
  address: {
    phone: "",
    line_one: "",
    line_two: "",
    city: "",
    department: "",
    zipCode: "",
    country: "",
  },
  payment: {},
  cart: [],
};

/*
token : checkout
userSlice:  userCheckout
*/
const userCheckout = createSlice({
  name: "userCheckout",
  initialState,
  reducers: {
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    }
  },
});

export const { setPayment, setAddress } = userCheckout.actions;

export default userCheckout.reducer;
