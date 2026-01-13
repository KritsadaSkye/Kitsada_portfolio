"use client"
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

export function AboutMe() {
    return (
        <>
            <div className="relative flex justify-center w-full h-164.75">
                <div className="absolute inset-0 z-10 flex flex-col">
                    <div className="basis-2/3">
                        <Image src="/background/small-celestial-fog.png"
                            alt="profile"
                            width={400}
                            height={100}
                            className="absolute z-20 top-0 left-10 rounded-e-full" />
                        <div className="absolute z-20 max-w-7xl flex flex-col pt-32 w-full pr-20">
                            <div>
                                <h1 className="text-violet-400 text-6xl font-semibold mb-2 pl-40">About Me</h1>
                                <h1 className="text-6xl font-bold mb-3 text-white justify-self-end"><TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        'Kitsada Trakool-osot',
                                        3000,
                                        '',
                                        2000,
                                        'Kitsada Trakool-osot',
                                    ]}
                                    wrapper="span"
                                    speed={30}
                                    style={{ fontSize: '5xl', display: 'inline-block' }}
                                    repeat={2}
                                /></h1>
                            </div>
                            <div>
                                <p className="text-white/85 text-xl pl-50 mb-6">
                                    Hello! I'm Kitsada, a passionate front-end developer with a knack for creating engaging and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and visually appealing websites. I love turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you can find me exploring the latest tech trends or working on personal projects to sharpen my skills.
                                </p>
                                <div className="flex flex-col pl-40">
                                    <h1 className="text-5xl font-bold mb-2 text-white">
                                        skills
                                    </h1>
                                    <div className="pl-8 flex flex-col space-y-2">
                                        <p className="text-xl font-bold text-white/95">
                                            Frontend: <span className="font-thin text-white/90">React, Next.js, TypeScript, and Tailwind CSS</span>
                                        </p>
                                        <p className="text-xl font-bold text-white/95">
                                            Backend: <span className="font-thin text-white/90">Nodejs, Express, Prisma, and SQL</span>
                                        </p>
                                        <p className="text-xl font-bold text-white/95">
                                            Cloud & Infrastructure: <span className="font-thin text-white/90">AWS (Amazon Web Services), Docker</span>
                                        </p>
                                        <p className="text-xl font-bold text-white/95">
                                            Programming & Tools: <span className="font-thin text-white/90">Python, C, Git, Postman, and Figma</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/3">
                        <Image src="/assets/profile/profile.jpg"
                            alt="profile"
                            width={320}
                            height={320}
                            className="absolute top-15 right-40 rounded-full" />
                        <Image src="/background/moon art.png"
                            alt="moon art"
                            width={478}
                            height={285}
                            className="absolute -bottom-10 right-140"
                        />
                    </div>
                </div>
                <Image src="/background/home-pattern-1.png"
                    alt="background about"
                    width={1980}
                    height={659}
                    className="object-cover z-0 opacity-100"
                />
            </div>
        </>
    );
}