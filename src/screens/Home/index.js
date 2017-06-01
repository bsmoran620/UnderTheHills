import React, { Component } from 'react';
import FeaturedContainer from './Components/FeaturedContainer/index';
import PostContainer from './Components/PostContainer/index';

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<FeaturedContainer data={this.props.data.featuredPosts} />
        		<PostContainer data={this.props.data.posts} />
			</div>
		);
	}
}

export default Home;
