import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';

import {Layout} from '../components/index';
import {markdownify, htmlToReact} from '../utils';

const formatQuote = (quote, idx) => (
    <div key={`quote-${idx}`} className="quote">
        <h3 className="text">{`"${quote.text}"`}</h3>
        <span className="author">
            <h5>{`- ${quote.author}`}</h5>
        </span>
    </div>
);

export default class Quotes extends React.Component {
    render() {
        const quotes = get(this.props, 'pageContext.site.data.quotes.items');
        return (
            <Layout {...this.props}>
                <article id="main">
                    <header>
                        <h2>{get(this.props, 'pageContext.frontmatter.title')}</h2>
                        {markdownify(get(this.props, 'pageContext.frontmatter.subtitle'))}
                    </header>
                    <section id="quote-list" className="wrapper style5">
                        <div className="inner">
                            {map(quotes, (quote, quote_idx) => formatQuote(quote, quote_idx))}
                            {htmlToReact(get(this.props, 'pageContext.html'))}
                        </div>
                    </section>
                </article>
            </Layout>
        );
    }
}
