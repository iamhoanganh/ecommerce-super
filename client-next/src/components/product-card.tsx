import React from 'react';
import Image from 'next/image';
type ProductType = {
    id: string;
    title: string;
    thumb: string;
    price: {
        min: number;
        max: number;
    };
}
const ProductCart = ({ product } : {product: ProductType}) => {
    return (
        <div className="product-card">
            <Image src={product.thumb} alt={product.title} width={100} height={100} className='w-32 h-32 object-cover'/>
            <h4>{product.title}</h4>
            <h4>{product.price.min}</h4>
        </div>
    );
};

export default ProductCart;