import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../slices/productSlice';

export const store = configureStore({
	reducer: {
		todos: productSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;