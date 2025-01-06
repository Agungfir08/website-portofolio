import React from 'react';

export default function Phone({ image }) {
    return (
        <div>
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[7px] rounded-[1.3rem] h-[300px] w-[150px] lg:border-[8px] lg:rounded-[1.8rem] lg:h-[320px] lg:w-[164px] ">
                <div className="h-[16px] w-[1.5px] lg:h-[20px] lg:w-[2px] bg-gray-800 absolute -start-[8px] top-[28px] lg:-start-[10px] lg:top-[44px] rounded-s-lg"></div>
                <div className="h-[22px] w-[1.5px] lg:h-[28px] lg:w-[2px] bg-gray-800 absolute -start-[8px] top-[48px] lg:-start-[10px] lg:top-[76px] rounded-s-lg"></div>
                <div className="h-[22px] w-[1.5px] lg:h-[28px] lg:w-[2px] bg-gray-800 absolute -start-[8px] top-[68px] lg:-start-[10px] lg:top-[108px] rounded-s-lg"></div>
                <div className="h-[28px] w-[1.5px] lg:h-[36px] lg:w-[2px] bg-gray-800 absolute -end-[8px] top-[56px] lg:-end-[10px] lg:top-[90px] rounded-e-lg"></div>
                <div className="rounded-[1rem] lg:rounded-[1.5rem] overflow-hidden w-[136px] h-[286px] lg:w-[148px] lg:h-[302px] bg-white">
                    <img
                        src={image}
                        className="w-[136px] h-[286px] lg:w-[148px] lg:h-[302px]"
                        alt="Project Image"
                    />
                </div>
            </div>
        </div>
    );
}
