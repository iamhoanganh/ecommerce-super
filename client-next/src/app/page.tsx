import {Metadata} from "next";
import NavLink from "@/components/nav-link";
import Slideshow from "@/components/slideshow";
import {Separator} from "@/components/ui/separator"
import productApiRequest from "@/apiRequests/product";
import CarouselProducts from "@/components/CarouselProducts";
import categoryApiRequest from "@/apiRequests/category";
import React from "react";
import CommandSearch from "@/components/command-search";
import { baseOpenGraph } from "./shared-metadata";
import {cookies} from "next/headers";

export const metadata: Metadata = {
    title: 'Trang chủ | Chợ đồ cũ tốt',
    description: 'Chợ đồ cũ tốt - Mua bán đồ cũ, đồ secondhand, đồ đã qua sử dụng, đồ cũ giá rẻ, đồ cũ chất lượng tốt nhất tại Việt Nam.',
    openGraph: {
        ...baseOpenGraph,
        title: 'Trang chủ | Chợ đồ cũ tốt',
        description: 'Chợ đồ cũ tốt - Mua bán đồ cũ, đồ secondhand, đồ đã qua sử dụng, đồ cũ giá rẻ, đồ cũ chất lượng tốt nhất tại Việt Nam.',
        url: 'https://chodocutot.com',
      },
}

export default async function HomePage() {
    const {
        payload: { products: soldProducts },
    } = await productApiRequest.getList("hot");
    const {
        payload: { products: newProducts },
    } = await productApiRequest.getList("new");
    const {
        payload: { products: salesProducts },
    } = await productApiRequest.getList("sale");
    const {payload: {prodCategories}} = await categoryApiRequest.getCategoriesList()
    const {payload: {slides}} = await categoryApiRequest.getSlidesList()
    const cookie = cookies()

    return (
        <div className="w-main m-auto flex flex-col">
            <div className="relative w-full h-[40px] my-4 z-10 sm:hidden">
                <CommandSearch customWrapperClassname="absolute" />
            </div>
            <div className="flex gap-x-3">
                <nav className="basis-1/5 flex-col justify-between items-center hidden sm:flex border-r-2 border-amber-500">
                    <span className="px-2 py-3 bg-primary text-white w-full text-center font-semibold">DANH MỤC SẢN PHẨM</span>
                    {prodCategories.map((category) =>
                        <NavLink className="py-5 px-10" key={category._id} href={`/products/?category=${category.title}`} name={category.title}/>
                    )}
                </nav>
                <div className="flex flex-col gap-5 basis-3/4 flex-auto">
                    <Slideshow slides={slides}/>
                </div>
            </div>
            <Separator className="my-4 bg-amber-500 h-0.5"/>
            <CarouselProducts customWrapperClassname="bg-[#001824] py-5 rounded-sm px-2" customTitleClassname=" text-[#ffbc40]" products={newProducts} title="Sản phẩm mới" hrefButton={"products/?sort=-createdAt&limit=12"} />
            <Separator className="my-4 bg-amber-500 h-0.5"/>
            <CarouselProducts customWrapperClassname="bg-[#910101] py-5 rounded-sm px-2" customTitleClassname=" text-[#ffbc40]" products={salesProducts} title="Sản phẩm giảm giá" hrefButton={"products/?sort=-percentDiscount&limit=12"} />
            <Separator className="my-4 bg-amber-500 h-0.5"/>
            <CarouselProducts  customWrapperClassname="bg-[#006738] py-5 rounded-sm px-2" products={soldProducts} customTitleClassname=" text-white" title="Sản phẩm bán chạy, hot" hrefButton={"products/?sort=-sold&limit=12"} />
        </div>
    );
}
