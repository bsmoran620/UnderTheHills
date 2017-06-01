import React, { Component } from 'react';
import './Learn.css';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

class Learn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSuggestionPaneOpen: false
		}
	}

	render() {
	
			return (
				<div className="Learn">
					<h3>Our Mission</h3>
					<p>Create a platform for actors, musicians, entertainers, and other celebrities to publish first-person stories for readers.</p>
					<p>Under the Hills is a media platform aimed at providing those who are contantly have articles written <i>about them</i> the opportunity to write articles <i>by them</i>. With content more descriptive than what can be conveyed in a Tweet or Facebook post, Under the Hills serves as a means for helping celebrities, actors, and artists alike to create their own narrative and communicate directly with their fans. Through first person accounts of thoughts, ideas, stories, and experiences readers will be able to get a more personal, unique look into the author's perspective.
					</p>

					<h3>How It Works</h3>
					<p>TODO</p>
					<p>Interested in creating an article, but can't think of anything to write about? Check out this list of suggested topics for some ideas...</p>	
					<a href="#"
						onClick={ () => this.setState({ isSuggestionPaneOpen: true })}
					>Browse Our Suggested Topics</a>
					<h3>Contact Us</h3>
					<p>Want to know more about Under the Hills? Or maybe you even have an idea for an article? You can contact us with any questions or ideas at</p>
					<a href="mailto:inquiries@underthehills.com?Subject=Celebrity%20Application" target="_top">Celebrity Application</a><p>We look forward to hearing from you!</p>
					<SlidingPane
						className='Suggested-topics-pane'
						overlayClassName='overlay-class'
						isOpen={ this.state.isSuggestionPaneOpen }
						title='Some Topic Suggestions...'
						width='500px'
						onRequestClose={ () => { this.setState({ isSuggestionPaneOpen: false }) } }>
						<ul>
							<li>Something most people don't know about you</li>
							<li>How did you become famous?</li>
							<li>What do you want to be remembered for?</li>
							<li>Address Rumors</li>
							<li>What was growing up like and how it helped shape you</li>
							<li>Who was your inspiration?</li>
							<li>Memorable experience with a fan</li>
							<li>When you knew you made it</li>
							<li>What is a cause you are passionate about?</li>
							<li>First impression of another celebrity</li>
							<li>Memorable Experience on the job</li>
							<li>Someone who made a difference to you</li>
							<li>Most embarrassing moment</li>
							<li>What do you like doing in your spare time?</li>
							<li>If you weren't famous, what would you be doing?</li>
							<li>Biggest career regret</li>
							<li>What do you wish more people know about?</li>
							<li>Top 5 actors/musicians of all time</li>
							<li>Something you would like to see change</li>
							<li>Experience from the past that helped shape you</li>
							<li>Where will you be in 10 years?</li>
							<li>What would you like your fans to know?</li>
							<li>Tribute to someone who recently passed or retired</li>
						</ul>
					</SlidingPane>
				</div>
			);
	}
};

export default Learn;
