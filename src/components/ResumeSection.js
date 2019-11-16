import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';

import {markdownify} from '../utils';

export default class ResumeSection extends React.Component {
    render() {
        const section = get(this.props, 'section');
        return (
            <section id={get(section, 'header')}>
                <header><h2>{get(section, 'header')}</h2></header>
                {map(get(section, 'subsections'), (subsection, subsection_idx) => (
                    <div id={`subsection-${subsection_idx}`}>
                        <header>
                            <p>
                                <strong>{get(subsection, 'subheader')}</strong>
                                {get(subsection, 'rightSubheader') && (
                                    <strong><span className="pull-right">{markdownify(subsection.rightSubheader)}</span></strong>
                                )}
                            </p>
                            {get(subsection, 'position') && (
                                <p style={{ clear: 'both' }}>
                                    {subsection.position}
                                    {get(subsection, 'dates') && (
                                        <span className="pull-right">{markdownify(subsection.dates)}</span>
                                    )}
                                </p>
                            )}
                        </header>
                        <ul className="section-list">
                            {map(get(subsection, 'items'), (item, item_idx) => {
                                if (get(item, 'subtext')) {
                                    return (
                                        <details key={item_idx}>
                                            <summary>
                                                <span>{item.text}</span>
                                                {get(item, 'rightText') && (
                                                    <span className="pull-right">{item.rightText}</span>
                                                )}
                                            </summary>
                                            <li>{markdownify(item.subtext)}</li>
                                        </details>
                                    );
                                }

                                return (
                                    <li key={item_idx}>
                                        <span>{item.text}</span>
                                        {get(item, 'rightText') && (
                                            <span className="col-5 align-right">{item.rightText}</span>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </section>
        );
    }
}
