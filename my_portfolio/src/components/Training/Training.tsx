import Image from 'next/image'
import { CarouselSize } from './Carousel'

export function Training() {
    return (
        <section className="relative w-full py-16 ">
            <div className="flex">
                <div className="hidden md:flex flex-col items-center gap-6 px-6 md:pl-20 mb-16">
                    <Image
                        src="/background/training-icon.png"
                        alt="training-icon"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/background/training-line02.png"
                        alt="training-line"
                        width={3}
                        height={650}
                        className="hidden md:block"
                    />
                </div>

                <div className="relative flex flex-col max-w-full px-4 md:px-0 md:pt-3">
                    <h1 className="text-4xl max-w-full self-center md:self-start md:text-6xl mt-1 font-semibold bg-training-name bg-clip-text text-transparent">
                        Training
                    </h1>

                    <div className="mt-9 lg:mt-20">
                        <CarouselSize />
                    </div>
                </div>
            </div>
        </section>
    );
}
