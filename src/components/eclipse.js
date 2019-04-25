import React, { Component } from 'react';
import eclipseImage from '../img/eclipse.png';

class EclipseContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			results: []
		};
	}

	componentDidMount() {
		fetch('https://api.usno.navy.mil/eclipses/solar?year=2019')
			.then(res => res.json())
			.then(
				results => {
					this.setState({
						isLoaded: true,
						results: results
					});
				},
				error => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}

	render() {
		const { error, isLoaded, results } = this.state;
		if (error) {
			return (
				<div className="content">
					<div>Error: {error.message}</div>
				</div>
			);
		} else if (!isLoaded) {
			return (
				<div className="content">
					<div>Loading...</div>
				</div>
			);
		} else {
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
			let eclipseList = results.eclipses_in_year;
			return (
				<div className="content">
					<div id="eclipseInYear">Eclipses in {results.year}</div>
					<div id="eclipseImage">
						<img src={eclipseImage} alt={'An Eclipse'} />
					</div>
					<ul>
						{eclipseList.map(result => (
							<li>
								{monthNames[result.month - 1]} {result.day} -{' '}
								{result.event.substring(0, result.event.indexOf(' of'))}
							</li>
						))}
					</ul>

					<div id="eclipseHolder">
						<ul id="eclipseData" />
					</div>
				</div>
			);
		}
	}
}

export default EclipseContent;
