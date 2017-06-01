import React, { Component } from 'react';
import Infinite from 'react-infinite';
import PostDetail from './Components/PostDetail/index';

class PostContainer extends Component {
	render() {
		return (
			<div className="postContainer">
				<h2>Post Title:</h2>
				<Infinite containerHeight={200} elementHeight={40}>
					{ this.props.data.map( post => <PostDetail data={post} /> ) })
				</Infinite>
			</div>
		);
	}
}

export default PostContainer;
