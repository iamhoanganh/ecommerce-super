import React, { memo } from 'react'


const Footer = () => {
    return (
            <footer className='h-[270px] w-full bg-gray-900 flex items-center justify-center text-white text-[13px] p-3'>
                <div className='w-full flex flex-col gap-x-2 max-w-screen-lg gap-y-4 md:flex-row'>
                    <div className='flex-2 flex flex-col gap-2'>
                        <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px]'>Liên hệ</h3>
                        <span className="text-sm pl-5">
                            <b>Địa chỉ: </b>
                            <span className='opacity-70'>Lô 10 Liền kề 21 Khu Đô thị Văn Khê - Hà Đông - Hà Nội</span>
                        </span>
                        <span className="text-sm pl-5">
                            <b>Điện thoại: </b>
                            <a href="tel:0869246226" className='opacity-70'>0869246226</a>
                            <span className='opacity-70'> hoặc </span>
                            <a href="tel:0942002001" className='opacity-70'>0942002001</a>
                        </span>
                        <span className="text-sm pl-5">
                            <b>Email: </b>
                            <a href="mailto:cualuoikimphong@gmail.com" className='opacity-70'>cualuoikimphong@gmail.com</a>
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
                        <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px]'>#Chợ đồ cũ tốt</h3>
                    </div>
                </div>
            </footer>
    )
}

export default memo(Footer)