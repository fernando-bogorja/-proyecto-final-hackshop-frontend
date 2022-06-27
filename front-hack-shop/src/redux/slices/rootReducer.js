import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  cart: cartSlice,
  user: userSlice,
});

export default rootReducer;
