import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';
import Zoom from 'react-reveal/Zoom';

import {htmlToReact, markdownify, safePrefix} from '../utils';

const Icons = props => {
    const images = get(props, 'section.feature_images');
    const icons = get(props, 'section.feature_icons');
    return (
        <section id={get(props, 'section.section_id')} className={'wrapper ' + get(props, 'section.background_style') + ' special'}>
            <div className="inner">
                <header className="major">
                    <h2>{htmlToReact(get(props, 'section.title').replace(/\n/g, '<br />'))}</h2>
                    {markdownify(get(props, 'section.subtitle'))}
                </header>
                {images && (
                    map(images, (image, image_idx) => (
                        <Zoom key={image_idx} delay={get(image, 'delay')}>
                            <div className="image">
                                <img
                                    style={{
                                        height: `${get(image, 'height')}`,
                                        width: 'auto',
                                        top: `${get(image, 'top')}`,
                                        marginLeft: `${get(image, 'margin')}`,
                                    }}
                                    src={safePrefix(get(image, 'img_path'))}
                                />
                            </div>
                        </Zoom>
                    ))
                )}
                {icons && (
                    <ul className="icons major" style={{ paddingTop: '4em' }}>
                        {map(get(props, 'section.feature_icons'), (item, item_idx) => (
                            <li key={item_idx}><span className={'icon ' + get(item, 'icon') + ' major ' + get(item, 'style')}><span className="label">{get(item, 'title')}</span></span></li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}

export default Icons;
