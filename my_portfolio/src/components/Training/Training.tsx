import Image from 'next/image'
import { CarouselSize } from './Carousel'

export function Training() {
    return (
        <>
            <div className="relative w-full pb-80">
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
                    <Image src="/background/training-line02.png"
                        alt="training-line"
                        width={3}
                        height={650}
                        className="absolute ml-22.5 top-42"
                    />
                    <div className="w-full z-10 mt-10">
                        <CarouselSize />
                    </div>
                </div>
            </div >
        </>
    );
}