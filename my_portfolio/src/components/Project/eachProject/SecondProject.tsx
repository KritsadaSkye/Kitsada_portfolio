import Image from 'next/image'
import Link from 'next/dist/client/link';

export function SecondProject() {
    return (
        <>
            <div className="blockquote relative flex flex-row w-380 h-170 space-x-10 pl-15 z-10">
                <div className="flex flex-col space-y-10">
                    <div className="flex justify-center items-start w-140 h-160">
                        <div className="absolute flex flex-col justify-center items-center w-140 h-80 bg-project/90 border-1 border-white/25 rounded-lg overflow-hidden h-95 p-10 shadow-md shadow-black -top-10">
                            <video autoPlay loop muted playsInline className="rounded-xl mt-5">
                                <source src="/assets/project/shabu-dash1.mkv" type="video/mp4" />
                            </video>
                            <Link href="https://github.com/KritsadaSkye/ShabuDashboard" className="text-base mt-2">
                                <button className="p-3 px-5 bg-slate-900/95 shadow-md shadow-slate-400/50 rounded-full cursor-pointer"><span className="text-white text-lg font-medium">Code</span></button>
                            </Link>
                        </div>
                        <div className="absolute flex justify-center items-center w-120 h-75 bg-project/90 border-1 border-white/25 rounded-lg overflow-hidden p-5 shadow-md shadow-black bottom-8 left-55">
                            <Image src="/assets/project/test2.png"
                                alt="test-image"
                                width={1600}
                                height={700}
                                className="object-cover h-65 rounded-xs"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-180 h-fit bg-project border-1 border-white/25 rounded-lg overflow-hidden p-10 shadow-xl shadow-black">
                    <div className="pl-8">
                        <h2 className="text-2xl font-bold mb-3">Smart Shabu Stick Counting & Pricing System:</h2>
                        <ul className="space-y-4">
                            <li>
                                <span className="font-bold text-lg">Microcontroller Mini-Project</span>
                                <p className="text-lg text-slate-300 leading-relaxed mt-1">
                                    Developed 'ShabuDashboard,' a full-stack web application using React (Vite) and Node.js (Express) connected to a MySQL database. The system features a custom algorithm to calculate daily revenue based on specific product categories and visualizes sales history for business analysis.
                                </p>
                            </li>
                            <li>
                                <span className="font-bold text-lg">Tools:</span>
                                <div className="flex flex-wrap gap-2 mt-2 text-xs">
                                    {['Raspberry Pi', 'CameraPi', 'OpenCV', 'React', 'Node.js (Express)', 'MySQL', 'REST API'].map((tool) => (
                                        <span key={tool} className="px-3 py-1 bg-white/10 rounded-full border border-white/20 text-lg text-slate-200">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}