import React from 'react';
import Slider from 'react-slick';
import get from 'lodash/get';
import map from 'lodash/map';
import shuffle from 'lodash/shuffle';

import {Link, safePrefix} from '../utils';

// Import CSS files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Carousel settings
const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
};

const QuoteCarousel = props => {
    const quotes = shuffle(get(props, 'pageContext.site.data.quotes.items'));
    return (
        <section id={get(props, 'section.section_id')} className={'wrapper alt ' + get(props, 'section.background_style')}>
            <div id="quote-carousel">
                <Slider {...settings}>
                    {map(quotes, (quote, quote_idx) => (
                        <div id={`quote-${quote_idx}`} className="panel">
                            <div className="quote">
                                <h3>{`"${quote.text}"`}</h3>
                                <h5>{`- ${quote.author}`}</h5>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div>
                    <Link to={(safePrefix('/quotes'))}>View All Quotes</Link>
                </div>
            </div>
        </section>
    );
}

export default QuoteCarousel;
