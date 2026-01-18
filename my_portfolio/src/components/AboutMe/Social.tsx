import Image from "next/image";

export function Social() {
    return (
        <>
            <div className="show-linear flex space-x-8 mt-2 md:mt-4">
                <a href="https://github.com/KritsadaSkye" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/social/github.png" alt="GitHub" width={60} height={60} className="w-10 md:w-15" />
                </a>
                <a href="https://www.linkedin.com/in/kitsada-trakoolosot" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/social/linkedin.png" alt="LinkedIn" width={60} height={60} className="w-10 md:w-15" />
                </a>
                <a href="https://www.facebook.com/kritsada.trakoonosod.9/?locale=th_TH" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/social/facebook.png" alt="Facebook" width={60} height={60} className="w-10 md:w-15" />
                </a>
            </div>
        </>
    );
}