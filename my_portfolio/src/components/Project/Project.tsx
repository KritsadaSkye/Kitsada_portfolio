import Image from 'next/image'
import { FirstProject } from './eachProject/FirstProject'
import { SecondProject } from './eachProject/SecondProject'
import { ThirdProject } from './eachProject/ThirdProject'
import { FourthProject } from './eachProject/FourthProject'
import { FifthProject } from './eachProject/FifthProject'

export function Project() {
    return (
        <>
            <div className="relative w-full h-auto">
                <div className="flex items-center pt-10 pb-10">
                    <Image src="/background/project-icon3.png"
                        alt="project-icon"
                        width={100}
                        height={100}
                        className="ml-10"
                    />
                    <span className="text-6xl font-semibold bg-project-name bg-clip-text text-transparent ml-10 mt-2">Projects</span>
                </div>
                <div className="flex">
                    <Image src="/background/project-line03.png"
                        alt="project-line"
                        width={4}
                        height={2920}
                        className="absolute ml-22.5 top-42"
                    />
                    <div className="flex flex-col items-center w-full z-10 gap-y-15">

                        <FirstProject />

                        <SecondProject />

                        <ThirdProject />

                        <FourthProject />

                        <FifthProject />

                        <Image src="/background/cloud-line-art.png"
                            alt="cloud-line"
                            width={350}
                            height={210}
                            className="blockquote absolute bottom-0 right-0"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}