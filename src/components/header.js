import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
		super(props);

		let today = new Date();
		let date =
			today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear();

		const monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		let longDate =
			monthNames[today.getMonth()] +
			' ' +
			today.getDate() +
			', ' +
			today.getFullYear();

		this.state = {
			date: date,
			longDate: longDate,
			date1: this.props.date
		};
	}

	render() {
		return (
			<div className="header">
				<span id="dateHeader">{this.state.date1}</span>
			</div>
		);
	}
}

export default Header;
