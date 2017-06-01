import React, { Component } from 'react';

class PostDetail extends Component {
	render() {
		return (
			<div className="PostDetail">
				{/* TODO: This is shit, needs to be cleaned up */}
				{/*<p className="category">{ this.props.data.category }</p>*/}
				<p className="title">Post: { this.props.data.title }</p>
				{/*<p className="author">{ this.props.data.author }</p>*/}
				{/*<p className="subtext">{ this.props.data.subtext }</p>*/}
			</div>
		);
	}
}

export default PostDetail;
