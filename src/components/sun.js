import React, {Component} from 'react';
import sunImage from '../img/sun.png';

class SunContent extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			results: []
		};
	}

	componentDidMount() {
		fetch("https://api.usno.navy.mil/rstt/oneday?date=01/01/2019&loc=Springfield,%20Mo")
		  .then(res => res.json())
		  .then(
			(results) => {
			  this.setState({
				isLoaded: true,
				results: results
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
		const { error, isLoaded, results} = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className="content">
					<div id="sunrise">Sunrise: {results.sundata[1].time}</div>
					<div id="sunImage">
						<img src={sunImage} alt={"The Sun"}/>
					</div>
					<div id="sunset">Sunset: {results.sundata[3].time}</div>
				</div>
			);
		}
	}
}

export default SunContent;