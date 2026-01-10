import Link from 'next/link'

export function Nav() {
    return (
        <>
            <nav className="fixed w-full z-20 top-0 start-0 sticky justify-items-center items-center pt-10 pb-30">
                <div className="fixed flex items-center  justify-center shadow-lg shadow-slate-400/50 bg-slate-700 w-md h-14 rounded-full">
                    <ul className="flex flex-row font-medium mt-0 space-x-21 rtl:space-x-reverse text-sm">
                        <li>
                            <Link href="#" className="text-lg text-heading font-medium transition-all duration-150 hover:text-xl" aria-current="page">About</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-lg text-heading font-medium hover:underline">Project</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-lg text-heading font-medium hover:underline">Training</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}