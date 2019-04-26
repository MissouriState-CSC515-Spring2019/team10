import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
	constructor(props) {
		super(props);

		let fullDate = this.props.date;
		fullDate = fullDate.replace(/\//g, '-');

		this.state = {
			date: fullDate
		};
	}

	render() {
		return (
			<div className="navigation">
				<Link to={`/sun/${this.state.date}`}>
					<button id="nav-left-button">Sun Times</button>
				</Link>
				<Link to={`/moon/${this.state.date}`}>
					<button id="nav-center-button">Moon Times</button>
				</Link>
				<Link to={`/eclipse/${this.state.date}`}>
					<button id="nav-right-button">Solar Eclipse</button>
				</Link>
			</div>
		);
	}
}

export default Navigation;
