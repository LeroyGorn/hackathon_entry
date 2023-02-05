import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../types/products.type';

const initialState: IProduct[] = [];

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

		get: (state, action: PayloadAction<IProduct[]>) => {
			state = [...action.payload];
			return state;
		},
	},
});

export const { get } = productSlice.actions;
export const showProducts = (state: IProduct[]) => state;
export default productSlice.reducer;
