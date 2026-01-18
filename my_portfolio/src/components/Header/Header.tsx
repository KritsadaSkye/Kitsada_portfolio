import { Nav } from "./Nav/Nav";

export function Header() {
    return (
        <>
            <div className="w-full z-20 top-0 start-0 flex items-center justify-center pt-15 pb-15">
                <Nav />
                <div className="absolute end-20">
                    <div className="group flex items-end overflow-hidden z-10 w-fit cursor-pointer transition-all duration-300">
                        <div className="flex whitespace-nowrap text-xl font-medium">
                            Contact
                            <span className="flex max-w-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out opacity-0 group-hover:max-w-screen-sm group-hover:ml-1 group-hover:opacity-100 text-slate-50/80">
                                <span className="mx-2 text-white text-base font-semibold">|</span>
                                <div className="flex md:flex-row flex-col content-start">
                                    <span className="ml-3">trakoolosot_k@silpakorn.edu</span>
                                    <span className="md:inline hidden mx-2">|</span>
                                    <span>Tel: +66 638691220</span>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}