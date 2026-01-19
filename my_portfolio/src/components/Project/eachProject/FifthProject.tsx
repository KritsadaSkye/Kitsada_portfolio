import Image from 'next/image'

export function FifthProject() {
    return (
        <div className="relative flex flex-col md:flex-row md:flex-row-reverse items-center w-full max-w-full md:max-w-screen-xl gap-8 md:gap-10 py-16 border-y-1 md:border-none">

            <div className="relative w-full md:w-xl md:h-fit flex flex-col items-center gap-5">

                <div
                    className="
                        w-full max-w-sm
                        md:absolute md:top-0 md:left-0
                        bg-project/90 border border-white/25
                        rounded-lg overflow-hidden
                        p-4
                        shadow-md shadow-black
                        z-10
                    "
                >
                    <Image
                        src="/assets/project/pcb.jpg"
                        alt="pcb"
                        width={1000}
                        height={700}
                        className="w-full h-auto rounded-md"
                    />
                </div>

                <div
                    className="
                        w-full max-w-sm
                        md:absolute md:-bottom-10 md:left-[120px]
                        bg-project/90 border border-white/25
                        rounded-lg overflow-hidden
                        p-4
                        shadow-md shadow-black
                    "
                >
                    <Image
                        src="/assets/project/wave.jpg"
                        alt="wave"
                        width={1000}
                        height={700}
                        className="w-full h-auto rounded-md"
                    />
                </div>
            </div>

            <div className="w-full md:max-w-[720px] bg-project border border-white/25 rounded-lg p-6 md:p-10 shadow-xl shadow-black">
                <h2 className="text-xl md:text-2xl font-bold mb-3">
                    Full-Wave Rectifier Power Supply:
                </h2>

                <p className="font-bold text-sm md:text-lg mb-2">
                    Electronic Devices & Circuit Design Project
                </p>

                <p className="text-sm md:text-lg text-slate-300 leading-relaxed mb-6">
                    This project demonstrates the design and implementation of a
                    basic AC to DC power supply circuit, including circuit assembly,
                    testing, and signal analysis. The circuit uses a step-down
                    transformer to reduce the AC input voltage, followed by a
                    full-wave rectifier constructed from discrete diodes to convert
                    AC into DC. A filter capacitor is then used to reduce ripple
                    voltage, and an LED indicator is added to verify the output
                    status.
                </p>

                <div className="mt-4">
                    <span className="font-bold text-base md:text-lg">Tools:</span>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {["Step-down transformer", "Diodes", "Capacitor", "LED"].map(
                            (tool) => (
                                <span
                                    key={tool}
                                    className="px-3 py-1 bg-white/10 rounded-full border border-white/20 text-xs md:text-lg text-slate-200"
                                >
                                    {tool}
                                </span>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}