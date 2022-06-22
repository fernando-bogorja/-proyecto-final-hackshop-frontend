import { configureStore } from "@reduxjs/toolkit";
//import productsReducer, { productsFetch } from "../features/productSlice";
import { productsApi } from "./api-requests/products-req.js";
import cartSlice from "./slices/cartSlice";
//quitar products de store
export const store = configureStore({
  reducer: {
    //products: productsReducer,
    cart: cartSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
});

//store.dispatch(productsFetch());
//store.dispatch(getTotals());
