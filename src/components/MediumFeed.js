import React from 'react';
import axios from 'axios';
import get from 'lodash/get';
import map from 'lodash/map';

import {htmlToReact} from '../utils';

const formatArticle = (article, idx) => (
	<div key={`article-${idx}`} className="col-10">
		<h3>{get(article, 'title')}</h3>
		<h6>{get(article, 'pubDate')}</h6>
		<p>{htmlToReact(get(article, 'content'))}</p>
		<span>View full article <a href={get(article, 'link')} target="_blank">here</a></span>
		<hr />
	</div>
);

export default class MediumFeed extends React.Component {
	constructor() {
		super();

		this.state = {
			isLoading: true,
			articles: [],
			error: null,
		};
	}

	getMediumFeed = () => {
		const mediumRssFeed = 'https://medium.com/feed/@treywhitedesign';
		const rssToJsonApi = 'https://api.rss2json.com/v1/api.json';
		const data = { params: { rss_url: mediumRssFeed } };
		
		axios.get(rssToJsonApi, data)
		.then(data =>
			this.setState({
				articles: get(data, 'data.items') || [],
				isLoading: false,
			})
		)
		.catch(error => this.setState({ error, isLoading: false }));
	};

	componentDidMount() {
		this.getMediumFeed();
	}

	render() {
		const { isLoading, articles, error } = this.state;
		
		return (
			<div className="row aln-center">
				{error ? <p className="error">{error.message}</p> : null}
				{!isLoading ? (
					map(articles, (article, idx) => formatArticle(article, idx))
				) : (
					<h3>Loading...</h3>
				)}
			</div>
		);
	}
}