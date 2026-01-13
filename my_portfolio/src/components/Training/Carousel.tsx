import * as React from "react"

import { Card } from "@/components/Training/Card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSize() {
    return (
        <div className="flex justify-center pl-20">
            <Carousel className="w-375 max-w-full">
                <CarouselContent className="-ml-4">

                    {[1, 2, 3, 4, 5].map((_, i) => (
                        <CarouselItem key={i} className="flex justify-center md:basis-1/2 lg:basis-1/3">
                            <Card />
                        </CarouselItem>
                    ))}

                </CarouselContent>
                <CarouselPrevious className="bg-slate-600/25" />
                <CarouselNext className="bg-slate-600/25" />
            </Carousel>
        </div>
    )
}
