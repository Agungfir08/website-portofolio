import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAVIGATIONS } from '../../constants/Navigations';
import MenuButton from '../button/MenuButton';
import LOGO from '../../assets/icons/Logo.svg';
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className=" sticky top-0 z-50">
            <nav className="px-4 lg:px-6 py-4">
                <div className="relative flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <NavLink to="/" className="flex items-center gap-2">
                        <img
                            src={LOGO}
                            className="h-6 sm:h-9"
                            alt="Agung Firmansyah"
                        />
                        <span className="self-center text-base md:text-xl font-workSans font-semibold whitespace-nowrap ">
                            Agung Firmansyah
                        </span>
                    </NavLink>
                    <MenuButton onClick={toggleMenu} menuOpen={isMenuOpen} />
                    <div
                        className={`${
                            isMenuOpen
                                ? 'translate-y-full opacity-100'
                                : 'translate-y-0 opacity-0'
                        } fixed top-[-100vh] opacity-0 md:opacity-100 right-0 left-0 md:static md:top-0 md:transform-none md:animate-none md:justify-between justify-center items-center w-screen h-screen md:h-fit flex md:w-auto transform transition duration-700 ease-in-out`}
                        id="mobile-menu-1">
                        <ul className="flex flex-col items-center font-medium md:flex-row md:space-x-12 space-y-8 md:space-y-0">
                            {NAVIGATIONS.map(({ title, url }) => (
                                <li key={title}>
                                    <NavLink
                                        to={url}
                                        className={({ isActive }) =>
                                            `font-avenir md:font-light text-xl font-normal md:text-base hover:md:text-[#926402] md:transition-colors ${
                                                isActive ? 'text-[#926402]' : ''
                                            }`
                                        }
                                        onClick={toggleMenu}
                                        aria-current="page">
                                        {title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
