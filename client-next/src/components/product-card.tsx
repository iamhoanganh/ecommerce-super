import React from 'react';
import Image from 'next/image';
import { Card } from './ui/card';
import { ProductType } from '@/schemaValidations/product.schema';
import envConfig from "@/config";
import Link from "next/link";
import {formatPrice} from "@/lib/utils";

const ProductCart = ({ product } : {product: ProductType}) => {
    const apiString = envConfig.NEXT_PUBLIC_API_URL
    return (
        <Link href={"/products/" + product._id}>
            <Card className='flex flex-col items-center border-primary border-2'>
                <Image src={apiString + product.thumb} alt={product.title} width={100} height={100}
                       className='h-[200px] w-full p-1  object-cover'/>
                <h2 className="font-semibold px-2 ellipsis-second-line">{product.title}</h2>
                <del className="text-sm ml-3 text-stone-500">{formatPrice(product.price)}</del>
                <div className="flex items-center mb-3">
                    <h2 className="text-md font-semibold text-red-500">{formatPrice(product.price - product.discount)}</h2>
                    <span
                        className="inline-block px-[2px] ml-3 rounded text-red-500 border-2 border-red-500 bg-red-100 text-xxs">-{product.percentDiscount}%</span>
                </div>
            </Card>
        </Link>
    );
};

export default ProductCart;