import React, { Component } from 'react';
import logo from '../../../../../../images/logo.svg';

class FeaturedPost extends Component {
    render() {
		return (
			<div className="featuredPost">
				{/* TODO: Can likely extract post into a separate component and then style feature posts differently */}
				<p className="category">{this.props.data.category}</p>
				<p className="title">{this.props.data.title}</p>
				<p className="author">{this.props.data.author}</p>
				{/* TODO: Set height and width elsewhere */}
				<img src={logo} height="42" width="42"></img>
			</div>
		);
    }
}

export default FeaturedPost
