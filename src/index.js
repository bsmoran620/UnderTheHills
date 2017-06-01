import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';



ReactDOM.render(
  <App data={initializeData()} />,
  document.getElementById('root')
);

function initializeData() {
	return {
		/* TODO: Images */
		featuredPosts : [
			{ category: 'Sample Category 1', title: 'Sample Title 1', author: 'Sample Author 1' },
			{ category: 'Sample Category 2', title: 'Sample Title 2', author: 'Sample Author 2' }
		],
		posts : [
			{ category: 'Sample Category 1', title: 'Sample Title 1', author: 'Sample Author 1', subtext: 'Sample subtext' },
			{ category: 'Sample Category 2', title: 'Sample Title 2', author: 'Sample Author 2', subtext: 'Sample subtext' },
			{ category: 'Sample Category 3', title: 'Sample Title 3', author: 'Sample Author 3', subtext: 'Sample subtext' },
			{ category: 'Sample Category 4', title: 'Sample Title 4', author: 'Sample Author 4', subtext: 'Sample subtext' },
			{ category: 'Sample Category 5', title: 'Sample Title 5', author: 'Sample Author 5', subtext: 'Sample subtext' },
			{ category: 'Sample Category 6', title: 'Sample Title 6', author: 'Sample Author 6', subtext: 'Sample subtext' },
			{ category: 'Sample Category 7', title: 'Sample Title 7', author: 'Sample Author 7', subtext: 'Sample subtext' },
			{ category: 'Sample Category 8', title: 'Sample Title 8', author: 'Sample Author 8', subtext: 'Sample subtext' },
			{ category: 'Sample Category 9', title: 'Sample Title 9', author: 'Sample Author 9', subtext: 'Sample subtext' },
			{ category: 'Sample Category 10', title: 'Sample Title 10', author: 'Sample Author 10', subtext: 'Sample subtext' },
			{ category: 'Sample Category 11', title: 'Sample Title 11', author: 'Sample Author 11', subtext: 'Sample subtext' },
			{ category: 'Sample Category 12', title: 'Sample Title 12', author: 'Sample Author 12', subtext: 'Sample subtext' },
			{ category: 'Sample Category 13', title: 'Sample Title 13', author: 'Sample Author 13', subtext: 'Sample subtext' },
			{ category: 'Sample Category 14', title: 'Sample Title 14', author: 'Sample Author 14', subtext: 'Sample subtext' },
			{ category: 'Sample Category 15', title: 'Sample Title 15', author: 'Sample Author 15', subtext: 'Sample subtext' }
		]
	}
}
