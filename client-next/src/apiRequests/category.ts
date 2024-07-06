import http from "@/lib/http";

export type CategoryType = {
    "_id": string,
    "title": string,
    "brand": string[],
    "image": string,
    "createdAt": string,
    "updatedAt": string,
}
export type CategoryListResType = {
    success: boolean,
    prodCategories: CategoryType[],
}
export type SlideType = {
    "_id": string,
    "image": string,
    "createdAt": string,
    "updatedAt": string,
    "__v": number,
}
export type SlidesListResType = {
    success: boolean,
    slides: SlideType[],
}
export type FooterType = {
    "_id": string,
    "address": string,
    "email": string,
    "phoneNumber": string,
    "createdAt": string,
    "updatedAt": string,
}
export type FooterInforType = {
    success: boolean,
    footer: [
        FooterType
    ]
}
export const categoryApiRequest = {
    getCategoriesList: () => http.get<CategoryListResType>('/prodcategory'),
    getSlidesList: () => http.get<SlidesListResType>('/slide'),
    getFooterInfo: () => http.get<FooterInforType>('/footer'),
}

export default categoryApiRequest