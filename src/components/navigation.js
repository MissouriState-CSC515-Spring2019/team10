import React, { Component } from 'react';

class Navigation extends Component {
	render() {
		return (
			<div className="navigation">
				<button
					id="nav-left-button"
					onClick="window.location.href = 'templateHTMLSun.html'"
				>
					Sun Times
				</button>
				<button
					id="nav-center-button"
					onClick="window.location.href = 'templateHTMLMoon.html'"
				>
					Moon Times
				</button>
				<button
					id="nav-right-button"
					onClick="window.location.href = 'templateHTMLEclipse.html'"
				>
					Solar Eclipse
				</button>
			</div>
		);
	}
}

export default Navigation;
