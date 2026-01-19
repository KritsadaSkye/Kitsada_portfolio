"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Social } from "./Social";

export function AboutMe() {
    return (
        <section className="relative w-full 3xl:flex flex-col items-center">
            <Image
                src="/background/home-pattern-1.png"
                alt="background about"
                fill
                className="object-cover -z-10"
            />

            <Image src="/background/small-celestial-fog.png"
                alt="profile"
                width={400}
                height={100}
                className="show-up-web z-20 top-0 left-10 rounded-e-full hidden md:block" />

            <div className="md:flex flex-col mx-auto 2xl:max-w-screen-2xl px-6 py-0 lg:px-0">
                <div className="flex flex-col-reverse md:flex-row items-center gap-2">

                    <div className="md:w-3/5 flex flex-col text-center md:text-left">
                        <h2 className="text-violet-400 text-4xl md:text-6xl font-semibold">
                            About Me
                        </h2>

                        <h1 className="text-2xl md:text-5xl font-bold text-white mb-3 lg:self-end">
                            <TypeAnimation
                                sequence={[
                                    "Kitsada Trakool-osot",
                                    3000,
                                    "",
                                    1000,
                                    "Kitsada Trakool-osot",
                                ]}
                                speed={40}
                                repeat={Infinity}
                            />
                        </h1>

                        <p className="text-white/85 text-sm md:text-xl leading-relaxed max-w-2xl mx-auto lg:max-w-full md:ml-5">
                            Hello! I'm Skye, a third-year student at Silpakorn University,
                            majoring in Electronics and Computer Systems Engineering. I have
                            experience in both hardware and software, which helps me
                            understand systems from the inside out. I am especially
                            interested in full-stack development and related technology
                            fields. I enjoy learning new tools and improving my coding and
                            problem-solving skills, and I am looking for an internship where
                            I can gain real-world experience and grow as a developer.
                        </p>
                    </div>


                    <div className="md:w-2/5 flex flex-col items-center gap-4">
                        <Image
                            src="/assets/profile/profile.jpg"
                            alt="profile"
                            width={300}
                            height={300}
                            className="w-64 md:w-80 rounded-full"
                        />
                        <Social />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl md:text-5xl font-bold text-white">
                        Skills
                    </h2>

                    <div className="flex flex-col gap-1 text-sm md:text-xl md:ml-5  ">
                        <p className="text-white/90">
                            <span className="font-semibold text-white">Frontend:</span>
                            React, Next.js, TypeScript, Tailwind CSS
                        </p>
                        <p className="text-white/90">
                            <span className="font-semibold text-white">Backend:</span>
                            Node.js, Express, Prisma, SQL
                        </p>
                        <p className="text-white/90">
                            <span className="font-semibold text-white">
                                Cloud & Infrastructure:
                            </span>
                            AWS, Docker
                        </p>
                        <p className="text-white/90">
                            <span className="font-semibold text-white">
                                Programming & Tools:
                            </span>
                            Python, C, Git, Postman, Figma
                        </p>
                    </div>
                </div>

                <Image
                    src="/background/moon art.png"
                    alt="moon art"
                    width={480}
                    height={285}
                    className="hidden xl:block absolute -bottom-20 right-160 opacity-80"
                />
            </div>
        </section>
    );
}
