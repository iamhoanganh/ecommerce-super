import React, { memo } from 'react'
import Image from "next/image";
import slider2 from "../../public/slider-2.jpg"

const Slider = () => {
    return (
        <div className='w-full'>
            <Image
                src={slider2}
                width={200}
                height={200}
                alt="banner"
                className='h-[400px] w-full object-cover'
            />
        </div>
    )
}

export default memo(Slider)