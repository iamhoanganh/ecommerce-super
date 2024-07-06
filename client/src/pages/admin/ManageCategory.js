import React, { useCallback, useEffect, useState } from 'react'
import moment from 'moment'
import { InputField, Pagination, InputForm, Select, Button } from 'components'
import useDebounce from 'hooks/useDebounce'
import { useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import clsx from 'clsx'
import {apiCreateCategory, apiDeleteCategory, apiGetCategories, apiUpdateCategory} from "../../apis/category";

const ManageCategory = () => {
    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        emai: '',
        firstname: '',
        lastname: '',
        role: '',
        phone: '',
        isBlocked: ''
    })
    const [categories, setCategories] = useState(null)
    const [queries, setQueries] = useState({
        q: ""
    })
    const [update, setUpdate] = useState(false)
    const [editElm, setEditElm] = useState(null)
    const [isOpenAddModal, setIsOpenAddModal] = useState(false)
    const [newCategory, setNewCategory] = useState("")
    const [params] = useSearchParams()
    const fetchCategories = async (params) => {
        const response = await apiGetCategories({ ...params, limit: process.env.REACT_APP_LIMIT })
        if (response.success) setCategories(response)
    }

    const render = useCallback(() => {
        setUpdate(!update)
    }, [update])
    const queriesDebounce = useDebounce(queries.q, 800)

    useEffect(() => {
        const queries = Object.fromEntries([...params])
        if (queriesDebounce) queries.q = queriesDebounce
        fetchCategories(queries)
    }, [queriesDebounce, params, update])
    const handleUpdate = async (data) => {
        const payload = {
            ...data,
            brand: data.brand.split(','),
        }
        console.log("payload", payload)
        const response = await apiUpdateCategory(payload, editElm._id)
        if (response.success) {
            setEditElm(null)
            render()
            toast.success(response.mes)
        } else toast.error(response.mes)
    }
    const handleDeleteCategory = (uid) => {
        Swal.fire({
            title: 'Are you sure...',
            text: 'Are you ready remove this user?',
            showCancelButton: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await apiDeleteCategory(uid)
                if (response.success) {
                    render()
                    toast.success(response.mes)
                } else toast.error(response.mes)
            }
        })
    }
    return (
        <div className={clsx('w-full', editElm && 'pl-16')}>
            <h1 className='h-[75px] flex justify-between items-center text-3xl font-bold px-4 border-b'>
                <span>Quản lý danh mục sản phẩm</span>
            </h1>
            <div className='w-full p-4'>
                <div className='flex justify-end py-4'>
                    <InputField
                        nameKey={'q'}
                        value={queries.q}
                        setValue={setQueries}
                        style={'w500'}
                        placeholder='Search name or mail user...'
                        isHideLabel
                    />
                </div>
                <form onSubmit={handleSubmit(handleUpdate)}>
                    {editElm && <Button type='submit'>Update</Button>}
                    <table className='table-auto mb-6 text-left w-full'>
                        <thead className='font-bold bg-gray-700 text-[13px] text-white'>
                        <tr className='border border-gray-500'>
                            <th className='px-4 py-2'>#</th>
                            <th className='px-4 py-2'>Tên danh mục</th>
                            <th className='px-4 py-2'>Thời gian tạo</th>
                            <th className='px-4 py-2'>Hành động</th>
                        </tr>
                        </thead>
                        <tbody>
                        {categories?.prodCategories?.map((el, idx) => (
                            <tr key={el._id} className='border border-gray-500'>
                                <td className='py-2 px-4'>{idx + 1}</td>
                                <td className='py-2 px-4'>
                                    {editElm?._id === el._id
                                        ? <InputForm
                                            register={register}
                                            fullWidth
                                            errors={errors}
                                            defaultValue={editElm?.title}
                                            id={'title'}
                                            validate={{required: 'Require fill.'}}
                                        />
                                        : <span>{el.title}</span>}
                                </td>
                                <td className='hidden'>
                                    {editElm?._id === el._id
                                        ? <InputForm
                                            register={register}
                                            fullWidth
                                            errors={errors}
                                            defaultValue={editElm?.brand}
                                            id={'brand'}
                                            validate={{required: 'Require fill.'}}
                                        />
                                        : <span>{el.brand}</span>}
                                </td>
                                <td className='hidden'>
                                    {editElm?._id === el._id
                                        ? <InputForm
                                            register={register}
                                            fullWidth
                                            errors={errors}
                                            defaultValue={editElm?.image}
                                            id={'image'}
                                            validate={{required: 'Require fill.'}}
                                        />
                                        : <span>{el.image}</span>}
                                </td>
                                <td className='py-2 px-4'>{moment(el.createdAt).format('DD/MM/YYYY')}</td>
                                <td className='py-2 px-4'>
                                    {editElm?._id === el._id ? <span onClick={() => setEditElm(null)}
                                                                     className='px-2 text-orange-600 hover:underline cursor-pointer'>Back</span>
                                        : <span onClick={() => setEditElm(el)}
                                                className='px-2 text-orange-600 hover:underline cursor-pointer'>Edit</span>}
                                    <span onClick={() => handleDeleteCategory(el._id)}
                                          className='px-2 text-orange-600 hover:underline cursor-pointer'>Delete</span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </form>
                <div className='w-full flex justify-end'>
                    <Button handleOnClick={() => {setIsOpenAddModal(true)}}>Them danh muc</Button>
                </div>
                {
                    isOpenAddModal && (
                        <>
                            <input value={newCategory} onChange={(e) => setNewCategory(e.target.value)}
                                   placeholder="Nhap ten danh muc"
                                   className={clsx('px-4 py-2 rounded-sm border w-full mt-2 placeholder:text-sm placeholder:italic outline-none')}
                            />
                            <Button handleOnClick={async () => {
                                const response = await apiCreateCategory({title: newCategory, image: "image-link"})
                                if (response.success) {
                                    render()
                                    toast.success(response.mes)
                                } else toast.error(response.mes)
                            }}>Them</Button>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default ManageCategory