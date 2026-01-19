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
                <div className="hidden xl:flex flex-col items-center gap-6 px-6 xl:pl-20 mb-16">
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
                <div className="relative flex flex-col max-w-full px-4 xl:px-0 xl:pt-3">
                    <h1 className="text-4xl max-w-full self-center xl:self-start md:text-6xl mt-1 font-semibold bg-project-name bg-clip-text text-transparent">
                        Projects
                    </h1>

                    <div className="flex flex-col gap-20 mt-7 xl:mt-20 xl:ml-20">
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
                        className="hidden xl:block absolute -bottom-20 -right-50 opacity-80"
                    />
                </div>
            </div>
        </section>
    );
}
