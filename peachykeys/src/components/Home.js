import React from 'react';
import './Home.css';
import keySwitch from '../images/key-switch.png';

function Home() {
	return (
		<div className="home">
			<section className="about">
				<h1>About</h1>
				<p>
					We are a couple from California and we build Custom-to-order
					mechanical keyboards ranging from budget to high end. We also aim to
					educate and provide resources for those new to the Mech space. In the
					future we hope to offer limited Peachy Keys merchandize like mats and
					accessories.
				</p>
				<div className="key-switch">
					<img src={keySwitch} />
					<img src={keySwitch} />
					<img src={keySwitch} />
					<img src={keySwitch} />
				</div>
			</section>
			<section className="how-it-works">
				<h1>How It Works</h1>
				<p>
					We are a couple from California and we build Custom-to-order
					mechanical keyboards ranging from budget to high end. We also aim to
					educate and provide resources for those new to the Mech space. In the
					future we hope to offer limited Peachy Keys merchandize like mats and
					accessories.
				</p>
			</section>
		</div>
	);
}

export default Home;
