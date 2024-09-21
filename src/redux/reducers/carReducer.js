import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const carSlice = createSlice({
	name: 'cars',
	initialState: {
		carsList: [],
		loading: false,
		error: null,
	},
	reducers: {
		fetchCarsStart(state) {
			state.loading = true;
		},
		fetchCarsSuccess(state, action) {
			state.loading = false;
			state.carsList = action.payload;
		},
		fetchCarsFailure(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { fetchCarsStart, fetchCarsSuccess, fetchCarsFailure } = carSlice.actions;


export const fetchCars = () => async(dispatch) => {
	dispatch(fetchCarsStart());
	try {
		const response = await axios.get("https://66ee80d33ed5bb4d0bf11b33.mockapi.io/api/cars/advert")
		dispatch(fetchCarsSuccess(response.data));
	} catch (error){
		dispatch(fetchCarsFailure(error.message))
	}
}

export default carSlice.reducer;
