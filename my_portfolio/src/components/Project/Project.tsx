import Link from 'next/dist/client/link';
import Image from 'next/image'

export function Project() {
return(
    <>  
        <div className="relative w-full">
            <div className="flex items-center pt-10 pb-10">
                <Image src="/background/project-icon.png"
                    alt="project-icon"
                    width={80}
                    height={100}
                    className="ml-10"
                />
                <span className="text-6xl font-semibold text-green-400 ml-10">Projects</span>
            </div>
            <div className="absolute flex flex-col items-center w-full z-10">
                <div className="flex flex-row w-320 h-fit bg-project space-x-10 border-t-1 border-l-1 border-white/25 rounded-lg overflow-hidden p-10 shadow-md shadow-black/50 mb-15">
                    <div>
                        <Image src="/assets/project/test1.png"
                            alt="test-image"
                            width={1400}
                            height={800}
                            className="mr-10 my-10 rounded-xs"
                        />
                        <div className="pl-8">
                            <Link href="https://tailwindcss.com/docs/top-right-bottom-left" className="text-base mb-5">https://tailwindcss.com/docs/top-right-bottom-left</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-5">TidGame</h2>
                        <ul className="space-y-4">
                            <li>
                                <span className="font-bold text-lg">Personal Portfolio Website</span>
                                <p className="text-lg text-slate-300 leading-relaxed mt-1">
                                    Developed a personal portfolio website using **Next.js** and **Tailwind CSS** 
                                to showcase my projects and skills. Implemented responsive design principles 
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
                <div className="relative flex flex-row w-380 h-170 space-x-10 pl-15">  
                    <div className="flex flex-col space-y-10">
                        <div className="flex justify-center items-center w-140 h-80 bg-project border-1 border-white/25 rounded-lg overflow-hidden p-5 shadow-md shadow-black/50">
                            <Image src="/assets/project/test1.png"
                            alt="test-image"
                            width={1600}
                            height={900}
                            className="rounded-xs"/>  
                        </div>
                        <div className="absolute flex justify-center items-center w-120 h-75 bg-project border-1 border-white/25 rounded-lg overflow-hidden p-5 shadow-md shadow-black/75 bottom-8 left-55">
                            <Image src="/assets/project/test2.png"
                            alt="test-image"
                            width={1600}
                            height={700}
                            className="object-cover h-65 rounded-xs"
                            />
                        </div>
                    </div>
                    <div className="w-180 h-fit bg-project border-1 border-white/25 rounded-lg overflow-hidden p-10 shadow-md shadow-black/50">
                        <div className="pl-8">
                            <h2 className="text-3xl font-bold mb-5">TidGame</h2>
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
                </div>
                <Image src="/background/cloud-line-art.png"
                alt="cloud-line"
                width={350}
                height={210}
                className="absolute bottom-0 right-0"
                />
            </div>
        </div>
    </>
);
}