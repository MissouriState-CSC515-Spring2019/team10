import React, {Component} from 'react';
import NewMoon from '../img/1NewMoon.png';
import WaxingCrescent from '../img/2WaxingCrescent.png';
import FirstQuarter from '../img/3FirstQuarter.png';
import WaxingGibbous from '../img/4WaxingGibbous.png';
import FullMoon from '../img/5FullMoon.png';
import WaningGibbous from '../img/6WaningGibbous.png';
import LastQuarter from '../img/7LastQuarter.png';
import WaningCrescent from '../img/8WaningCrescent.png';

class MoonContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			results: []
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

		document.title = "Moon Times - " + urlDate;

		fetch(
			`https://api.usno.navy.mil/rstt/oneday?date=${urlDate}&loc=Springfield,%20Mo`
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
				<div className="contentNight">
					<div>Error: {error.message}</div>
				</div>
			);
		} else if (!isLoaded) {
			return (
				<div className="contentNight">
					<div id="loader"></div>
					<div id="loading">LOADING</div>
				</div>
			);
		} else {
			let moonPhase; 
			if (results.curphase === undefined) {
				moonPhase = results.closestphase.phase;
			} else {
				moonPhase = results.curphase;
			}

			let moonImage;
			if (moonPhase === 'New Moon') {
				moonImage = NewMoon;
			} else if (moonPhase === 'Waxing Crescent') {
				moonImage = WaxingCrescent;
			} else if (moonPhase === 'First Quarter') {
				moonImage = FirstQuarter;
			} else if (moonPhase === 'Waxing Gibbous') {
				moonImage = WaxingGibbous;
			} else if (moonPhase === 'Full Moon') {
				moonImage = FullMoon;
			} else if (moonPhase === 'Waning Gibbous') {
				moonImage = WaningGibbous;
			} else if (moonPhase === 'Last Quarter') {
				moonImage = LastQuarter;
			} else if (moonPhase === 'Waning Crescent') {
				moonImage = WaningCrescent;
			} else {
				moonImage = FullMoon;
			}

			let moonRise, moonSet;

			for (let i = 0; i < results.moondata.length; i++) {
				if (results.moondata[i].phen === "R") {
					moonRise = results.moondata[i].time.toString().slice(0, -3);
				}
				if (results.moondata[i].phen === "S") {
					moonSet = results.moondata[i].time.toString().slice(0, -3)
				}
			}

			let moonSetNextDay;

			 if (moonSet.slice(-4) === "a.m.") {
			 	let nextDay = new Date(results.year,Number(results.month-1),results.day);
			 	nextDay.setDate(nextDay.getDate()+1);
			 	moonSetNextDay = '(' + Number(nextDay.getMonth()+1) + '/' + nextDay.getDate() + ')';
			 } else {
			 	moonSetNextDay = "";
			 }

			return (
				<div className="contentNight">
					<div id="moonRise">
						Moon Rise: {moonRise}
					</div>
					<div id="moonImage">
						<img src={moonImage} alt={'The Moon'}/>
						<div id="moonPhase">{moonPhase}</div>
					</div>
					<div id="moonSet">
						Moon Set: {moonSet} {moonSetNextDay}
					</div>
				</div>
			);
		}
	}
}

export default MoonContent;
