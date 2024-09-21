import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
	name: 'favorites',
	initialState: {
		favoriteCars: [],
	},
	reducers: {
		addFavorite(state, action) {
			state.favoriteCars.push(action.payload);
		},
		removeFavorite(state, action) {
			state.favoriteCars = state.favoriteCars.filter(
				(car) => car.id !== action.payload.id
			);
		},
	},
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
