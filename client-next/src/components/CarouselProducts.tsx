import React from 'react';
import {Button} from "@/components/ui/button";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import ProductCard from "@/components/product-card";
import Link from "next/link";

function CarouselProducts({products, title, showAllButton=true, hrefButton="/products", customWrapperClassname, customTitleClassname}: {products: any, title: string, showAllButton?: boolean ,hrefButton?: string, customWrapperClassname?: string, customTitleClassname?: string}) {
    return (
        <section className={customWrapperClassname}>
            <div className="border-primary border-l-8 flex justify-between items-center">
                <h3 className={"pl-4 text-2xl font-medium py-2" + customTitleClassname}>{title}</h3>
                {showAllButton && <Link href={hrefButton}><Button className="">Xem thêm</Button></Link>}
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {products.map((_: any, index: number) => (
                        <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 lg:basis-1/4">
                            <div className="p-1">
                                <ProductCard product={_}/>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext className="hidden lg:flex"/>
            </Carousel>
        </section>
    );
}

export default CarouselProducts;