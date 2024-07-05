"use client"
import React from 'react';
import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
type ImageSelectionProps = {
    imageData: {
        thumb: string;
        images: string[];
        title: string;
    }
}
function ImageSelection({imageData}: ImageSelectionProps) {
    const [currentImage, setCurrentImage] = React.useState(imageData?.thumb || "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851")
    return (
        <>
            <figure className="border flex justify-center items-center overflow-hidden">
                {/*<ReactImageMagnify*/}
                {/*    {...{*/}
                {/*      smallImage: {*/}
                {/*        alt: "",*/}
                {/*        isFluidWidth: true,*/}
                {/*        src: currentProduct.thumb || currentImage,*/}
                {/*      },*/}
                {/*      largeImage: {*/}
                {/*        src: currentProduct.thumb || currentImage,*/}
                {/*        width: 1800,*/}
                {/*        height: 1500,*/}
                {/*      },*/}
                {/*    }}*/}
                {/*/>*/}
                <Image className="w-full max-h-[300px] object-cover sm:max-h-[450px]"
                       src={currentImage}
                       alt={imageData?.title || "alt image"} width={454} height={450}/>
            </figure>
            <Carousel opts={{align: "start"}} className="w-full">
                <CarouselContent>
                    {imageData?.images.map((_, index) => (
                        <CarouselItem key={index} className="pl-1 basis-1/4" onClick={() => {setCurrentImage(_)}}>
                            <Card className="rounded-none">
                                <CardContent className="flex aspect-square items-center justify-center p-0">
                                    <Image src={_} alt={imageData?.title} width={113} height={113}
                                           className="h-[95%] w-[95%] object-cover"/>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden"/>
                <CarouselNext className="hidden"/>
            </Carousel></>
    );
}

export default ImageSelection;