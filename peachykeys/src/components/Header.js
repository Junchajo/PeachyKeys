import React from 'react';
import './Header.css';
import peachyLogo from '../images/peachy-logo.png';

function Header() {
	return (
		<div className="navbar">
			<img className="header-logo" src={peachyLogo} />
			<nav className="header">
				<ul>
					<li><a href="https://www.w3schools.com">How It Works</a></li>
					<li><a href="https://www.w3schools.com">Commissions</a></li>
					<li><a href="https://www.w3schools.com">Contact Us</a></li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
