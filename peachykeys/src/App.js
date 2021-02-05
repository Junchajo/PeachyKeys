import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import BuildKeyboard from './components/BuildKeyboard';

function App() {
	return (
		<Router>
			<div>
				<Header />
				<BuildKeyboard />
				<Switch>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
