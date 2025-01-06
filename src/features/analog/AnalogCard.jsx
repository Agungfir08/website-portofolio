import React from 'react';
import {
    LazyLoadImage,
    trackWindowScroll,
} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function AnalogCard({ img, scrollPosition }) {
    return (
        <div data-aos="zoom-in">
            <LazyLoadImage
                className="rounded-lg"
                src={img}
                effect="blur"
                scrollPosition={scrollPosition}
                width={img.width}
                height={img.height}
            />
        </div>
    );
}

export default trackWindowScroll(AnalogCard);
