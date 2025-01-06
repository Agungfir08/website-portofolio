import React from 'react';
import agungFoto from '../../assets/images/AgungFoto.jpg';
export default function Home() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 min-h-dvh items-center">
                <div className="md:justify-self-end justify-self-center">
                    <img
                        className="rounded-full w-80 h-80 shadow-xl"
                        src={agungFoto}
                        loading="lazy"
                    />
                </div>
                <div className="md:justify-self-start">
                    <div className="text-center space-y-6 md:text-left">
                        <h1 className="text-6xl md:text-7xl font-workSans font-bold">
                            Hello!!
                        </h1>
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold mb-2">
                                About Me
                            </h2>
                            <p className="md:text-justify md:max-w-96">
                                Welcome to my portfolio! I am a Junior
                                programmer with a background in Computer
                                Engineering from Universitas Indonesia, eager to
                                gain more experience. Familiar with HTML, CSS,
                                JavaScript, React.js, Python, and SQL.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
