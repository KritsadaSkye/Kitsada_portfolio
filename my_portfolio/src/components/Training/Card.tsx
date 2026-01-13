import Image from 'next/image'

export function Card() {
    return (
        <>
            <div className="w-102 h-120 bg-project rounded-xl shadow-2xl box-sizing">
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
        </>
    );
}