import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';

import {safePrefix, htmlToReact, markdownify} from '../utils';

const Spotlights = props => {
    return (
        <section id={get(props, 'section.section_id')} className={'wrapper alt ' + get(props, 'section.background_style')}>
            {map(get(props, 'section.spotlights'), (spotlight, spotlight_idx) => (
                <section key={spotlight_idx} className="spotlight">
                    {get(spotlight, 'home_img_path') && 
                        <div className="image"><img src={safePrefix(get(spotlight, 'home_img_path'))} alt="" /></div>
                    }
                    <div className="content" style={{ padding: '1em 4em' }}>
                        <h2>{htmlToReact(get(spotlight, 'title').replace(/\n/g, '<br />'))}</h2>
                        {markdownify(get(spotlight, 'text'))}
                        {get(spotlight, 'link') && (
                            <span>
                                {get(spotlight, 'link.text')}
                                <a
                                    href={get(spotlight, 'link.url')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ marginLeft: '4px' }}
                                >
                                    {get(spotlight, 'link.title')}
                                </a>
                                .
                            </span>
                        )}
                    </div>
                </section>
            ))}
        </section>
    );
}

export default Spotlights;