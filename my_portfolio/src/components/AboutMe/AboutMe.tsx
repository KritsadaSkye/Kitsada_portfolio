import Image from 'next/image'

export function AboutMe() {
    return (
        <>
            <div>
                <div className="absolute">dsadas</div>
                <Image src="/background/moon art.png"
                    alt="moon art"
                    width={500}
                    height={300}
                    className="absolute bottom-20 right-20"
                />
                <Image src="/background/home-pattern-1.png"
                    alt="background about"
                    width={1980}
                    height={659}
                    className="relative"
                />
            </div>
        </>
    );
}