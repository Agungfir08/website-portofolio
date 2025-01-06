import React from 'react';
import {
    InstagramIcon,
    GithubIcon,
    LinkedInIcon,
} from '../../assets/icons/Icons';

export default function Footer() {
    return (
        <footer className="px-4 lg:px-6">
            <div className="max-w-screen-xl mx-auto w-full border-t-2 border-gray-200">
                <div className="grid grid-cols-1 py-6 lg:py-8 md:grid-cols-3 gap-4 md:gap-0">
                    <div className="flex flex-col items-center gap-1.5">
                        <h2 className=" md:text-lg font-workSans font-semibold">
                            Phone
                        </h2>
                        <p className="font-avenir text-sm md:text-base">
                            +62 823-4863-4934
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                        <h2 className="md:text-lg font-workSans font-semibold">
                            Email
                        </h2>
                        <p className="font-avenir text-sm md:text-base">
                            agungfirmansyah795@gmail.com
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                        <h2 className="md:text-lg font-workSans font-semibold">
                            Follow Me
                        </h2>
                        <div className="flex space-x-2">
                            <a href="https://www.instagram.com/agung.frmnsyah/">
                                <InstagramIcon />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="https://www.linkedin.com/in/agungfirmansyah08/">
                                <LinkedInIcon />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="https://github.com/Agungfir08">
                                <GithubIcon />
                                <span className="sr-only">GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
