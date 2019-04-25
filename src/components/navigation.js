import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
	render() {
		return (
			<div className="navigation">
				<Link to={"/sun?date=04/25/2019"}>
					<button id="nav-left-button">Sun Times</button>
				</Link>
				<Link to={"/moon?date=04/25/2019"}>
					<button id="nav-center-button">Moon Times</button>
				</Link>
				<Link to={'/eclipse'}>
					<button id="nav-right-button">Solar Eclipse</button>
				</Link>
			</div>
		);
	}
}

export default Navigation;
