import React from 'react';
import './Header.css';
import peachyLogo from '../images/peachy-logo.png';

function Header() {
	return (
		<div className="navbar">
			<img className="header-logo" src={peachyLogo} />
			<nav className="header">
				<a>How It Works</a>
				<a>Commissions</a>
				<a>Contact Us</a>
			</nav>
		</div>
	);
}

export default Header;
