import React from 'react';
import get from 'lodash/get';

const ContactForm = props => {
    return (
        <section
            id={get(props, 'section.section_id')}
            className={'wrapper ' + get(props, 'section.background_style')}
        >
            <div className="inner row aln-center gtr-0">
                <div className="col-10">
                    <header style={{ textAlign: 'center' }}>
                        <h2>Contact Me</h2>
                    </header>
                    <form
                        name="contact"
                        method="post"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <p>
                            <label>Your Name: <input type="text" name="name" id="name" /></label>   
                        </p>
                        <p>
                            <label>Your Email: <input type="email" name="email" id="email" /></label>
                        </p>
                        <p>
                            <label>Message: <textarea name="message" id="message"></textarea></label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
