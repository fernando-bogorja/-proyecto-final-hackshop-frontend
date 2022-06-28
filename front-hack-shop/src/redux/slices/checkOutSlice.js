import { createSlice } from "@reduxjs/toolkit";
//import axios from "axios";

const initialState = {
  chekout: {},
};

/*
token : checkout
userSlice:  userCheckout
*/
const userCheckout = createSlice({
  name: "userCheckout",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.chekout = action.payload.chekout;
      //state.data = action.payload.userCheckout;
    },
  },
});

export const { setData } = userCheckout.actions;

export default userCheckout.reducer;
