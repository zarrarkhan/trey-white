import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';

import {markdownify} from '../utils';

export default class ResumeSection extends React.Component {
    render() {
        const section = get(this.props, 'section');
        return (
            <section id={get(section, 'header')}>
                <header>
                    <h4>{get(section, 'header')}</h4>
                    <p>
                        {get(section, 'subheader')}
                        {get(section, 'rightSubheader') && (
                            <span className="pull-right">{section.rightSubheader}</span>
                        )}
                    </p>
                </header>
                <ul className="section-list">
                    {map(get(section, 'items'), (item, item_idx) => {
                        if (get(item, 'subtext')) {
                            return (
                                <details key={item_idx}>
                                    <summary>
                                        <span>{item.text}</span>
                                        {get(item, 'rightText') && (
                                            <span className="pull-right">{item.rightText}</span>
                                        )}
                                    </summary>
                                    <li>{item.subtext}</li>
                                </details>
                            );
                        }

                        return (
                            <li key={item_idx}>
                                <span>{item.text}</span>
                                {get(item, 'rightText') && (
                                    <span className="pull-right">{item.rightText}</span>
                                )}
                            </li>);
                    })}
                </ul>
            </section>
        );
    }
}
