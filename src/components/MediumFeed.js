import React from 'react';
import Feed from 'rss-to-json';
import get from 'lodash/get';
import map from 'lodash/map';

const formatArticle = (article, idx) => (
	<div key={`article-${idx}`}>
		<h3>{get(article, 'title')}</h3>
		<h6>{get(article, 'pubDate')}</h6>
		<p>{get(article, 'content')}</p>
		<span>View full article <a href={get(article, 'link')} target="_blank">here</a></span>
		<hr />
	</div>
);

export default class MediumFeed extends React.Component {
	constructor() {
		super();
		this.feedData = null;
	}

	componentWillMount() {
		// Ex. https://learnstartup.net/feed/
		Feed.load('https://medium.com/feed/@treywhitedesign', (err, rss) => {
			if (err) {
				console.log('Error loading RSS feed: ', JSON.stringify(err));
			} else {
				console.log(rss);
				this.feedData = rss;
			}
		});
	}

	render() {
		return map(get(this.feedData, 'items'), (article, idx) => formatArticle(article, idx));
	}
}