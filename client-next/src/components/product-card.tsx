import React from 'react';
import Image from 'next/image';
import { Card } from './ui/card';
import { ProductType } from '@/schemaValidations/product.schema';

const ProductCart = ({ product } : {product: ProductType}) => {
    return (
        <Card className='max-w-[100px]'>
            <Image src={product.thumb} alt={product.title} width={100} height={100} className='w-32 h-32 object-cover'/>
            <h4>{product.title}</h4>
            <h4>{product.price}</h4>
        </Card>
    );
};

export default ProductCart;