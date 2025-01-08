import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function AnalogCard({ img }) {
    return (
        <div className="aspect-square" data-aos="zoom-in">
            <LazyLoadImage
                className="h-auto max-w-full rounded-lg"
                src={img}
                alt="analog"
                effect="blur"
            />
        </div>
    );
}
