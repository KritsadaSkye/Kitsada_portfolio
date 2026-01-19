import Link from "next/link";

export function ThirdProject() {
    return (
        <div
            className="blockquote relative w-full max-w-xl md:max-w-screen-xl bg-project border border-white/20 rounded-xl p-6 md:p-10 shadow-xl shadow-black/50">
            <div className="flex flex-col">
                <div>
                    <h2 className="text-xl md:text-2xl font-bold">
                        RFID Card Reader System:
                    </h2>
                </div>
                <p className="text-sm md:text-lg font-bold mt-3">
                    Com Architecture Mini-Project
                </p>
                <p className="text-sm md:text-lg text-slate-300 leading-relaxed">
                    Built a Raspberry Pi-based RFID access control system utilizing
                    Object-Oriented Python and CSV for user verification, featuring
                    automated real-time notifications via LINE Notify API.
                </p>

                <div className="mt-4">
                    <span className="font-bold text-base md:text-lg">Tools:</span>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {[
                            "Raspberry Pi",
                            "RFID-RC522",
                            "Python",
                            "CSV",
                            "mfrc522",
                            "LINE Notify API",
                        ].map((tool) => (
                            <span
                                key={tool}
                                className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs md:text-lg"
                            >
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
    );
}
