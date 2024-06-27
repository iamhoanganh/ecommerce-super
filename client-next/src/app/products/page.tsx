import productApiRequest from '@/apiRequests/product'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Label } from "@/components/ui/label"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import ProductCard from "@/components/product-card";
import Image from "next/image";
import Link from "next/link";
export default async function ProductListPage() {
  const dataResponse = await productApiRequest.getList()
    const { payload: {products} } = dataResponse;
  console.log("dataResponse", products);
  
  return (
    <div>
        <h3>Product List</h3>
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

        <div>
            <div className="flex justify-center items-center">
                <Label htmlFor="email">Sort by</Label>
                <Select>
                    <SelectTrigger className="w-[180px] outline-0">
                        <SelectValue placeholder="Theme"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Random</SelectItem>
                        <SelectItem value="dark">Best selling</SelectItem>
                        <SelectItem value="system">Alphabetically, A-Z</SelectItem>
                        <SelectItem value="system">Alphabetically, Z-A</SelectItem>
                        <SelectItem value="system">Price, high to low</SelectItem>
                        <SelectItem value="system">Price, low to high</SelectItem>
                        <SelectItem value="system">Date, new to old</SelectItem>
                        <SelectItem value="system">Date, old to new</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
        {
            products.map((product) => (
                <Link href={`/products/${product._id}`} key={product.slug}>
                    <Image src={product.thumb} alt={product.title} width={100} height={100} className="w-32 h-32 object-cover"/>

                </Link>
            ))
        }
    </div>
  )
}
