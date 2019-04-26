import React, { Component } from 'react';
import Navigation from './navigation.js';
import Header from './header.js';

class DateContent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			date: this.props.date
		};
	}

	render() {
		return (
			<div>
				<Header date={this.state.date} />
				<Navigation date={this.state.date} />
			</div>
		);
	}
}

export default DateContent;
