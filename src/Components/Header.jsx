// src/components/Header.jsx

import React from 'react';
import { navLinks } from '../data/PortfolioData';

const Header = () => {


    return (
        
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-6 sm:px-10 py-4">
            <div className="flex items-center gap-4">
                <div className="size-6 text-primary">
                    {/* SVG Logo (Copied directly from your static HTML) */}
                    <div className='w-8 h-6 rounded-full flex items-center justify-center bg-white text-black'>
                        <p className='font-medium '>LB</p>

                    </div>
                </div>
                < h2 className="text-white flex items-center justify-center text-lg font-bold leading-tight tracking-[-0.015em]">Lokesh Bomma</h2>
            </div>
            {/* Navigation Links */}
            <div className="hidden lg:flex flex-1 justify-end items-center gap-8">
                <div className="flex items-center gap-9">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal"
                            href={link.href}
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
                <a
                    href="#contact"
                    className="flex min-w-[84px] max-w-[480px] shadow-[0_0_12px_#00ffd0] cursor-pointer items-center justify-center overflow-hidden rounded-3xl h-10 px-4 bg-emerald-300 text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 hover:text-white transition-all shadow-glow-black"
                >                    <span className="truncate">Let's Talk</span>
                </a>
            </div>
        </header>
    );
};

export default Header;