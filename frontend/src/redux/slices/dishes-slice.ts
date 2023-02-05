import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IDish } from "../../types/products.type";

const initialState: IDish[] = [];

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IDish>) => {
      return [...state, action.payload];
    },

    edit: (state, action: PayloadAction<IDish>) => {
      const todoIndex = state.findIndex(
        (el) => el.name === action.payload.name
      );
      if (todoIndex !== -1) {
        state[todoIndex] = action.payload;
      }
      return state;
    },

    remove: (state, action: PayloadAction<string>) => {
      return state.filter((el) => el.name !== action.payload);
    },

    get: (state, action: PayloadAction<IDish[]>) => {
      state = [...action.payload];
      return state;
    },
  },
});

export const { get } = dishesSlice.actions;
export const showDishes = (state: IDish[]) => state;
export default dishesSlice.reducer;
