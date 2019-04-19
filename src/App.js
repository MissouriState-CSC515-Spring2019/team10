import React, {Component} from 'react';
// import './App.css';
import {
	Route,
	NavLink,
	HashRouter
} from 'react-router-dom';
import Header from './components/header.js';
import Navigation from './components/navigation.js';
import Footer from './components/footer.js';
import SunContent from './components/sun.js';
import MoonContent from './components/moon.js';
import EclipseContent from './components/eclipse.js';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<div className="container">
					<Header/>
					<Navigation/>
					<Footer/>
		
					<div className="content">
						<Route exact path="/" component={SunContent}/>
						<Route path="/moon" component={MoonContent}/>
						<Route path="/eclipse" component={EclipseContent}/>
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;
