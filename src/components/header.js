import React, {Component} from 'react';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			date: this.props.date
		};
	}

	render() {
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

		let dateST = this.state.date.split('/');
		let fullMonth = monthNames[Number(dateST[0]-1)];
		let fullDay = dateST[1];
		let fullYear = dateST[2];
		let fullDate = fullMonth + ' ' + fullDay + ', ' + fullYear;

		return (
			<div className="header">
				<span id="dateHeader">{fullDate}</span>
			</div>
		);
	}
}

export default Header;
