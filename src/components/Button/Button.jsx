import React from 'react';
import classNames from 'classnames';
import styles from "./Button.module.scss"

const Button = ({onClick, className, children}) => {

	return (
		<button onClick={onClick} className={classNames(styles.button, className)}>{children}</button>
	);
};


export default Button;

