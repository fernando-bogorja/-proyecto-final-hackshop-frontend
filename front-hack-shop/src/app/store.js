import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter/counterSlice";
import productsReducer, { productsFetch } from "../features/productSlice";
import { productsApi } from "../features/productsApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
});

store.dispatch(productsFetch());
