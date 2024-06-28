import productApiRequest from "@/apiRequests/product";
import Image from "next/image";
import React from "react";
import {clsx} from "clsx";
import {Button} from "@/components/ui/button";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const { payload: {productData} } = await productApiRequest.getDetail(id);
  console.log("payload", productData);
  // const {
  //   productData, success
  // } = payload;
  return (
      <div>
        <h3>detail page</h3>
        {/*{success === false ? <h3>Khong tim thay san pham</h3>:  <>*/}
        {/*  <h4>{productData.title}</h4>*/}
        {/*  <h4>{productData.price.min}</h4>*/}
        {/*  <Image*/}
        {/*  src={productData.thumb}*/}
        {/*  alt={productData.title}*/}
        {/*  width={100}*/}
        {/*  height={100}*/}
        {/*  className="w-32 h-32 object-cover"*/}
        {/*/>*/}
        {/*</>}*/}
        <div
            // onClick={(e) => e.stopPropagation()}
            className={clsx(
                "bg-white m-auto mt-4 flex",
            )}
        >
          <div
              className={clsx("flex flex-col gap-4 w-2/5")}
          >
            <div className="w-[458px] h-[458px] border flex items-center overflow-hidden">
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
            </div>
            <div className="w-[458px]">
              {/*<Slider*/}
              {/*    className="image-slider flex gap-2 justify-between"*/}
              {/*    {...settings}*/}
              {/*>*/}
              {/*  {currentProduct.images?.length === 0 &&*/}
              {/*      product?.images?.map((el) => (*/}
              {/*          <div className="flex-1" key={el}>*/}
              {/*            <img*/}
              {/*                onClick={(e) => handleClickImage(e, el)}*/}
              {/*                src={el}*/}
              {/*                alt="sub-product"*/}
              {/*                className="w-[143px] cursor-pointer h-[143px] border object-cover"*/}
              {/*            />*/}
              {/*          </div>*/}
              {/*      ))}*/}
              {/*  {currentProduct.images?.length > 0 &&*/}
              {/*      currentProduct.images?.map((el) => (*/}
              {/*          <div className="flex-1" key={el}>*/}
              {/*            <img*/}
              {/*                onClick={(e) => handleClickImage(e, el)}*/}
              {/*                src={el}*/}
              {/*                alt="sub-product"*/}
              {/*                className="w-[143px] cursor-pointer h-[143px] border object-cover"*/}
              {/*            />*/}
              {/*          </div>*/}
              {/*      ))}*/}
              {/*</Slider>*/}
            </div>
          </div>
          <div
              className={clsx("w-2/5 pr-[24px] flex flex-col gap-4")}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-[30px] font-semibold">{`${(productData?.price)}VNĐ`}</h2>
              <span className="text-sm text-main">{`In stock: ${productData?.quantity}`}</span>
            </div>
            {/*<ul className="list-square text-sm text-gray-500 pl-4">*/}
            {/*  {productData?.description?.length > 1 &&*/}
            {/*      productData?.description?.map((el) => (*/}
            {/*          <li className="leading-6" key={el}>*/}
            {/*            {el}*/}
            {/*          </li>*/}
            {/*      ))}*/}
            {/*  {product?.description?.length === 1 && (*/}
            {/*      <div*/}
            {/*          className="text-sm line-clamp-[10] mb-8"*/}
            {/*          dangerouslySetInnerHTML={{*/}
            {/*            __html: DOMPurify.sanitize(product?.description[0]),*/}
            {/*          }}*/}
            {/*      ></div>*/}
            {/*  )}*/}
            {/*</ul>*/}
            <div className="my-4 flex gap-4">
              <span className="font-bold">Color:</span>
              <div className="flex flex-wrap gap-4 items-center w-full">
                <div
                    // onClick={() => setVarriant(null)}
                    className={clsx(
                        "flex items-center gap-2 p-2 border cursor-pointer",
                        // !varriant && "border-red-500"
                    )}
                >
                  <img
                      src={productData?.thumb}
                      alt="thumb"
                      className="w-8 h-8 rounded-md object-cover"
                  />
                  <span className="flex flex-col">
                  {/*<span>{productData?.color}</span>*/}
                  <span className="text-sm">{productData?.price}</span>
                </span>
                </div>
                {/*{productData?.varriants?.map((el) => (*/}
                {/*    <div*/}
                {/*        key={el.sku}*/}
                {/*        onClick={() => setVarriant(el.sku)}*/}
                {/*        className={clsx(*/}
                {/*            "flex items-center gap-2 p-2 border cursor-pointer",*/}
                {/*            varriant === el.sku && "border-red-500"*/}
                {/*        )}*/}
                {/*    >*/}
                {/*      <img*/}
                {/*          src={el.thumb}*/}
                {/*          alt="thumb"*/}
                {/*          className="w-8 h-8 rounded-md object-cover"*/}
                {/*      />*/}
                {/*      <span className="flex flex-col">*/}
                {/*    <span>{el.color}</span>*/}
                {/*    <span className="text-sm">{el.price}</span>*/}
                {/*  </span>*/}
                {/*    </div>*/}
                {/*))}*/}
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <span className="font-semibold">Quantity</span>
                {/*<SelectQuantity*/}
                {/*    quantity={quantity}*/}
                {/*    handleQuantity={handleQuantity}*/}
                {/*    handleChangeQuantity={handleChangeQuantity}*/}
                {/*/>*/}
              </div>
              <Button>
                Add to Cart
              </Button>
            </div>
          </div>

        </div>
      </div>
  );
}
