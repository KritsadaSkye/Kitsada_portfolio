import Image from "next/image";
import { FirstProject } from "./eachProject/FirstProject";
import { SecondProject } from "./eachProject/SecondProject";
import { ThirdProject } from "./eachProject/ThirdProject";
import { FourthProject } from "./eachProject/FourthProject";
import { FifthProject } from "./eachProject/FifthProject";

export function Project() {
    return (
        <section className="relative w-full pt-16">
            <div className="flex">
                <div className="hidden md:flex flex-col items-center gap-6 px-6 md:pl-20 mb-16">
                    <Image
                        src="/background/project-icon3.png"
                        alt="project-icon"
                        width={80}
                        height={80}
                    />
                    <Image
                        src="/background/project-line03.png"
                        alt="project-line"
                        width={4}
                        height={2800}
                        className="hidden md:block"
                    />
                </div>
                <div className="relative flex flex-col max-w-full px-4 md:px-0 md:pt-3">
                    <h1 className="text-4xl max-w-full self-center md:self-start md:text-6xl mt-1 font-semibold bg-project-name bg-clip-text text-transparent">
                        Projects
                    </h1>

                    <div className="flex flex-col gap-20 mt-7 md:mt-20 md:ml-20">
                        <FirstProject />
                        <SecondProject />
                        <ThirdProject />
                        <FourthProject />
                        <FifthProject />
                    </div>

                    <Image
                        src="/background/cloud-line-art.png"
                        alt="cloud-line"
                        width={320}
                        height={200}
                        className="hidden md:block absolute -bottom-20 -right-50 opacity-80"
                    />
                </div>
            </div>
        </section>
    );
}
