import axios from "../axios";

export const apiGetCategories = (params) =>
    axios({
        url: "/prodcategory/",
        method: "get",
        params,
    })
export const apiUpdateCategory = (data, uid) =>
    axios({
        url: "/prodcategory/" + uid,
        method: "put",
        data,
    })
export const apiDeleteCategory = (uid) =>
    axios({
        url: "/prodcategory/" + uid,
        method: "delete",
    })
export const apiCreateCategory = (data) =>
    axios({
        url: "/prodcategory/",
        method: "post",
        data,
    })