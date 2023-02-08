import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserProducts } from "../../types/products.type";

interface IUserProductsState {
  userProducts: IUserProducts[];
}

const initialState: IUserProducts[] = [];

export const UserProductSlice = createSlice({
  name: "user_product",
  initialState,
  reducers: {
    get: (state, action: PayloadAction<IUserProducts[]>) => {
      state = [...action.payload];
      return state;
    },
  },
});

export const { get } = UserProductSlice.actions;
export const showUserProducts = (state: IUserProductsState) =>
  state.userProducts;
export default UserProductSlice.reducer;
