import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';

import {Layout, ResumeSection, ContactForm} from '../components/index';
import {markdownify, htmlToReact, Link} from '../utils';

export default class Resume extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <article id="main">
                    <header>
                        <h2>{get(this.props, 'pageContext.frontmatter.title')}</h2>
                        {markdownify(get(this.props, 'pageContext.frontmatter.subtitle'))}
                    </header>
                    <section className="wrapper style5">
                        <div id="resume" className="inner">
                            {map(get(this.props, 'pageContext.frontmatter.sections'), section => (
                                <ResumeSection section={section} />
                            ))}
                        </div>
                    </section>
                    <section className={'wrapper ' + get(this.props, 'pageContext.frontmatter.background_style')}>
                        <div className="inner">
                            <ContactForm />
                        </div>
                    </section>
                </article>
            </Layout>
        );
    }
}
