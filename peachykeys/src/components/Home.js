import React from 'react';
import './Home.css';
import keySwitch from '../images/key-switch.png';
import coverKeyboard from '../images/cover-keyboard.png';
import BuildKeyboard from './BuildKeyboard';

function Home() {
	return (
	
		<div className="app">
				
			<section className="header-keyboard">
				<BuildKeyboard />
			</section>
			<div className="home">
				<section className="about">
					<h1>About</h1>
					<p>
						We are a couple from California and we build Custom-to-order
						mechanical keyboards ranging from budget to high end. We also aim to
						educate and provide resources for those new to the Mech space. In
						the future we hope to offer limited Peachy Keys merchandize like
						mats and accessories.
					</p>
				</section>
				<section className="how-it-works">
					<h1>How It Works</h1>
					<p>
						Mechanical keyboards come in all shapes and sizes. There are 3 major
						elements in a custom keyboard that make it unique and special to
						each owner.
					</p>
				</section>
				<section className="curved-boxes">
					<div className="curved-box">
						<h2>Case</h2>
						<p>
							The case is what houses your components. There are many styles and
							types: aluminum, plastic, (no number pad), 80% and many more
							options. A{' '}
						</p>
					</div>
					<div className="curved-box">
						<h2>Case</h2>
						<p>
							The case is what houses your components. There are many styles and
							types: aluminum, plastic, (no number pad), 80% and many more
							options. A{' '}
						</p>
					</div>
					<div className="curved-box">
						<h2>Case</h2>
						<p>
							The case is what houses your components. There are many styles and
							types: aluminum, plastic, (no number pad), 80% and many more
							options. A{' '}
						</p>
					</div>
					<div className="curved-box">
						<img className="cover-keyboard" src={coverKeyboard} />
					</div>
					<div className="curved-box">
						<img className="cover-keyboard" src={coverKeyboard} />
					</div>
					<div className="curved-box">
						<img className="cover-keyboard" src={coverKeyboard} />
					</div>
				</section>
				<section className="theres-more">
					<h1>Theres More</h1>
					<p></p>
				</section>
			</div>
		</div>
	);
}

export default Home;
