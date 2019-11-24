import React, {useState} from 'react';
import get from 'lodash/get';
import map from 'lodash/map';

import {htmlToReact, markdownify, Link, safePrefix, classNames} from '../utils';

const MailchimpSubscribe = props => {
    const [state, setState] = useState({
        accessCode: '',
        email: '',
        showSubscribe: false,
        errorMsg: '',
    });
    const { accessCode, email, errorMsg, showSubscribe } = state;

    const handleChange = name => event => {
        event.preventDefault();
        setState({
            ...state,
            [name]: event.target.value
        });
    };

    const submitAccessCode = () => event => {
        event.preventDefault();

        if (accessCode === 'EMW2020') {
            setState({
                ...state,
                showSubscribe: true,
                errorMsg: '',
            })
        } else {
            setState({
                ...state,
                showSubscribe: false,
                errorMsg: 'Incorrect access code'
            })
        }
    };

    return (
        <section id={get(props, 'section.section_id')} className={'wrapper ' + get(props, 'section.background_style')}>
            <div className="inner">
                <header>
                    <h2>{htmlToReact(get(props, 'section.title').replace(/\n/g, '<br />'))}</h2>
                    {markdownify(get(props, 'section.text'))}
                </header>
                {!showSubscribe ? (
                    <ul className="actions stacked">
                        <form onSubmit={submitAccessCode()}>
                            <li>
                                {errorMsg !== '' && (
                                    <div className="error">{errorMsg}</div>
                                )}
                                <input
                                    type="password"
                                    value={accessCode}
                                    onChange={handleChange('accessCode')}
                                    placeholder="Access Code"
                                />
                            </li>
                            <li>
                                <button 
                                    type="submit"
                                    onClick={submitAccessCode()}
                                    className="button fit primary"
                                >
                                    Submit
                                </button>
                            </li>
                        </form>
                    </ul>
                ) : (
                    <ul className="actions stacked">
                        <form
                            action="https://trey-white.us20.list-manage.com/subscribe/post?u=c621dc97d8202578e9db94c21&amp;id=527355670a"
                            method="post"
                            id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form"
                            className="validate"
                            target="_blank"
                            noValidate
                        >
                            <div>
                                <li>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={handleChange('email')}
                                        name="EMAIL"
                                        className="email"
                                        id="mce-EMAIL"
                                        placeholder="Email Address"
                                        required
                                    />
                                    {htmlToReact('<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->')}
                                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                                        <input type="text" name="b_c621dc97d8202578e9db94c21_527355670a" tabIndex="-1" defaultValue="" />
                                    </div>
                                </li>
                                <li>
                                    <div className="clear">
                                        <button
                                            type="submit"
                                            defaultValue="Subscribe"
                                            name="subscribe"
                                            className="button fit primary"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </li>
                            </div>
                        </form>
                    </ul>
                )}
            </div>
        </section>
    );
}

export default MailchimpSubscribe;
