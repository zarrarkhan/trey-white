import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';

import {classNames, Link, safePrefix} from '../utils';

export default class Header extends React.Component {
    render() {
        return (
            <header id="header" className={classNames({'alt': get(this.props, 'pageContext.frontmatter.template') === 'home'})}>
                <h1><Link to={safePrefix('/')}>{get(this.props, 'pageContext.site.siteMetadata.title')}</Link></h1>
                <nav id="nav" className="mobile-menu">
                    <ul>
                        <li className="special">
                            <Link to="#menu" className="menuToggle"><span>Menu</span></Link>
                            <div id="menu">
                                <ul>
                                    {map(get(this.props, 'pageContext.menus.main'), (item, item_idx) => (
                                        <li key={item_idx}><Link to={safePrefix(get(item, 'url'))}>{get(item, 'title')}</Link></li>
                                    ))}
                                    {map(get(this.props, 'pageContext.site.data.menu.actions'), (action, action_idx) => (
                                        <li key={action_idx}><Link to={(get(action, 'url').startsWith('#') ? get(action, 'url') : safePrefix(get(action, 'url')))}>{get(action, 'label')}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
                <nav id="nav" className="desktop-menu">
                    <ul>
                        {map(get(this.props, 'pageContext.menus.main'), (item, item_idx) => (
                            <li key={item_idx}><Link to={safePrefix(get(item, 'url'))}>{get(item, 'title')}</Link></li>
                        ))}
                        {map(get(this.props, 'pageContext.site.data.menu.actions'), (action, action_idx) => (
                            <li key={action_idx}><Link to={(get(action, 'url').startsWith('#') ? get(action, 'url') : safePrefix(get(action, 'url')))}>{get(action, 'label')}</Link></li>
                        ))}
                    </ul>
                </nav>
            </header>
        );
    }
}
