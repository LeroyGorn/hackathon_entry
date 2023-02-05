import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/product-slice";
import userSlice from "../slices/user-slice";

export const store = configureStore({
  reducer: {
    todos: productSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
