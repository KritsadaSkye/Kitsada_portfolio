import Link from 'next/dist/client/link';

export function FourthProject() {

    return (
        <>
            <div
                className="blockquote relative w-full max-w-xl md:max-w-screen-xl bg-project border border-white/20 rounded-xl p-6 md:p-10 shadow-xl shadow-black/50">
                <div className="flex flex-col">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold">
                            Booking Flight System:
                        </h2>
                    </div>
                    <p className="text-sm md:text-lg font-bold mt-3">
                        Data Structures & Algorithms Mini-Project
                    </p>
                    <p className="text-sm md:text-lg text-slate-300 leading-relaxed">
                        Developed a comprehensive desktop Flight Booking System using Python, utilizing Object-Oriented Programming (OOP) to architect modular class structures for managing flight and passenger data, while implementing efficient algorithms to optimize route searching logic and real-time seat availability checks.
                    </p>

                    <div className="mt-4">
                        <span className="font-bold text-base md:text-lg">Tools:</span>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {['Python', 'Tkinter', 'MySQL'].map((tool) => (
                                <span
                                    key={tool}
                                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs md:text-lg">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <Link href="https://github.com/KritsadaSkye/RFID-CardReaderSystem">
                            <button
                                className="px-6 py-2 rounded-full bg-slate-900/90 hover:bg-slate-800 transition shadow-md shadow-slate-400/50 text-sm md:text-lg">
                                Code
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}