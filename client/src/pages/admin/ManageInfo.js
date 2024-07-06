import React, { useCallback, useEffect, useState } from 'react'
import moment from 'moment'
import { InputField, Pagination, InputForm, Select, Button } from 'components'
import useDebounce from 'hooks/useDebounce'
import { useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import clsx from 'clsx'
import {apiGetFooter, apiUpdateFooter} from "../../apis/slide";

const ManageInfo = () => {
    const [footerInfo, setFooterInfo] = useState(null)
    const [queries, setQueries] = useState({
        q: ""
    })
    const [update, setUpdate] = useState(false)
    const [params] = useSearchParams()
    const fetchCategories = async (params) => {
        const response = await apiGetFooter({ ...params, limit: process.env.REACT_APP_LIMIT })
        if (response.success) setFooterInfo(response.footer[0])
    }
    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        email: footerInfo?.email,
        address: footerInfo?.address,
        phoneNumber: footerInfo?.phoneNumber,
    })
    const render = useCallback(() => {
        setUpdate(!update)
    }, [update])
    const queriesDebounce = useDebounce(queries.q, 800)

    useEffect(() => {
        const queries = Object.fromEntries([...params])
        if (queriesDebounce) queries.q = queriesDebounce
        fetchCategories(queries)
    }, [queriesDebounce, params, update])
    const handleUpdateFooter = (data) => {
        Swal.fire({
            title: 'Cập nhật thông tin cửa hàng',
            text: 'Bạn có chắc cập nhật không?',
            showCancelButton: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await apiUpdateFooter(data, footerInfo?._id)
                if (response.success) {
                    render()
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
                        defaultValue={footerInfo?.email}
                        id={'email'}
                        validate={{required: 'Require fill.'}}
                    />
                    <InputForm
                        label="Số điện thoại"
                        register={register}
                        fullWidth
                        errors={errors}
                        defaultValue={footerInfo?.phoneNumber}
                        id={'phoneNumber'}
                        validate={{required: 'Require fill.'}}
                    />
                    <InputForm
                        label="Địa chỉ"
                        register={register}
                        fullWidth
                        errors={errors}
                        defaultValue={footerInfo?.address}
                        id={'address'}
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