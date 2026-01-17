import Image from 'next/image'

export function FifthProject() {
    return (
        <>
            <div className="blockquote relative flex flex-row w-380 h-170 space-x-10 pl-15 z-10">
                <div className="w-180 h-fit bg-project border-1 border-white/25 rounded-lg overflow-hidden p-10 shadow-xl shadow-black">
                    <div className="pr-8">
                        <h2 className="text-2xl font-bold mb-5">Full-Wave Rectifier Power Supply:</h2>
                        <ul className="space-y-4">
                            <li>
                                <span className="font-bold text-lg">
                                    Electronic Devices & CircuitDesign Project</span>
                                <p className="text-lg text-slate-300 leading-relaxed mt-1">
                                    This project demonstrates the design and implementation of a basic AC to DC power supply circuit, including circuit assembly, testing, and signal analysis. The circuit uses a step-down transformer to reduce the AC input voltage, followed by a full-wave rectifier constructed from discrete diodes to convert AC into DC. A filter capacitor is then used to reduce ripple voltage, and an LED indicator is added to verify the output status.
                                </p>
                            </li>
                            <li>
                                <span className="font-bold text-lg">Tools:</span>
                                <div className="flex flex-wrap gap-2 mt-2 text-xs">
                                    {['Step-down transformer', 'Diodes', 'Capacitor', 'LED'].map((tool) => (
                                        <span key={tool} className="px-3 py-1 bg-white/10 rounded-full border border-white/20 text-lg text-slate-200">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col space-y-10">
                    <div className="absolute flex justify-center items-center w-140 h-80 bg-project/90 border-1 border-white/25 rounded-lg overflow-hidden p-5 shadow-md shadow-black -top-10 right-50">
                        <Image src="/assets/project/pcb.jpg"
                            alt="test-image"
                            width={1000}
                            height={700}
                            className="object-cover h-65 rounded-xs shadow-md shadow-black" />
                    </div>
                    <div className="absolute flex justify-self-end justify-center items-center w-120 h-75 bg-project/90 border-1 border-white/25 rounded-lg overflow-hidden p-5 shadow-md shadow-black bottom-15">
                        <Image src="/assets/project/wave.jpg"
                            alt="test-image"
                            width={1600}
                            height={700}
                            className="object-cover h-65 rounded-xs shadow-md shadow-black"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}