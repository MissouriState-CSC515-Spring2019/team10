import React, {Component} from 'react';
import sunImage from '../img/sun.png';

class SunContent extends Component {
	render() {
		return (
			<div className="content">
				<div id="sunrise">Sunrise: TIME</div>
				<div id="sunImage">
					<img src={sunImage} alt={"The Sun"}/>
				</div>
				<div id="sunset">Sunset: TIME</div>
			</div>
		);
	}
}

export default SunContent;