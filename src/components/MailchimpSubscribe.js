import React, {useState} from 'react';
import {htmlToReact} from '../utils';

const MailchimpSubscribe = () => {
    const [email, setEmail] = useState('');
    const handleChange = event => {
        event.preventDefault();
        setEmail(event.target.value);
    };

    return (
        <div className="row aln-center">
            <div className="col-6">
                <div id="mc_embed_signup">
                    <form
                        action="https://trey-white.us20.list-manage.com/subscribe/post?u=c621dc97d8202578e9db94c21&amp;id=527355670a"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        className="validate"
                        target="_blank"
                        novalidate
                    >
                        <div id="mc_embed_signup_scroll">
                            <label for="mce-EMAIL">Subscribe</label>
                            <input
                                type="email"
                                value={email}
                                onChange={handleChange}
                                name="EMAIL"
                                className="email"
                                id="mce-EMAIL"
                                placeholder="email address"
                                required
                            />
                            {htmlToReact('<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->')}
                            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                                <input type="text" name="b_c621dc97d8202578e9db94c21_527355670a" tabindex="-1" value="" />
                            </div>
                            <div className="clear">
                                <input
                                    type="submit"
                                    value="Subscribe"
                                    name="subscribe"
                                    id="mc-embedded-subscribe"
                                    className="button fit"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MailchimpSubscribe;
