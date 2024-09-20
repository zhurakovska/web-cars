import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<Link to="/" >
					Car Rental
				</Link>
				<ul >
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/catalog">Catalog</Link>
					</li>
					<li>
						<Link to="/favorites">Favorites</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
