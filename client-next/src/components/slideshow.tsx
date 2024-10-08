"use client"
import React, { memo } from 'react'
import Image from "next/image";
import {
    Carousel, CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import slider2 from "../../public/slider-2.jpg"
import Autoplay from "embla-carousel-autoplay";
import {SlideType} from "@/apiRequests/category";
import envConfig from "@/config";

const Slideshow = ({slides}: {slides: SlideType[]}) => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
    return (
    <Carousel plugins={[
        Autoplay({
            delay: 2000,
        }),
    ]} className="w-full" setApi={setApi}>
        <CarouselContent>
            {slides.map((_, index) => (
                <CarouselItem key={_._id}>
                    <Image
                        src={_.image.startsWith('http')? _.image : envConfig.NEXT_PUBLIC_API_URL + _.image}
                        width={800}
                        height={400}
                        alt="banner"
                        className='w-full object-cover'
                    />
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="left-[10px] lg:left-[15px]" />
        <CarouselNext className="left-[92%] lg:left-[94%]"/>
    </Carousel>
    )
}

export default Slideshow