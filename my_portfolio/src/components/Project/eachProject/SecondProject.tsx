import Image from "next/image";
import Link from "next/link";

export function SecondProject() {
    return (
        <div className="relative flex flex-col md:flex-row items-center w-full max-w-full md:max-w-screen-xl gap-8 md:gap-15 z-10 border-y-1 py-15 md:border-none">

            <div className="relative w-full md:w-2xl md:h-[640px] flex flex-col items-center gap-5">
                <div
                    className="
                        w-full max-w-sm
                        md:absolute md:max-w-screen-xl md:top-0 md:left-0
                        flex flex-col items-center
                        bg-project/90 border border-white/25
                        rounded-lg overflow-hidden
                        px-4 md:px-8 py-4
                        shadow-md shadow-black
                        z-10
                    ">
                    <div className="w-full aspect-video overflow-hidden rounded-xl mt-4">
                        <video
                            autoPlay loop muted playsInline className="w-full h-full object-cover">
                            <source
                                src="/assets/project/shabu-dash1.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>

                    <Link
                        href="https://github.com/KritsadaSkye/ShabuDashboard"
                        className="mt-4"
                    >
                        <button className="px-6 py-2 rounded-full bg-slate-900/90 hover:bg-slate-800 transition shadow-md shadow-slate-400/50 text-sm md:text-lg">
                            Code
                        </button>
                    </Link>
                </div>

                <div
                    className="
                        w-full max-w-sm
                        md:max-w-md md:absolute md:-bottom-15 md:left-[130px]
                        bg-project/90 border border-white/25
                        rounded-lg overflow-hidden
                        p-4
                        shadow-md shadow-black
                    "
                >
                    <Image
                        src="/assets/project/test2.png"
                        alt="test-image"
                        width={1600}
                        height={700}
                        className="rounded-sm w-full h-auto"
                    />
                </div>
            </div>

            <div className="w-full md:max-w-[720px] bg-project border border-white/25 rounded-lg p-6 md:p-10 shadow-xl shadow-black">
                <h2 className="text-xl md:text-2xl font-bold mb-3">
                    Smart Shabu Stick Counting & Pricing System:
                </h2>

                <p className="font-bold text-sm md:text-lg mb-2">
                    Microcontroller Mini-Project
                </p>

                <p className="text-sm md:text-lg text-slate-300 leading-relaxed mb-6">
                    Developed 'ShabuDashboard,' a full-stack web application using
                    React (Vite) and Node.js (Express) connected to a MySQL database.
                    The system features a custom algorithm to calculate daily revenue
                    based on specific product categories and visualizes sales history
                    for business analysis.
                </p>
                <div className="mt-4">
                    <span className="font-bold text-base md:text-lg">Tools:</span>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {[
                            "Raspberry Pi",
                            "CameraPi",
                            "OpenCV",
                            "React",
                            "Node.js (Express)",
                            "MySQL",
                            "REST API",
                        ].map((tool) => (
                            <span
                                key={tool}
                                className="px-3 py-1 bg-white/10 rounded-full border border-white/20 text-xs md:text-lg text-slate-200"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
