import React, {Component} from 'react';

class MoonContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			results: []
		};
	}

	componentDidMount() {
		fetch('https://api.usno.navy.mil/rstt/oneday?date=01/01/2019&loc=Springfield,%20Mo')
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
			);
	}

	render() {
		const {error, isLoaded, results} = this.state;
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
				</div>);
		} else {
			let moonPhase;
			if (results.curphase === undefined) {
				moonPhase = results.closestphase.phase;
			} else {
				moonPhase = results.curphase;
			}
			return (
				<div className="content">
					<div id="sunrise">Moon Rise: {results.moondata[0].time.toString().slice(0,-3)}</div>
					<div id="moonImage">
						{/*<div id="moonPhase">{results.closestphase.phase}</div>*/}
						<div id="moonPhase">{moonPhase}</div>
					</div>
					<div id="sunset">Moon Set: {results.moondata[2].time.toString().slice(0,-3)}</div>
				</div>
			);
		}
	}
}

export default MoonContent;