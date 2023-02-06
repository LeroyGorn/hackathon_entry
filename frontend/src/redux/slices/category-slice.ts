import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICategoryState } from "../../types/products.type";

const initialState: ICategoryState = {
  category: [],
};

export const CategorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const result = {
        category: [...state.category, action.payload],
      };
      return result;
    },
    remove: (state, action: PayloadAction<string>) => {
      const category = state.category.filter((el) => el !== action.payload);
      return { category };
    },

    get: (state, action: PayloadAction<ICategoryState>) => {
      state.category = [...action.payload.category];
      return state;
    },
  },
});

export const { get, remove, add } = CategorySlice.actions;
export const showCategory = (state: { categories: ICategoryState }) =>
  state.categories;
export default CategorySlice.reducer;
