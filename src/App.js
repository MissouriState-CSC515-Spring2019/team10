import React, { Component } from 'react';
// import './App.css';
import Header from './components/header.js';
import Navigation from './components/navigation.js';
import Footer from './components/footer.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SunContent from './components/sun.js';
import MoonContent from './components/moon.js';
import EclipseContent from './components/eclipse.js';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="container">
					<Switch>
						<Route exact path="/" component={SunContent} />
						<Route path="/sun/:date?" component={SunContent} />
						<Route path="/moon/:date?" component={MoonContent} />
						<Route path="/eclipse/:year?" component={EclipseContent} />
					</Switch>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
