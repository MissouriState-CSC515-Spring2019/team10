import React, { Component } from 'react';
import sunImage from '../img/Sun.png';
import DateContent from './date.js';

class SunContent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null,
			isLoaded: false,
			results: [],
			date: '01/01/17'
		};
	}

	componentDidMount() {
		if (this.props.match.params.date !== undefined) {
			window.urlDate = this.props.match.params.date;
			window.urlDate = window.urlDate.replace(/-/g, '/');
		} else {
			let today = new Date();
			window.urlDate =
				today.getMonth() +
				1 +
				'/' +
				today.getDate() +
				'/' +
				today.getFullYear();
		}
		let date = window.urlDate;

		document.title = "Sun Times - " + urlDate;

		fetch(
			`https://api.usno.navy.mil/rstt/oneday?date=${date}&loc=Springfield,%20Mo`
		)
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
	}

	render() {
		const { error, isLoaded, results } = this.state;
		if (error) {
			return (
				<div className="contentDay">
					<div>Error: {error.message}</div>
				</div>
			);
		} else if (!isLoaded) {
			return (
				<div className="contentDay">
					<div id="loader" />
					<div id="loading">LOADING</div>
				</div>
			);
		} else {
			return (
				<div className="contentDay">
					<DateContent date={this.state.date}/>
					<div id="sunrise">
						Sunrise: {results.sundata[1].time.toString().slice(0, -3)}
					</div>
					<div id="sunImage">
						<img src={sunImage} alt={'The Sun'} />
					</div>
					<div id="sunset">
						Sunset: {results.sundata[3].time.toString().slice(0, -3)}
					</div>
				</div>
			);
		}
	}
}

export default SunContent;
