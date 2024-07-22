import productApiRequest from "@/apiRequests/product";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProductCard from "@/components/product-card";
import Paginate from "@/components/paginate";
import SortOption from "@/components/sort-option";
import {PAGE_SIZE} from "@/lib/constant";
import type {Metadata} from "next";
import { baseOpenGraph } from "../shared-metadata";
type ProductListPageProps = {
    searchParams: { [key: string]: string | string[] | undefined }
}
export const metadata: Metadata = {
    title: 'Danh sách sản phẩm',
    description: 'Chợ đồ cũ tốt - Mua bán đồ cũ, đồ secondhand, đồ đã qua sử dụng, đồ cũ giá rẻ, đồ cũ chất lượng tốt nhất tại Việt Nam.',
    openGraph: baseOpenGraph
}
export default async function ProductListPage({searchParams,}: ProductListPageProps) {
    const currentSort = searchParams.sort || "-createdAt";
    const currentLimit = searchParams.limit || String(PAGE_SIZE);
    const currentCategory = searchParams.category;
    const currentPage = searchParams.page || "1";
    const queryString = `?sort=${currentSort}&limit=${currentLimit}&page=${currentPage}` + (currentCategory && `&category=${currentCategory}`);
    const dataResponse = await productApiRequest.getList(queryString);
    const {
      payload: { products, counts },
    } = dataResponse;
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{currentCategory || 'Danh sách sản phẩm'}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <SortOption />
        <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
                <ProductCard key={product._id} product={product}/>
            ))}
        </section>


      <Paginate productLength={counts} />
    </>
  );
}
