import { apiAddVarriant } from 'apis'
import Button from 'components/buttons/Button'
import Loading from 'components/common/Loading'
import InputForm from 'components/inputs/InputForm'
import React, { memo, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { showModal } from 'store/app/appSlice'
import Swal from 'sweetalert2'
import { getBase64 } from 'ultils/helpers'

const CustomizeVarriants = ({ customizeVarriant, setCustomizeVarriant, render }) => {
    // const [preview, setPreview] = useState({
    //     thumb: '', images: ''
    // })
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm()
    useEffect(() => {
        reset({
            title: customizeVarriant?.title,
            color: customizeVarriant?.color,
            origin: customizeVarriant?.origin,
            material: customizeVarriant?.material,
            sexual: customizeVarriant?.sexual,
            size: customizeVarriant?.size,
        })
    }, [customizeVarriant])
    // const handleAddVarriant = async (data) => {
    //     // convert data to form data
    //     const arrayData = Object.entries(data)
    //
    //     // if (data.color === customizeVarriant.color) Swal.fire('Oops!', 'Color not changed', 'info')
    //     // else {
    //         const formData = new FormData()
    //         for (let i of Object.entries(data)) formData.append(i[0], i[1])
    //         if (data.thumb) formData.append('thumb', data.thumb[0])
    //         // if (data.images) {
    //         //     for (let image of data.images) formData.append('images', image)
    //         // }
    //         dispatch(showModal({ isShowModal: true, modalChildren: <Loading /> }))
    //         const response = await apiAddVarriant(formData, customizeVarriant._id)
    //         dispatch(showModal({ isShowModal: false, modalChildren: null }))
    //         if (response.success) {
    //             toast.success(response.mes)
    //             reset()
    //         } else toast.error(response.mes)
    //     // }
    // }
    const handleAddVarriant = async (data) => {
        const objectData = { ...data}
        for (const property in data) {
            console.log(`${property}: ${data[property]}`);
            objectData[property] = data[property].split(';')
        }
        const formData = new FormData();
        Object.keys(objectData).forEach(key => {
            const values = objectData[key];
            if (Array.isArray(values)) {
                values.forEach(value => {
                    formData.append(key + '[]', value);
                });
            } else {
                formData.append(key, values);
            }
        });
        const response = await apiAddVarriant(formData, customizeVarriant._id)
        dispatch(showModal({ isShowModal: false, modalChildren: null }))
        if (response.success) {
            toast.success(response.mes)
            reset()
        } else toast.error(response.mes)
    }

    return (
        <div className='w-full flex flex-col gap-4 relative'>
            <div className='h-[69px] w-full'></div>
            <div className='p-4 border-b bg-gray-100 flex justify-between items-center right-0 left-[327px] fixed top-0'>
                <h1 className='text-3xl font-bold tracking-tight'>Tuỳ chỉnh lựa chọn sản phẩm</h1>
                <span
                    className='text-main hover:underline cursor-pointer'
                    onClick={() => setCustomizeVarriant(null)}
                >
                    Back
                </span>
            </div>
            <form onSubmit={handleSubmit(handleAddVarriant)} className='p-4 w-full flex flex-col gap-4'>
                <div className='flex gap-4 items-center w-full'>
                    <InputForm
                        label='Tên sản phẩm'
                        register={register}
                        errors={errors}
                        id='title'
                        fullWidth
                        style='flex-auto'
                        validate={{
                            required: 'Need fill this field'
                        }}
                        placeholder='Tiêu đề của sản phẩm'
                    />
                </div>
                <div className='flex gap-4 items-center w-full'>
                    <InputForm
                        label='Ngồn gốc'
                        register={register}
                        errors={errors}
                        id='origin'
                        validate={{
                            required: 'Need fill this field'
                        }}
                        fullWidth
                        placeholder='Ngồn gốc của sản phẩm'
                        type='string'
                        style='flex-auto'
                    />
                    <InputForm
                        label='Màu sắc'
                        register={register}
                        errors={errors}
                        id='color'
                        validate={{
                            required: 'Need fill this field'
                        }}
                        fullWidth
                        placeholder='Màu sắc của sản phẩm'
                        style='flex-auto'
                    />
                </div>
                <div className='flex gap-4 items-center w-full'>
                    <InputForm
                        label='Chất liệu'
                        register={register}
                        errors={errors}
                        id='material'
                        validate={{
                            required: 'Need fill this field'
                        }}
                        fullWidth
                        placeholder='Chất liệu của sản phẩm'
                        type='string'
                        style='flex-auto'
                    />
                    <InputForm
                        label='Giới tính'
                        register={register}
                        errors={errors}
                        id='sexual'
                        validate={{
                            required: 'Need fill this field'
                        }}
                        fullWidth
                        placeholder='Giới tính của sản phẩm'
                        style='flex-auto'
                    />
                    <InputForm
                        label='Kích thước'
                        register={register}
                        errors={errors}
                        id='size'
                        validate={{
                            required: 'Need fill this field'
                        }}
                        fullWidth
                        placeholder='Kích thước của sản phẩm'
                        style='flex-auto'
                    />
                </div>
                <div className='my-6'><Button type='submit'>Thêm lựa chọn</Button></div>
            </form>
        </div>
    )
}
// color, origin, material, sexual, size
export default memo(CustomizeVarriants)