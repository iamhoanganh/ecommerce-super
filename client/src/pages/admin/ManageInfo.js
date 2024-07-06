import React from 'react'
import { InputForm, Button } from 'components'

import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import clsx from 'clsx'
import {apiGetFooter, apiUpdateFooter} from "../../apis/slide";

const ManageInfo = () => {
    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        defaultValues: async () => {
            const response = await apiGetFooter()
            const footerInfo = response.footer[0]
            if (response.success) {
                return {
                    email: footerInfo.email,
                    phoneNumber: footerInfo.phoneNumber,
                    address: footerInfo.address,
                    youtubeLink: footerInfo.youtubeLink,
                    facebookLink: footerInfo.facebookLink,
                    tiktokLink: footerInfo.tiktokLink,
                    latLong: footerInfo.latLong,
                    id: footerInfo._id
                }
            }
            else return {
                email: '',
                phoneNumber: '',
                address: '',
                youtubeLink: '',
                facebookLink: '',
                tiktokLink: '',
                id: "",
                latLong: ""
            }
        }
    })

    const handleUpdateFooter = (data) => {
        Swal.fire({
            title: 'Cập nhật thông tin cửa hàng',
            text: 'Bạn có chắc cập nhật không?',
            showCancelButton: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                const payload = {
                    email: data.email,
                    phoneNumber: data.phoneNumber,
                    address: data.address,
                    youtubeLink: data.youtubeLink,
                    facebookLink: data.facebookLink,
                    tiktokLink: data.tiktokLink,
                    latLong: data.latLong
                }
                const response = await apiUpdateFooter(payload, data.id)
                if (response.success) {
                    toast.success("Cập nhật thông tin cửa hàng thành công.")
                } else toast.error("Cập nhật thông tin cửa hàng thất bại.")
            }
        })
    }
    return (
        <div className={clsx('w-full')}>
            <h1 className='h-[75px] flex justify-between items-center text-3xl font-bold px-4 border-b'>
                <span>Quản lý thông tin cửa hàng</span>
            </h1>
            <div className='w-full p-4'>
                <form onSubmit={handleSubmit(handleUpdateFooter)}>
                    <InputForm
                        label="Email"
                        register={register}
                        fullWidth
                        errors={errors}
                        id={'email'}
                        validate={{required: 'Require fill.'}}
                    />
                    <InputForm
                        label="Số điện thoại"
                        register={register}
                        fullWidth
                        errors={errors}
                        id={'phoneNumber'}
                        validate={{required: 'Require fill.'}}
                    />
                    <InputForm
                        label="Địa chỉ"
                        register={register}
                        fullWidth
                        errors={errors}
                        id={'address'}
                        validate={{required: 'Require fill.'}}
                    />
                    <InputForm
                        label="Đường link Youtube"
                        register={register}
                        fullWidth
                        errors={errors}
                        id={'youtubeLink'}
                        validate={{required: 'Require fill.'}}
                    />
                    <InputForm
                        label="Đường link Facebook"
                        register={register}
                        fullWidth
                        errors={errors}
                        id={'facebookLink'}
                        validate={{required: 'Require fill.'}}
                    />
                    <InputForm
                        label="Đường link Tiktok"
                        register={register}
                        fullWidth
                        errors={errors}
                        id={'tiktokLink'}
                    />
                    <InputForm
                        label="Toạ độ cửa hàng"
                        register={register}
                        fullWidth
                        errors={errors}
                        id={'latLong'}
                        validate={{required: 'Require fill.'}}
                    />
                    <div className='w-full flex justify-end'>
                        <Button type="submit">Cập nhật</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ManageInfo