import React from 'react';
import Image from 'next/image';
import { Card } from './ui/card';
import { ProductType } from '@/schemaValidations/product.schema';
import envConfig from "@/config";
import Link from "next/link";
import {formatPrice} from "@/lib/utils";

const ProductCart = ({ product } : {product: ProductType}) => {
    const apiString = envConfig.NEXT_PUBLIC_API_URL.slice(0, -4)
    // console.log("product", product)
    return (
        <Link href={"/products/" +product._id}>
            <Card className='flex flex-col items-center'>
                <Image src={apiString + product.thumb} alt={product.title} width={100} height={100} className='w-[150px] h-[150px] object-cover'/>
                <h4>{product.title}</h4>
                <h4>{formatPrice(product.price - product.discount)}</h4>
                <h5>{product.percentDiscount}</h5>
            </Card>
        </Link>
    );
};

export default ProductCart;