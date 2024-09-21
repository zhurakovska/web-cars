import React from 'react';
import styles from "./Card.module.scss"
import FavoritePage from "../../pages/FavoritesPage.jsx";

const Card = ({make, model, img}) => {

	return (
		<div className={styles.card}>
			<img src={img} alt={make} className={styles.image}/>
			<h2>{make}</h2>
		</div>
	);
};


export default Card;

