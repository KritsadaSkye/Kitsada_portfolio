import Image from 'next/image'

export function Training() {
    return (
        <>
            <div className="relative w-full h-fit">
                <div className="flex items-center pt-10 pb-10">
                    <Image src="/background/training-icon.png"
                        alt="training-icon"
                        width={100}
                        height={100}
                        className="ml-10"
                    />
                    <span className="pb-1 text-6xl font-semibold bg-training-name bg-clip-text text-transparent ml-10 mt-3 z-20">Training</span>
                </div>
                <div className="flex">
                    <Image src="/background/project-line.png"
                        alt="project-line"
                        width={4}
                        height={2610}
                        className="ml-22.5"
                    />
                    <div className="w-full z-10">
                        <div className="grid grid-cols-3 justify-items-center px-10">
                            <div className="w-102 h-120 bg-project rounded-xl shadow-2xl">
                                <div className="flex items-center p-3">
                                    <div className="px-1">
                                        <span className="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
                                    </div>
                                    <div className="px-1">
                                        <span className="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
                                    </div>
                                    <div className="px-1">
                                        <span className="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
                                    </div>
                                </div>
                                <div className="flex flex-col ">
                                    <div className="flex justify-center pb-5 border-b-2 border-gray-400/25 mx-5">
                                        <Image src="/assets/project/test1.png"
                                            alt="test-image"
                                            width={350}
                                            height={500}
                                            className="rounded-xs"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-center mt-4">Training Title</h3>
                                        <p className="text-md text-slate-300 leading-relaxed mt-2 px-5 text-center">
                                            Brief description of the training program or course.describing key topics covered and skills gained. with a focus on practical applications and real-world scenarios.delivering valuable knowledge to enhance professional development.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-102 h-120 bg-project rounded-xl shadow-2xl">
                                <div className="flex items-center p-3">
                                    <div className="px-1">
                                        <span className="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
                                    </div>
                                    <div className="px-1">
                                        <span className="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
                                    </div>
                                    <div className="px-1">
                                        <span className="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
                                    </div>
                                </div>
                                <div className="flex flex-col ">
                                    <div className="flex justify-center pb-5 border-b-2 border-gray-400/25 mx-5">
                                        <Image src="/assets/project/test1.png"
                                            alt="test-image"
                                            width={350}
                                            height={500}
                                            className="rounded-xs"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-center mt-4">Training Title</h3>
                                        <p className="text-md text-slate-300 leading-relaxed mt-2 px-5 text-center">
                                            Brief description of the training program or course.describing key topics covered and skills gained. with a focus on practical applications and real-world scenarios.delivering valuable knowledge to enhance professional development.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-102 h-120 bg-project rounded-xl shadow-2xl">
                                <div className="flex items-center p-3">
                                    <div className="px-1">
                                        <span className="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
                                    </div>
                                    <div className="px-1">
                                        <span className="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
                                    </div>
                                    <div className="px-1">
                                        <span className="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
                                    </div>
                                </div>
                                <div className="flex flex-col ">
                                    <div className="flex justify-center pb-5 border-b-2 border-gray-400/25 mx-5">
                                        <Image src="/assets/project/test1.png"
                                            alt="test-image"
                                            width={350}
                                            height={500}
                                            className="rounded-xs"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-center mt-4">Training Title</h3>
                                        <p className="text-md text-slate-300 leading-relaxed mt-2 px-5 text-center">
                                            Brief description of the training program or course.describing key topics covered and skills gained. with a focus on practical applications and real-world scenarios.delivering valuable knowledge to enhance professional development.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}