import React, {useCallback, useState} from 'react'
import {apiUploadImage} from "../../apis/slide";
import {toast} from "react-toastify";

const Dashboard = () => {
    const [update, setUpdate] = useState(false)
    const [imageLink, setImageLink] = useState("")
    const render = useCallback(() => {
        setUpdate(!update)
    }, [update])
    const handleGetLink = async (data) => {
        const response = await apiUploadImage(data)
        setImageLink(response.image.image)
        if (response.success) {
            render()
            toast.success(response.mes)
        } else toast.error(response.mes)
    }
    return (
        <div className='p-10'>
            <h2 className='font-bold text-xl'>Lay link hinh anh</h2>
            <div className='flex flex-col gap-2 mt-8'>
                <label className='font-semibold' htmlFor="thumb">Upload image</label>
                <input
                    type="file"
                    id="image"
                    onChange={(e) => {
                        const file = e.target.files[0]
                        if (!file.type.startsWith('image')) return
                        const formData = new FormData()
                        formData.append('image', file)
                        handleGetLink(formData)
                    }}
                />
            </div>
            {imageLink !== "" && <div className='mt-4'>
                <img src={process.env.REACT_APP_SERVER_URL + imageLink} alt="image" className='w-1/4 mb-3'/>
                <span>{process.env.REACT_APP_SERVER_URL + imageLink}</span>
            </div>
            }
        </div>
)
}

export default Dashboard