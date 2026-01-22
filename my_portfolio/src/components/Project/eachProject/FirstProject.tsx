import Image from 'next/image'
import Link from 'next/dist/client/link';

export function FirstProject() {
    return (
        <>
            <div className="blockquote flex flex-col items-center xl:flex-row items-center w-full max-w-full xl:max-w-screen-xl bg-project md:space-x-10 border-t-1 border-l-1 border-white/25 rounded-lg overflow-hidden p-10 pb-10 shadow-xl shadow-black mb-10">
                <div className="flex flex-col content-center">
                    <Image src="/assets/project/tidgame-img.PNG"
                        alt="test-image"
                        width={500}
                        height={800}
                        className="md:my-10 my-5 rounded-xs md:max-w-md shadow-sm shadow-black/75"
                    />
                    <div className="flex justify-center space-x-5 mb-3">
                        <Link target="_blank" href="http://18.234.52.28:3000/products" className="text-base mb-5">
                            <button className="p-2 px-5 bg-slate-900/95 shadow-md shadow-slate-400/50 rounded-full cursor-pointer"><span className="text-white text-lg font-medium">Website</span></button>
                        </Link>
                        <Link href="https://github.com/KritsadaSkye/TidGame" className="text-base mb-5">
                            <button className="p-2 px-5 bg-slate-900/95 shadow-md shadow-slate-400/50 rounded-full cursor-pointer"><span className="text-white text-lg font-medium">Code</span></button>
                        </Link>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Online Game Account Marketplace:</h2>
                    <ul className="space-y-4">
                        <li>
                            <span className="font-bold text-lg">Personal Portfolio Website</span>
                            <p className="text-lg text-slate-300 leading-relaxed mt-1">
                                TidGame is a full-stack web application for selling game accounts, where I designed and built both the frontend and backend by myself. The system includes user authentication using JWT, product and account management, a shopping cart, and order handling. I used Next.js for the frontend, API routes for the backend, and PostgreSQL with Prisma for the database. I also used Docker to manage the database and pgAdmin, and deployed the system on a Linux server. Through this project, I have gained practical experience in full-stack development and real-world system design.
                            </p>
                        </li>
                        <li>
                            <span className="font-bold text-lg">Tools:</span>
                            <div className="flex flex-wrap gap-2 mt-3 text-xs">
                                {['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API', 'Prisma', 'PostgreSQL', 'Docker', 'AWS'].map((tool) => (
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