import React from 'react';
import get from 'lodash/get';

const ContactForm = props => {
    return (
        <section
            id={get(props, 'section.section_id')}
            className={'wrapper ' + get(props, 'section.background_style')}
        >
            <div className="inner" style={{ padding: '0em 5em' }}>
                <header style={{ textAlign: 'center' }}>
                    <h2>Contact Me</h2>
                </header>
                <form name="contact" method="POST" data-netlify="true">
                    <p>
                        <label>Your Name: <input type="text" name="name" /></label>   
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
