import { configureStore } from "@reduxjs/toolkit";
//import productsReducer, { productsFetch } from "../features/productSlice";
import { productsApi } from "../features/productsApi";
import cartSlice from "../features/cartSlice";
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
