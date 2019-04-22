import React, {Component} from 'react';
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
		fetch("https://api.usno.navy.mil/eclipses/solar?year=2019")
			.then(res => res.json())
			.then(
				(results) => {
					this.setState({
						isLoaded: true,
						results: results.eclipses_in_year
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}
	
	render() {
		const { error, isLoaded, results } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className="content">
					<div id="eclipseInYear">Eclipses in 2019</div>
					<ul>
						{results.map(result => (
            				<li>
								{result.event}
							</li>
						))}
					</ul>
					<div id="eclipseImage">
						<img src={eclipseImage} alt={"An Eclipse"}/>
					</div>
					<div id="eclipseHolder">
						<ul id="eclipseData">
						</ul>
					</div>
				</div>
			);
		}
	}
}

export default EclipseContent;