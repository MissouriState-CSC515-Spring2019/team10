import React, { Component } from 'react';
// import './App.css';
import Header from './components/header.js';
import Navigation from './components/navigation.js';
import Footer from './components/footer.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SunContent from './components/sun.js';
import MoonContent from './components/moon.js';
import EclipseContent from './components/eclipse.js';

class App extends Component {
	constructor() {
		super();

		this.state = {
			date: null
		};
	}

	dateFunc = date1 => {
		let date = date1;
		this.setState({ date: date });
	};

	render() {
		return (
			<Router>
				<div className="container">
					{this.state && this.state.date && (
						<div>
							<Header date={this.state.date} />
							<Navigation date={this.state.date} />
						</div>
					)}
					<Switch>
						<Route
							exact
							path="/"
							render={props => <SunContent {...props} dateF={this.dateFunc} />}
						/>
						<Route
							path="/sun/:date?"
							render={props => <SunContent {...props} dateF={this.dateFunc} />}
						/>
						<Route
							path="/moon/:date?"
							render={props => <MoonContent {...props} dateF={this.dateFunc} />}
						/>
						<Route
							path="/eclipse/:date?"
							render={props => (
								<EclipseContent {...props} dateF={this.dateFunc} />
							)}
						/>
					</Switch>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
