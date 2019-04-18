import React, {Component} from 'react';
// import './App.css';
import Header from './components/header.js';
import Navigation from './components/navigation.js';
import Footer from './components/footer.js';
import SunContent from './components/sun.js';
// import MoonContent from './components/moon.js';
// import EclipseContent from './components/eclipse.js';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Header/>
				<Navigation/>
				<SunContent/>
				<Footer/>
			</div>
		);
	}
}

export default App;
