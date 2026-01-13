import Image from 'next/image'
import Link from 'next/dist/client/link';

export function ThirdProject() {
    return (
        <>
            <div className="blockquote flex flex-row w-320 h-fit bg-project space-x-10 border-t-1 border-l-1 border-white/25 rounded-lg overflow-hidden p-10 shadow-xl shadow-black mb-15">
                <div>
                    <Image src="/assets/project/test1.png"
                        alt="test-image"
                        width={1400}
                        height={800}
                        className="mr-10 my-10 rounded-xs"
                    />
                    <div className="flex justify-center">
                        <Link href="https://tailwindcss.com/docs/top-right-bottom-left" className="text-base mb-5">
                            <button className="p-3 px-5 bg-slate-900/95 shadow-md shadow-slate-400/50 rounded-full cursor-pointer"><span className="text-white text-lg font-medium">Visit to Website</span></button>
                        </Link>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-5">TidGame:</h2>
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
        </>
    );
}