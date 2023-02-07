import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../slices/category-slice";
import productSlice from "../slices/product-slice";
import userSlice from "../slices/user-slice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    user: userSlice,
    categories: categorySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
