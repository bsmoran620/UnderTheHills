import React, { Component } from 'react';
import FeaturedPost from './Components/FeaturedPost/index';

class FeaturedContainer extends Component {
    render() {
		return(
		    <div className="featuredContainer">
				<h2>Featured Posts:</h2>
				{ this.props.data.map( featuredPost => <FeaturedPost data={featuredPost} /> )}
		    </div>
		); 
    }
}

export default FeaturedContainer;
