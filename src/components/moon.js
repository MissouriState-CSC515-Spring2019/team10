import React, {Component} from 'react';

class MoonContent extends Component {
	render() {
		return (
			<div className="content">
				<div id="sunrise">Moon Rise: TIME</div>
				<div id="moonImage">
					<div id="moonPhase">PHASE</div>
				</div>
				<div id="sunset">Moon Set: TIME</div>
			</div>
		);
	}
}

export default MoonContent;