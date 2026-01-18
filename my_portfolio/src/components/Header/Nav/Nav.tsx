"use client";

import { useState } from "react";

export function Nav() {
    const [active, setActive] = useState('about');

    const links = [
        { name: 'About', path: 'about' },
        { name: 'Project', path: 'project' },
        { name: 'Training', path: 'training' },
    ];

    return (
        <>
            <nav className="w-full z-20 fixed md:flex hidden items-center justify-self-center justify-center shadow-lg shadow-slate-400/50 bg-slate-900/95 w-md h-14 rounded-full hover:bg-slate-700 hover:scale-105 transition-all duration-300 cursor-pointer">
                <ul className="flex flex-row font-medium mt-0 rtl:space-x-reverse text-sm">
                    {links.map((link) => (
                        <li key={link.path}>
                            <a
                                href={`#${link.path}`}
                                onClick={() => setActive(link.path)}
                                className={`${active === link.path
                                    ? "bg-white text-slate-700 text-xl"
                                    : "text-white hover:bg-white/10 hover:px-10"
                                    } flex px-12 py-3.5 rounded-full transition-all duration-150 text-lg`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}