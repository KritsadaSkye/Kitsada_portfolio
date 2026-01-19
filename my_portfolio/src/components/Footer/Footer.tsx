import Image from "next/image";

export function Footer() {
    return (
        <footer className="relative w-full flex h-160 justify-center bg-slate-800 text-white">
            <div className="absolute flex flex-col justify-center space-y-1 top-10 text-center text-base md:text-xl mt-15">
                <h1 className="text-xl md:text-3xl mb-6 underline">Contract:</h1>
                <p>trakoolosot_k@silpakorn.edu</p>
                <p className="mt-2">+66 638691220</p>
            </div>
            <Image src="/background/footer-graphic-large.png" alt="footer" width={1980} height={150} className="w-full object-cover
            "/>
        </footer>
    );
}