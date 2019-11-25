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
        case 3:
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
                    {get(section, 'description') && (
                        <details>
                            <summary>View Description</summary>
                            {section.description}
                        </details>
                    )}
                </p>
            );
        default:
            return (<header><h2>{get(section, 'header')}</h2></header>);
    }
};

const expandableBullet = (item, item_idx) => (
    <details key={`expadable-bullet-${item_idx}`}>
        <summary>
            <span>{item.text}</span>
            {get(item, 'rightText') && (
                <span className="pull-right">{item.rightText}</span>
            )}
        </summary>
        {map(item.subitems, (subitem, subitem_idx) => (
            <li key={`li-${subitem_idx}`}>{markdownify(subitem.text)}</li>
        ))}
    </details>
);

const plainBullet = (item, item_idx) => (
    <li key={`plain-bullet-${item_idx}`}>
        <span>{markdownify(item.text)}</span>
        {get(item, 'rightText') && (
            <span className="col-5 align-right">{item.rightText}</span>
        )}
    </li>
);

const sectionContent = section => (
    <ul className="section-list">
        {map(section.items, (item, item_idx) => {
            if (get(item, 'subitems')) {
                return expandableBullet(item, item_idx);
            }

            return plainBullet(item, item_idx);
        })}
    </ul>
);

const formatSection = section => (
    <div
        id={get(section, 'header')}
        key={get(section, 'header')}
        style={section.level === 3 ? {
            margin: '1em 0 0 1em'
        } : {}}
    >
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
