import productApiRequest from "@/apiRequests/product";
import React from "react";
import parse from "html-react-parser";
import ImageSelection from "@/components/image-selection";
import { Separator } from "@/components/ui/separator";
import CarouselProducts from "@/components/CarouselProducts";
import { formatPrice } from "@/lib/utils";
import VariantSelect from "@/components/variant-select";
import { cache } from "react";
import { Metadata, ResolvingMetadata } from "next";

const getDetail = cache(productApiRequest.getDetail);
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const {
    payload: { productData },
  } = await getDetail(id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: productData.title,
    description: productData.description,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

export default async function ProductPage({ params, searchParams }: Props) {
  const { id } = params;
  const {
    payload: { productData },
  } = await getDetail(id);
  const { thumb, images, title, category, brand, varriants } = productData;
  const imageData = {
    thumb,
    images,
    title,
  };
  const {
    payload: { products: relativeProducts },
  } = await productApiRequest.getList(`?category=${category}&limit=6`);
  return (
    <>
      <section className="flex flex-col gap-5 md:flex-row">
        <div className="basis-full">
          <ImageSelection imageData={imageData} />
        </div>
        <div className="basis-10/12">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <span className="text-sm">Còn: {productData.quantity}</span>
          </div>
          <div className="flex items-center mb-3">
            <h2 className="text-2xl font-semibold text-red-500">
              {formatPrice(productData.price - productData.discount)}
            </h2>
            <del className="text-x ml-3 text-stone-500">
              {formatPrice(productData.price)}
            </del>
            <span className="inline-block px-2 py-1 ml-3 rounded text-red-500 border-2 border-red-500 bg-red-100 text-xs">
              -{productData.percentDiscount}%
            </span>
          </div>
          {brand && <span>- Thương hiệu: {brand}</span>}
          {varriants.color.length !== 0 && (
            <VariantSelect title="Màu sắc" options={varriants.color} />
          )}
          {varriants.sexual.length !== 0 && (
            <VariantSelect title="Giới tính" options={varriants.sexual} />
          )}
          {varriants.size.length !== 0 && (
            <VariantSelect title="Kích cỡ" options={varriants.size} />
          )}
          {varriants.material.length !== 0 && (
            <VariantSelect title="Chất liệu" options={varriants.material} />
          )}
          {varriants.origin.length !== 0 && (
            <VariantSelect title="Nguồn gốc" options={varriants.origin} />
          )}
        </div>
      </section>
      <Separator className="my-4 bg-amber-500 h-0.5" />
      <article className="px-2 md:px-4">
        <h2 className="text-xl font-semibold">Thông tin sản phẩm</h2>
        <div className="">{parse(productData.description)}</div>
      </article>
      <Separator className="my-4 bg-amber-500 h-0.5" />
      <aside>
        <CarouselProducts
          products={relativeProducts}
          title="Sản phẩm bán tương tự"
          hrefButton={"products/?sort=-sold&limit=12"}
          showAllButton={false}
        />
      </aside>
    </>
  );
}
