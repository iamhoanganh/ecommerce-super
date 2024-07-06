import React, { memo } from 'react'
import categoryApiRequest from "@/apiRequests/category";


const Footer = async () => {
    const {payload: {footer}} = await categoryApiRequest.getFooterInfo()
    const {address, email, phoneNumber} = footer[0]
    const [phone1, phone2] = phoneNumber.split(' hoặc ')
    return (
            <footer className='h-[270px] w-full bg-gray-900 flex items-center justify-center text-white text-[13px] p-3'>
                <div className='w-full flex flex-col gap-x-2 max-w-screen-lg gap-y-4 md:flex-row'>
                    <div className='flex-2 flex flex-col gap-2'>
                        <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px]'>Liên hệ</h3>
                        <span className="text-sm pl-5">
                            <b>Địa chỉ: </b>
                            <span className='opacity-70'>{address}</span>
                        </span>
                        <span className="text-sm pl-5">
                            <b>Điện thoại: </b>
                            <a href="tel:0869246226" className='opacity-70'>{phone1}</a>
                            {phone2 && (
                                <>
                                    <span className='opacity-70'> hoặc </span>
                                    <a href="tel:0942002001" className='opacity-70'>{phone2}</a>
                                </>
                            )}
                        </span>
                        <span className="text-sm pl-5">
                            <b>Email: </b>
                            <a href="mailto:cualuoikimphong@gmail.com" className='opacity-70'>{email}</a>
                        </span>

                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                        <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px]'>#Chợ đồ cũ tốt</h3>
                    </div>
                </div>
            </footer>
    )
}

export default memo(Footer)