import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/reducers/carReducer.js';
import styles from "./CatalogPage.module.scss"
import Card from "../../components/Card/Card.jsx";
 const CatalogPage = () => {
	const dispatch = useDispatch();
	const { carsList, loading, error } = useSelector((state) => state.cars);

	useEffect(() => {
		dispatch(fetchCars());
	}, [dispatch]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div className={styles.list}>
			{carsList.map((car) => (
				<Card {...car} key={car.id}/>
			))}
		</div>
	);
};

export default CatalogPage;

