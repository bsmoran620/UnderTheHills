import React, { Component } from 'react';
import './App.css';
import Home from './screens/Home/index';
import About from './screens/About';
import Learn from './screens/Learn/index';
import Core from './screens/Core/Core';
import NavBar from './screens/NavBar/index';
import Footer from './screens/Footer/index';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect
} from 'react-router-dom'

class App extends Component {
  render() {
	const HomeWrapper = () => (
		<Home data={this.props.data} />
	)
    
	return (
    	<Router>
			<div className="App">
    	 {/* TODO: Remove everything from App */}
				<NavBar />	
				<hr/>

				<Route exact 
					path="/" 
					render={() => (
						<Redirect to="/learn"/>
					)}
					/*render={() => <Home data={this.props.data} /> } */
				/>
				<Route
					path="/home"
					render={() => <Home data={this.props.data} /> }
				/>
				<Route
 					path="/about" 
					render={About} 
				/>
				<Route
					path="/learn"
					render={() => <Core /> }
				/>
				{/*<Route 
					path="/learn" 
					render={() => <Learn data={this.props.data} /> } 
				/>*/}
				{/* <Home data={this.props.data} /> */
				<Footer />}
      		</div>
		</Router>
    );
  }

}


export default App;
