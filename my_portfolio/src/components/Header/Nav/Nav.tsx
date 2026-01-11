import Link from 'next/link'

export function Nav() {
    return (
        <>
                <nav className="w-full z-20 fixed flex items-center justify-self-center justify-center shadow-lg shadow-slate-400/50 bg-slate-900/95 w-md h-14 rounded-full hover:bg-slate-700 transition-all duration-300 cursor-pointer">
                    <ul className="flex flex-row font-medium mt-0 rtl:space-x-reverse text-sm">
                        <li>
                            <Link href="#about" className="flex content-center px-12 py-3.5 active:bg-white rounded-full transition-all duration-150 focus:bg-white group" aria-current="page"><span className="text-lg text-heading font-medium transition-all duration-150 hover:text-xl group-hover:scale-105 group-active:text-slate-700 group-focus:text-slate-700
                            group-active:text-xl group-focus:text-xl">About</span></Link>
                        </li>
                       <li>
                            <Link href="#project" className="flex content-center px-12 py-3.5 active:bg-white rounded-full transition-all duration-150 focus:bg-white group" aria-current="page"><span className="text-lg text-heading font-medium transition-all duration-150 hover:text-xl group-hover:scale-105 group-active:text-slate-700 group-focus:text-slate-700
                            group-active:text-xl group-focus:text-xl">Project</span></Link>
                        </li>
                        <li>
                            <Link href="#training" className="flex content-center px-12 py-3.5 active:bg-white rounded-full transition-all duration-150 focus:bg-white group" aria-current="page"><span className="text-lg text-heading font-medium transition-all duration-150 hover:text-xl group-hover:scale-105 group-active:text-slate-700 group-focus:text-slate-700
                            group-active:text-xl group-focus:text-xl">Training</span></Link>
                        </li>
                    </ul>
                </nav>
        </>
    );
}