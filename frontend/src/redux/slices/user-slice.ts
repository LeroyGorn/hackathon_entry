import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "../../types/auth.types";

const initialState: IUserState = {
  email: "",
  first_name: "",
  last_name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    edit: (state, action: PayloadAction<IUserState>) => {
      state = action.payload;
      return state;
    },

    remove: (state) => {
      state = { email: "", first_name: "", last_name: "" };
      return state;
    },

    get: (state, action: PayloadAction<IUserState>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { get, edit, remove } = userSlice.actions;
export const showUser = (state: IUserState) => state;
export default userSlice.reducer;
