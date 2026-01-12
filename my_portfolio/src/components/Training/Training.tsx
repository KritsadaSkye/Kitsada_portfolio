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
                    <span className="text-6xl font-semibold bg-training-name bg-clip-text text-transparent ml-10">Training</span>
                </div>
                <div className="flex">
                    <Image src="/background/project-line.png"
                        alt="project-line"
                        width={4}
                        height={2610}
                        className="ml-22.5 top-35"
                    />
                    <div className="grid grid-cols-3 justify-center  w-full z-10">
                        <div className="w-102 h-100 mx-auto bg-project rounded-xl shadow-2xl">
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
                        </div>
                        <div className="w-102 h-100 mx-auto bg-project rounded-xl shadow-2xl">
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
                        </div>
                        <div className="w-102 h-100 mx-auto bg-project rounded-xl shadow-2xl">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}