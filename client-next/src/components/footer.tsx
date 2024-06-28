import React, { memo } from 'react'


const Footer = () => {
    return (
        <div className='w-full '>
            <div className='h-[307px] w-full bg-gray-900 flex items-center justify-center text-white text-[13px]'>
                <div className='w-full flex gap-x-2 max-w-screen-lg'>
                    <div className='flex-2 flex flex-col gap-2'>
                        <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px]'>Liên hệ</h3>
                        <span>
                            <span>Địa chỉ: </span>
                            <span className='opacity-70'>Lô 10 Liền kề 21 Khu Đô thị Văn Khê - Hà Đông - Hà Nội</span>
                        </span>
                        <span>
                            <span>Số điện thoại: </span>
                            <span className='opacity-70'>0869246226 hoặc 0942002001</span>
                        </span>
                        <span>
                            <span>Email: </span>
                            <span className='opacity-70'>cualuoikimphong@gmail.com</span>
                        </span>

                    </div>
                    {/*<div className='flex-1 flex flex-col gap-2'>*/}
                    {/*    <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px]'>INFORMATION</h3>*/}
                    {/*    <span>Typography*/}
                    {/*    </span>*/}
                    {/*    <span>Gallery</span>*/}
                    {/*    <span>Store Location</span>*/}
                    {/*    <span>Today's Deals</span>*/}
                    {/*    <span>Contacts</span>*/}

                    {/*</div>*/}
                    {/*<div className='flex-1 flex flex-col gap-2'>*/}
                    {/*    <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px]'>WHO WE ARE</h3>*/}
                    {/*    <span>Help</span>*/}
                    {/*    <span>Free Shipping</span>*/}
                    {/*    <span>FAQs</span>*/}
                    {/*    <span>Return & Exchange</span>*/}
                    {/*    <span>Testimonials</span>*/}

                    {/*</div>*/}
                    <div className='flex-1 flex flex-col gap-2'>
                        <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px]'>#DIGITALWORLDSTORE</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Footer)