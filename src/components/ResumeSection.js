import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';

import {markdownify} from '../utils';

const sectionHeader = section => {
    const level = get(section, 'level');
    switch (level) {
        case 1:
            return (<header><h2>{get(section, 'header')}</h2></header>);
        case 2:
            return (
                <p>
                    <strong>{get(section, 'header')}</strong>
                    {get(section, 'rightHeader') && (
                        <strong>
                            <span className="pull-right">
                                {markdownify(section.rightHeader)}
                            </span>
                        </strong>
                    )}
                    {get(section, 'position') && (
                        <p style={{ clear: 'both' }}>
                            {section.position}
                            {get(section, 'dates') && (
                                <span className="pull-right">{markdownify(section.dates)}</span>
                            )}
                        </p>
                    )}
                </p>
            );
        default:
            return (<header><h2>{get(section, 'header')}</h2></header>);
    }
};

const expandableBullet = (item, item_idx) => (
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

const plainBullet = (item, item_idx) => (
    <li key={item_idx}>
        <span>{item.text}</span>
        {get(item, 'rightText') && (
            <span className="col-5 align-right">{item.rightText}</span>
        )}
    </li>
);

const sectionContent = section => (
    <ul className="section-list">
        {map(section.items, (item, item_idx) => {
            if (get(item, 'subtext')) {
                return expandableBullet(item, item_idx);
            }

            return plainBullet(item, item_idx);
        })}
    </ul>
);

const formatSection = section => (
    <div id={get(section, 'header')}>
        {sectionHeader(section)}
        {get(section, 'items') && (
            sectionContent(section)
        )}
        {get(section, 'subsections') && (
            map(section.subsections, subsection => (
                formatSection(subsection)
            ))
        )}
    </div>
);

const ResumeSection = props => {
    return formatSection(get(props, 'section'));
};

export default ResumeSection;

/*
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
*/