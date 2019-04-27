import React, { Component } from 'react';
import eclipseImage from '../img/Eclipse.png';

class EclipseContent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null,
			isLoaded: false,
			results: [],
			date: null
		};
	}

	componentDidMount() {
		let urlDate;
		if (this.props.match.params.date !== undefined) {
			urlDate = this.props.match.params.date;
			urlDate = urlDate.replace(/-/g, '/');
		} else {
			let today = new Date();
			urlDate =
				today.getMonth() +
				1 +
				'/' +
				today.getDate() +
				'/' +
				today.getFullYear();
		}
		let date = urlDate;

		let dateLen = date.length;
		let start = dateLen - 4;
		let year = date.slice(start, dateLen);

		document.title = 'Eclipses in ' + date;

		fetch(`https://api.usno.navy.mil/eclipses/solar?year=${year}`)
			.then(res => res.json())
			.then(
				results => {
					this.setState({
						isLoaded: true,
						results: results,
						date: date
					});
				},
				error => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
		this.props.dateF(date);
	}

	render() {
		const { error, isLoaded, results } = this.state;
		if (error) {
			return (
				<div className="contentNight">
					<div>Error: {error.message}</div>
				</div>
			);
		} else if (!isLoaded) {
			return (
				<div className="contentNight">
					<div id="loader" />
					<div id="loading">LOADING</div>
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
				<div className="contentNight">
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
