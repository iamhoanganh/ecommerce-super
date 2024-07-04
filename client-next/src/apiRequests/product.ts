import http from "@/lib/http";
import { ProductListResType, ProductResType } from "@/schemaValidations/product.schema";

const productApiRequest = {
    getList: (queryString: string) => http.get<ProductListResType>('/product/' + queryString),
    getDetail: (id: string) => http.get<ProductResType>(`/product/${id}`),
}

export default productApiRequest