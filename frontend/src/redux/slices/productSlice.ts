import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ProductState {
	id: string;
  name: string;
	description: string;
	measurement: string;
}

const initialState: ProductState[] = [];

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		// add: (state, action: PayloadAction<ProductState>) => {
		// 	return [...state, action.payload];
		// },

		// check: (state, action: PayloadAction<string>) => {
		// 	const todoIndex = state.findIndex((el) => el.id === action.payload);
		// 	if (todoIndex !== -1) {
		// 		state[todoIndex].completed = !state[todoIndex].completed;
		// 	}
		// 	return state;
		// },

		// edit: (state, action: PayloadAction<ProductState>) => {
		// 	const todoIndex = state.findIndex((el) => el.id === action.payload.id);
		// 	if (todoIndex !== -1) {
		// 		state[todoIndex] = action.payload;
		// 	}
		// 	return state;
		// },

		// remove: (state, action: PayloadAction<string>) => {
		// 	return state.filter((el) => el.id !== action.payload);
		// },

		get: (state, action: PayloadAction<ProductState[]>) => {
			state = [...action.payload];
			return state;
		},
	},
});

export const { get } = productSlice.actions;

export default productSlice.reducer;
