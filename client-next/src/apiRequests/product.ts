import http from "@/lib/http";
import { ProductListResType, ProductResType } from "@/schemaValidations/product.schema";

const productApiRequest = {
    getList: () => http.get<ProductListResType>('/product'),
    getDetail: (id: string) => http.get<ProductResType>(`/product/${id}`),
}

export default productApiRequest