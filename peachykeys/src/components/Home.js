import React from 'react';
import './Home.css';
import keySwitch from '../images/key-switch.png';
import coverKeyboard from '../images/cover-keyboard.png';
import BuildKeyboard from './BuildKeyboard';

import HowItWorks from './HowItWorks';
import About from './About';

function Home() {
	return (
	
		<div className="app">
				
			<section className="header-keyboard">
				<BuildKeyboard />
			</section>

			<div className="howsection">
				<HowItWorks/>
			</div>

			<section className="theres-more">
				<h1>Theres More</h1>
				<p>cool</p>
			</section>

			<div className="about">
				<About/>
			</div>



		</div>
	);
}

export default Home;
