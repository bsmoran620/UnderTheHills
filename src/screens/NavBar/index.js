import React, { Component } from 'react';
import '../../App.css';
import './NavBar.css';
import {
	BrowserRouter as Router,
	Route,
	NavLink
} from 'react-router-dom'

const NavBar = () => {
	return (
		<div className="App-header">
			<div className="nav-menu">
				<ul className="menu">
					<li className="menu-item">
						{/* NavLink will manage active state for us */}
						<NavLink className="nav-link nav-link-home" to="/home">Under the Hills</NavLink>
					</li>
					<li className="menu-item">
						<NavLink className="nav-link nav-link-learn" to="/learn">Learn More</NavLink>
					</li>
				</ul>

			</div>
		</div>
	);
};

export default NavBar;
