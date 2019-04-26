import React, {Component} from 'react';
import sunImage from '../img/Sun.png';

class SunContent extends Component {
	constructor(props) {
		super(props);

		//let urlDate;
		// if (this.props.match.params.date !== undefined) {
		// 	urlDate = this.props.match.params.date;
		// 	urlDate = urlDate.replace(/-/g, '/');
		// } else {
		// 	let today = new Date();
		// 	urlDate =
		// 		today.getMonth() +
		// 		1 +
		// 		'/' +
		// 		today.getDate() +
		// 		'/' +
		// 		today.getFullYear();
		// }

		this.state = {
			error: null,
			isLoaded: false,
			results: [],
			date: []
		};
	}

	componentDidMount(props) {
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

		this.setState({
			date: urlDate
		});
		console.log(this.state.date);

		fetch(
			`https://api.usno.navy.mil/rstt/oneday?date=${
				this.state.date
			}&loc=Springfield,%20Mo`
		)
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
		const {error, isLoaded, results} = this.state;
		if (error) {
			return (
				<div className="contentDay">
					<div>Error: {error.message}</div>
				</div>
			);
		} else if (!isLoaded) {
			return (
				<div className="contentDay">
					<div id="loader"></div>
					<div id="loading">LOADING</div>
				</div>
			);
		} else {
			return (
				<div className="contentDay">
					<div id="sunrise">
						Sunrise: {results.sundata[1].time.toString().slice(0, -3)}
					</div>
					<div id="sunImage">
						<img src={sunImage} alt={'The Sun'}/>
						{/* <img src={sunImage} alt={'The Sun'} />
						<img src={sunImage} alt={'The Sun'} /> */}
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
