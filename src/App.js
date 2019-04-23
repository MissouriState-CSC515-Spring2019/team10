import React, {Component} from 'react';
// import './App.css';
import Header from './components/header.js';
import Navigation from './components/navigation.js';
import Footer from './components/footer.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SunContent from './components/sun.js';
import MoonContent from './components/moon.js';
import EclipseContent from './components/eclipse.js';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="container">
					<Header/>
					<Navigation/>
					<Switch>
							<Route exact path="/" component={SunContent}/>
							<Route path="/sun" component={SunContent}/>
							<Route path="/moon" component={MoonContent}/>
							<Route path="/eclipse" component={EclipseContent}/>
					</Switch>
					<Footer/>
					{/* <hr /> may not need this */}
				</div>
			</Router>
		);
	}
}

export default App;
