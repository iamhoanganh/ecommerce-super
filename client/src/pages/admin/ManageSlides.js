import React, { useCallback, useEffect, useState } from 'react'
import { apiGetUsers, apiUpdateUser, apiDeleteUser } from 'apis/user'
import { roles, blockStatus } from 'ultils/contants'
import moment from 'moment'
import { InputField, Pagination, InputForm, Select, Button } from 'components'
import useDebounce from 'hooks/useDebounce'
import { useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import clsx from 'clsx'
import {apiCreateSlide, apiDeleteSlide, apiGetSlides} from "../../apis/slide";

const ManageSlides = () => {
    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        emai: '',
        firstname: '',
        lastname: '',
        role: '',
        phone: '',
        isBlocked: ''
    })
    const [slides, setSlides] = useState(null)
    const [queries, setQueries] = useState({
        q: ""
    })
    const [update, setUpdate] = useState(false)
    const [editElm, setEditElm] = useState(null)
    const [params] = useSearchParams()
    const fetchUsers = async (params) => {
        const response = await apiGetSlides({ ...params, limit: process.env.REACT_APP_LIMIT })
        if (response.success) setSlides(response)
    }

    const render = useCallback(() => {
        setUpdate(!update)
    }, [update])
    const queriesDebounce = useDebounce(queries.q, 800)

    useEffect(() => {
        const queries = Object.fromEntries([...params])
        if (queriesDebounce) queries.q = queriesDebounce
        fetchUsers(queries)
    }, [queriesDebounce, params, update])
    const handleUpdate = async (data) => {
        const response = await apiUpdateUser(data, editElm._id)
        if (response.success) {
            setEditElm(null)
            render()
            toast.success(response.mes)
        } else toast.error(response.mes)
    }
    const handleDeleteSlide = (uid) => {
        Swal.fire({
            title: 'Are you sure...',
            text: 'Are you ready remove this user?',
            showCancelButton: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await apiDeleteSlide(uid)
                if (response.success) {
                    render()
                    toast.success(response.mes)
                } else toast.error(response.mes)
            }
        })
    }
    const handleCreateSlide = async (data) => {
        const response = await apiCreateSlide(data)
        if (response.success) {
            render()
            toast.success(response.mes)
        } else toast.error(response.mes)
    }
    console.log("slides", slides)
    return (
        <div className={clsx('w-full', editElm && 'pl-16')}>
            <h1 className='h-[75px] flex justify-between items-center text-3xl font-bold px-4 border-b'>
                <span>Quan ly slides</span>
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
                            <th className='px-8 py-2'>Hinh anh</th>
                            <th className='px-4 py-2'>Link ảnh</th>
                            <th className='px-4 py-2'>Created At</th>
                            <th className='px-4 py-2'>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {slides?.slides?.map((el, idx) => (
                            <tr key={el._id} className='border border-gray-500'>
                                <td className='py-2 px-4'>{idx + 1}</td>
                                <td className='py-2 px-8'>
                                    <img
                                        src={el.image}
                                        alt="thumb"
                                        className="w-15 h-12 object-cover"
                                    />
                                </td>
                                <td className='py-2 px-4'>
                                    <span>{el.image}</span>
                                </td>

                                <td className='py-2 px-4'>{moment(el.createdAt).format('DD/MM/YYYY')}</td>
                                <td className='py-2 px-4'>
                                    <span onClick={() => handleDeleteSlide(el._id)} className='px-2 text-orange-600 hover:underline cursor-pointer'>Delete</span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </form>
                <div className='flex flex-col gap-2 mt-8'>
                    <label className='font-semibold' htmlFor="thumb">Upload slide</label>
                    <input
                        type="file"
                        id="image"
                        onChange={(e) => {
                            const file = e.target.files[0]
                            if (!file.type.startsWith('image')) return
                            const formData = new FormData()
                            formData.append('image', file)
                            handleCreateSlide(formData)
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default ManageSlides