'use client';

import { useState } from "react";
import { Nav } from "./Nav/Nav";


export function Header() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="w-full z-20 top-0 start-0 flex items-center justify-center pt-15 pb-15">
                <Nav />
                <div className="absolute lg:end-20">
                    <div className="group flex items-center lg:items-end overflow-hidden z-10 w-fit cursor-pointer transition-all duration-300" onClick={() => setOpen(!open)}>
                        <div className="flex flex-col items-center lg:flex-row whitespace-nowrap text-lg font-medium">
                            Contact
                            <span className={`flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out  ${open ? "group-hover:max-w-screen-sm group-hover:opacity-100" : " max-w-0 opacity-0"} group-hover:ml-1 text-slate-50/80`}>
                                <span className="md:inline hidden mx-2 text-white text-lg font-semibold">|</span>
                                <div className="flex md:flex-row flex-col content-start">
                                    <span className="lg:ml-3 block">trakoolosot_k@silpakorn.edu</span>
                                    <span className="md:inline hidden mx-2">|</span>
                                    <span className="block">Tel: +66 638691220</span>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}