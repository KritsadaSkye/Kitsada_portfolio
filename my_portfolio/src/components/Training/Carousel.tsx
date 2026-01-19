import { Card } from "@/components/Training/Card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { certificates } from "@/data/certificate";


export function CarouselSize() {

    return (
        <div className="flex justify-center xl:pl-20">
            <Carousel className="blockquote flex items-center w-375 max-w-full h-130">
                <CarouselContent className="-ml-4">

                    {certificates.map((certificate) => (
                        <CarouselItem key={certificate.id} className="flex justify-center basis-1/1 md:basis-1/2 xl:basis-1/3 z-30">
                            <Card certificate={certificate} />
                        </CarouselItem>
                    ))}

                </CarouselContent>
                <CarouselPrevious className="bg-slate-600/25" />
                <CarouselNext className="bg-slate-600/25" />
            </Carousel>
        </div>
    )
}
