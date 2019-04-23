import React, { Component } from 'react';
// import './App.css';
import Header from './components/header.js';
// import Navigation from './components/navigation.js';
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
					<Header />
					{/* <Navigation /> */}
					<ul className="navbar-nav">
						<li>
							<Link to={'/'} className="nav-link">
								Sun Times
							</Link>
						</li>
						<li>
							<Link to={'/moon'} className="nav-link">
								Moon Times
							</Link>
						</li>
						<li>
							<Link to={'/eclipse'} className="nav-link">
								Solar Eclipse
							</Link>
						</li>
					</ul>
					<Footer />
					<hr />

					<Switch>
						<div className="content">
							<Route exact path="/" component={SunContent} />
							<Route path="/sun/?:date?" component={SunContent} />
							<Route path="/moon/?:date?" component={MoonContent} />
							<Route path="/eclipse/?:date?" component={EclipseContent} />
						</div>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
