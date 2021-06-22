import React from 'react';
import './Header.css';
import peachyLogo from '../images/peachy-logo.png';
import Simple from '../images/peachy-simple.png'

function Header() {
	return (
		<div className="navbar">
			<img className="header-logo" src={peachyLogo} />
			<nav className="header">
				<ul>
					<li><a href="#contactsection">Contact</a></li>
					<li><a href="#aboutsection">Build</a></li>
					<li><a href="#howsection">How It Works</a></li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
