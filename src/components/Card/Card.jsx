import React from 'react';
import styles from "./Card.module.scss"
import Button from "../Button/Button.jsx";
import classNames from "classnames";

const Card = ({make, model, img,year, rentalPrice, address, rentalCompany, type,id,functionalities }) => {
	const addressParts = address.split(',').map(part => part.trim());
	const country = addressParts[addressParts.length - 1];
	const city = addressParts[addressParts.length - 2];

	const formattedAddress = `${country} | ${city} | ${rentalCompany}`;
	const secondLine = `${type} | ${model} | ${id} | ${functionalities[0]}`;

	return (
		<div className={styles.card}>
			<img src={img} alt={make} className={styles.image}/>
			<div className={styles.header}>
				<div className={classNames(styles.text, styles["text-wrapper"])}>
					<h2 className={styles.text}>{make}</h2>
					<p className={styles.model}>{model},</p>
					<p className={styles.text}> {year}</p>
				</div>
				<div className={styles.price}>{rentalPrice}</div>
				<div className={styles.info}>
					<div>{formattedAddress}</div>
					<div>{secondLine}</div>
				</div>

			</div>


			<Button className={styles.button}>Learn more</Button>
		</div>
	);
};


export default Card;

