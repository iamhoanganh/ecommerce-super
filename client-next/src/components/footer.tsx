import React, { memo } from 'react'
import categoryApiRequest from "@/apiRequests/category";
import Link from "next/link";
import { FaYoutube, FaFacebook, FaTiktok } from "react-icons/fa6";
import chototLogo from '@/../public/chotot.png';
import Image from "next/image";



const Footer = async () => {
    const {payload: {footer}} = await categoryApiRequest.getFooterInfo()
    const {address, email, phoneNumber, facebookLink, youtubeLink,tiktokLink , latLong,chototLink } = footer[0]
    const [phone1, phone2] = phoneNumber.split(' hoặc ')
    return (
            <footer className=' min-h-[207px] w-full bg-gray-900 flex items-center justify-center text-white text-[13px] p-3 py-10'>
                <div className='w-full flex flex-col gap-x-2 max-w-screen-lg gap-y-4 md:flex-row'>
                    <div className='flex flex-col gap-2 mr-5'>
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
                        <div className="flex gap-x-3 pl-5 pt-3">
                            {facebookLink && <Link href={facebookLink} className="text-red-200 text-md">
                                <FaFacebook color="#0866FF" size={25}/>
                            </Link>}
                            {youtubeLink && <Link href={youtubeLink} className="text-red-200 text-md">
                                <FaYoutube color="#ff0000" size={25}/>
                            </Link>}
                            {tiktokLink && <Link href={tiktokLink} className="text-md">
                                <FaTiktok size={25}/>
                            </Link>}
                            {chototLink && <Link href={chototLink} className="text-md">
                                <Image src={chototLogo} alt={"logo-chotot"} width={25} height={25} />
                            </Link>}
                        </div>
                    </div>
                    {/*<div className='flex flex-col gap-2 min-w-[100px] pr-5'>*/}
                    {/*    <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px]'>#Chợ đồ cũ*/}
                    {/*        tốt</h3>*/}
                    {/*    <div className="flex gap-x-3 pl-5">*/}
                    {/*        {facebookLink && <Link href={facebookLink} className="text-red-200 text-md">*/}
                    {/*            <FaFacebook color="#0866FF" size={25}/>*/}
                    {/*        </Link>}*/}
                    {/*        {youtubeLink && <Link href={youtubeLink} className="text-red-200 text-md">*/}
                    {/*            <FaYoutube color="#ff0000" size={25}/>*/}
                    {/*        </Link>}*/}
                    {/*        { tiktokLink && <Link href={tiktokLink} className="text-md">*/}
                    {/*            <FaTiktok size={25}/>*/}
                    {/*        </Link>}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className='flex-1 flex flex-col gap-2 h-[230px] w-full'>
                        <iframe
                            className="w-full min-w-[300px] height-[230px]"
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3725.4041940270527!2d105.76088347525508!3d20.97642888065979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU4JzM1LjEiTiAxMDXCsDQ1JzQ4LjUiRQ!5e0!3m2!1svi!2s!4v1720271775244!5m2!1svi!2s"
                            width="600" height="350" style={{border:0}} allowFullScreen={false} loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </footer>
    )
}

export default memo(Footer)