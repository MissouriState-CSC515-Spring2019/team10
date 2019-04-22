import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/header.js';
// import Navigation from './components/navigation.js';
import Footer from './components/footer.js';
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
					<nav className="navbar">
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
					</nav>
					<Footer />
					{/* <hr /> may not need this */}

					<Switch>
						<div className="content">
							<Route exact path="/" component={SunContent} />
							<Route path="/sun" component={SunContent} />
							<Route path="/moon" component={MoonContent} />
							<Route path="/eclipse" component={EclipseContent} />
						</div>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
