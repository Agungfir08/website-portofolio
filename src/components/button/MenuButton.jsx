import React from 'react';

export default function MenuButton({ menuOpen, onClick }) {
    return (
        <button
            data-collapse-toggle="mobile-menu-1"
            type="button"
            aria-controls="mobile-menu-1"
            className="flex items-center md:hidden z-50 w-6 h-6 relative"
            aria-expanded={menuOpen}
            onClick={onClick}>
            <span className="sr-only">Toggle main menu</span>
            <div className="block w-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-4 bg-current transform transition duration-500 ease-in-out ${
                        menuOpen ? 'rotate-45' : '-translate-y-1.5'
                    }`}></span>
                <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-4 bg-current transform transition duration-500 ease-in-out ${
                        menuOpen ? 'opacity-0' : ''
                    }`}></span>
                <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-4 bg-current transform transition duration-500 ease-in-out ${
                        menuOpen ? '-rotate-45' : 'translate-y-1.5'
                    }`}></span>
            </div>
        </button>
    );
}
