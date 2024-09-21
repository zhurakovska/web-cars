import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import carReducer from './reducers/carReducer';
import favoriteReducer from './reducers/favoriteReducer';

const store = configureStore({
	reducer:{
		cars: carReducer,
		favorites: favoriteReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export default store;
