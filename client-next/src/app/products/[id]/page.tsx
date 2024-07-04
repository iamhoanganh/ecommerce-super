import productApiRequest from "@/apiRequests/product";
import React from "react";
import parse from 'html-react-parser';
import ImageSelection from "@/components/image-selection";
import {Separator} from "@/components/ui/separator";
import CarouselProducts from "@/components/CarouselProducts";
import {formatPrice} from "@/lib/utils";

export default async function ProductPage({
                                              params,
                                          }: {
    params: { id: string };
}) {
    const {id} = params;
    const {payload: {productData}} = await productApiRequest.getDetail(id);
    const {
        thumb,
        images,
        title
    } = productData;
    const imageData = {
      thumb,
      images,
      title
    }
  const {
    payload: { products: soldProducts },
  } = await productApiRequest.getList("?sort=-sold&limit=6");
    console.log("payload", productData);
    return (
        <>
            <section className="flex flex-col gap-5 md:flex-row">
                <div className="basis-full">
                    <ImageSelection imageData={imageData}/>
                </div>
                <div className="basis-full">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                  <div className="flex items-center">
                    <h2 className="text-2xl font-semibold text-red-500">{formatPrice(productData.price - productData.discount)}</h2>
                    <del className="text-x ml-3 text-stone-500">{formatPrice(productData.price)}</del>
                    <span className="inline-block px-2 py-1 ml-3 rounded text-red-500 border-2 border-red-500 bg-red-100 text-xs">-{productData.percentDiscount}%</span>
                  </div>
                </div>
            </section>
          <Separator className="my-4 bg-amber-500"/>
          <article>
          <h2 className="text-xl font-semibold">Thông tin sản phẩm</h2>
              <div>{parse(productData.description)}</div>
            </article>
            <Separator className="my-4 bg-amber-500"/>
            <aside>
              <CarouselProducts products={soldProducts} title="Sản phẩm bán chạy, hot" hrefButton={"products/?sort=-sold&limit=12"} showAllButton={false}/>
            </aside>
        </>
    );
}
