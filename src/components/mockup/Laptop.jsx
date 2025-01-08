import React from 'react';

export default function Laptop({ image }) {
    return (
        <div className="w-full">
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[300px] lg:h-[220px] lg:max-w-[380px]">
                <div className="rounded-lg overflow-hidden h-[156px] lg:h-[200px] bg-white">
                    <img
                        src={image}
                        className="h-[156px] lg:h-[200px] w-full rounded-lg"
                        alt="Project Image"
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[17px] max-w-[330px] lg:max-w-[410px] ">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
            </div>
        </div>
    );
}
