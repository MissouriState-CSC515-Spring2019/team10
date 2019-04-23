import React, {Component} from 'react';

class Header extends Component {
	constructor() {
		super();

		let today = new Date(),
			date =
				today.getMonth() +
				1 +
				'-' +
				today.getDate() +
				'-' +
				today.getFullYear();

		this.state = {
			date: date
		};
	}

	render() {
		return (
			<div className="header">
				<span id="dateHeader">{this.state.date}</span>
			</div>
		);
	}
}

export default Header;
