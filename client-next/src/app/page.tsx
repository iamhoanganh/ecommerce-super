import NavLink from "@/components/nav-link";
import Slideshow from "@/components/slideshow";
import {Separator} from "@/components/ui/separator"
import productApiRequest from "@/apiRequests/product";
import CarouselProducts from "@/components/CarouselProducts";
import categoryApiRequest from "@/apiRequests/category";
import React from "react";


export default async function HomePage() {
    const {
        payload: { products: soldProducts },
    } = await productApiRequest.getList("?sort=-sold&limit=6");
    const {
        payload: { products: newProducts },
    } = await productApiRequest.getList("?sort=-createdAt&limit=6");
    const {
        payload: { products: salesProducts },
    } = await productApiRequest.getList("?sort=-percentDiscount&limit=6");
    const {payload: {prodCategories}} = await categoryApiRequest.getCategoriesList()
    const {payload: {slides}} = await categoryApiRequest.getSlidesList()
    return (
        <div className="w-main m-auto flex flex-col">
            <div className="flex gap-x-3">
                <nav className="basis-1/5 flex-col justify-between items-center hidden sm:flex border-r-2">
                    <span className="px-2 py-3 bg-primary text-white w-full text-center font-semibold">DANH MỤC SẢN PHẨM</span>
                    {prodCategories.map((category) =>
                        <NavLink className="py-5 px-10" key={category._id} href={`/products/?category=${category.title}`} name={category.title}/>
                    )}
                </nav>
                <div className="flex flex-col gap-5 basis-3/4 flex-auto">
                    <Slideshow slides={slides}/>
                </div>
            </div>
            <Separator className="my-4 bg-amber-500"/>
            <CarouselProducts products={newProducts} title="Sản phẩm mới" hrefButton={"products/?sort=-createdAt&limit=12"} />
            <Separator className="my-4 bg-amber-500"/>
            <CarouselProducts products={salesProducts} title="Sản phẩm giảm giá" hrefButton={"products/?sort=-percentDiscount&limit=12"} />
            <Separator className="my-4 bg-amber-500"/>
            <CarouselProducts products={soldProducts} title="Sản phẩm bán chạy, hot" hrefButton={"products/?sort=-sold&limit=12"} />
        </div>
    );
}
