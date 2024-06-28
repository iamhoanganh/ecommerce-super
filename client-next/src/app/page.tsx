import NavLink from "@/components/nav-link";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Slideshow from "@/components/slideshow";
import { Separator } from "@/components/ui/separator"


export default function HomePage() {
    return (
        <div className="w-full flex ">
            <div className="max-w-screen-lg m-auto mt-6 w-full">
                <div className="w-main m-auto flex flex-col">
                    <div className="flex">
                        <div className="w-[20%] bg-red-100 flex flex-col justify-around items-center">
                            <NavLink href="/products" name="San pham"/>
                            <NavLink href="/products" name="San pham"/>
                            <NavLink href="/products" name="San pham"/>
                            <NavLink href="/products" name="San pham"/>
                            <NavLink href="/products" name="San pham"/>
                            <NavLink href="/products" name="San pham"/>
                        </div>
                        <div className="flex flex-col gap-5 pl-5 w-[75%] flex-auto">
                            <Slideshow/>
                        </div>
                    </div>
                    <Separator className="my-4 bg-amber-500" />
                    <div>
                        <h2>Sản phẩm mới</h2>
                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            className="w-full"
                        >
                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                                        <div className="p-1">
                                            <Card>
                                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                                    <span className="text-3xl font-semibold">{index + 1}</span>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext className="sm:hidden lg:flex" />
                        </Carousel>
                    </div>
                    <Separator className="my-4 bg-amber-500" />
                    <div>
                        <h2>Sản phẩm giảm giá</h2>
                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            className="w-full"
                        >
                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                                        <div className="p-1">
                                            <Card>
                                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                                    <span className="text-3xl font-semibold">{index + 1}</span>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext className="sm:hidden lg:flex" />
                        </Carousel>
                    </div>
                    <Separator className="my-4 bg-amber-500" />
                    <div>
                        <h2>Sản phẩm ban chay, hot</h2>
                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            className="w-full"
                        >
                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                                        <div className="p-1">
                                            <Card>
                                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                                    <span className="text-3xl font-semibold">{index + 1}</span>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext className="sm:hidden lg:flex" />
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}
