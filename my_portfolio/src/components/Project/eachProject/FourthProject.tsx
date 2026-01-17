import Link from 'next/dist/client/link';

export function FourthProject() {
    return (
        <>
            <div className="blockquote flex flex-row w-320 h-fit bg-project space-x-10 border-t-1 border-l-1 border-white/25 rounded-lg overflow-hidden p-10 pb-5 shadow-xl shadow-black mb-15">
                <div>
                    <h2 className="text-2xl font-bold mb-3">Booking Flight System:</h2>
                    <ul className="space-y-4 mb-6">
                        <li>
                            <span className="font-bold text-lg">Data Structures & Algorithms Mini-Project</span>
                            <p className="text-lg text-slate-300 leading-relaxed mt-1">
                                Developed a comprehensive desktop Flight Booking System using Python, utilizing Object-Oriented Programming (OOP) to architect modular class structures for managing flight and passenger data, while implementing efficient algorithms to optimize route searching logic and real-time seat availability checks.
                            </p>
                        </li>
                        <li>
                            <span className="font-bold text-lg">Tools:</span>
                            <div className="flex flex-wrap gap-2 mt-2 text-xs">
                                {['Python', 'Tkinter', 'MySQL'].map((tool) => (
                                    <span key={tool} className="px-3 py-1 bg-white/10 rounded-full border border-white/20 text-lg text-slate-200">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </li>
                    </ul>
                    <Link href="https://github.com/KritsadaSkye/Flight-Booking-System-" className="text-base">
                        <button className="p-2 px-5 bg-slate-900/95 shadow-md shadow-slate-400/50 rounded-full cursor-pointer"><span className="text-white text-lg font-medium">Code</span></button>
                    </Link>
                </div>
            </div>
        </>
    );
}