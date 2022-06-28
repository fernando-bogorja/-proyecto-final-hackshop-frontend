import { combineReducers } from "redux";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";
import checkoutSlice from "./checkOutSlice";

const rootReducer = combineReducers({
  cart: cartSlice,
  user: userSlice,
  checkout: checkoutSlice,
});

export default rootReducer;
/*
token : checkout
userSlice:  userCheckout
*/
