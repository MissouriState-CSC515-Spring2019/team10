import React, {Component} from 'react';
import eclipseImage from '../img/eclipse.png';

class EclipseContent extends Component {
	render() {
		return (
			<div className="content">
				<div id="eclipseInYear">Eclipses in 2019</div>
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

export default EclipseContent;