import productApiRequest from "@/apiRequests/product";
import Image from "next/image";
import React from "react";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const { payload } = await productApiRequest.getDetail(id);
  const { 
    productData, success
  } = payload;
  return (
    <div>
      <h3>detail page</h3>
      {success === false ? <h3>Khong tim thay san pham</h3>:  <>
        <h4>{productData.title}</h4>
        <h4>{productData.price.min}</h4>
        <Image
        src={productData.thumb}
        alt={productData.title}
        width={100}
        height={100}
        className="w-32 h-32 object-cover"
      />
      </>}
       
    </div>
  );
}
