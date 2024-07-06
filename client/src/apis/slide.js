import axios from "../axios";

export const apiGetSlides = (params) =>
    axios({
        url: "/slide/",
        method: "get",
        params,
    })
export const apiDeleteSlide = (uid) =>
    axios({
        url: "/slide/" + uid,
        method: "delete",
    })
export const apiCreateSlide = (data) =>
    axios({
        url: "/slide/",
        method: "post",
        data,
    })
export const apiUploadImage = (data) =>
    axios({
        url: "/uploadImage/",
        method: "post",
        data,
    })
export const apiGetFooter = () =>
    axios({
        url: "/footer/",
        method: "get",
    })
export const apiUpdateFooter = (data, uid) =>
    axios({
        url: "/footer/" + uid,
        method: "put",
        data,
    })