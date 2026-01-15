import Image from 'next/image'
import { Certificate } from '@/data/certificate';

export function Card({ certificate }: { certificate: Certificate }) {
    return (
        <>
            <div className="p-3">
                <div className="w-102 h-130 bg-project rounded-xl shadow-2xl box-sizing pb-5 mx-5 border-2 border-gray-400/25 hover:scale-105 transition-transform duration-300">
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
                            <Image src={certificate.img}
                                alt="test-image"
                                width={350}
                                height={500}
                                className="rounded-xs"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-center mt-4">{certificate.title}</h3>
                            <p className="text-md text-slate-300 leading-relaxed mt-2 px-5 text-center">
                                {certificate.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}