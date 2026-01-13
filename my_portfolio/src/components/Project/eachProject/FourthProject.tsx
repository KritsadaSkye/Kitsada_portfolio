import Image from 'next/image'
import Link from 'next/dist/client/link';

export function FourthProject() {
    return (
        <>
            <div className="blockquote relative flex flex-row w-380 h-170 space-x-10 pl-15 z-10">
                <div className="w-180 h-fit bg-project border-1 border-white/25 rounded-lg overflow-hidden p-10 shadow-xl shadow-black">
                    <div className="pr-8">
                        <h2 className="text-3xl font-bold mb-5">TidGame:</h2>
                        <ul className="space-y-4">
                            <li>
                                <span className="font-bold text-lg">Personal Portfolio Website</span>
                                <p className="text-lg text-slate-300 leading-relaxed mt-1">
                                    Developed a personal portfolio website using **Next.js** and **Tailwind CSS**
                                    to showcase my projects and skills. Implemented responsive design principles
                                    to ensure optimal viewing across various devices. Integrated smooth scrolling
                                    and interactive elements to enhance user experience. Implemented responsive design principles
                                    to ensure optimal viewing across various devices. Integrated smooth scrolling
                                    and interactive elements to enhance user experience.
                                </p>
                            </li>
                            <li>
                                <span className="font-bold text-lg">Tools:</span>
                                <div className="flex flex-wrap gap-2 mt-2 text-xs">
                                    {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Docker', 'Prisma', 'PostgreSQL'].map((tool) => (
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
                        <Image src="/assets/project/test1.png"
                            alt="test-image"
                            width={1600}
                            height={900}
                            className="rounded-xs" />
                    </div>
                    <div className="absolute flex justify-self-end justify-center items-center w-120 h-75 bg-project/90 border-1 border-white/25 rounded-lg overflow-hidden p-5 shadow-md shadow-black bottom-15">
                        <Image src="/assets/project/test2.png"
                            alt="test-image"
                            width={1600}
                            height={700}
                            className="object-cover h-65 rounded-xs"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}