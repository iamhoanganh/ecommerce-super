import productApiRequest from "@/apiRequests/product";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "@/components/product-card";
import Image from "next/image";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const products = [
    {
        _id: "667958f41e22009b844fc75d",
        title: "xiaomi redmi note 10",
        slug: "xiaomi-redmi-note-10",
        description: "<p>mo ta san pham</p>",
        brand: "Xiaomi",
        thumb: "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
        price: 2243223,
        category: "Smartphone",
        quantity: 123,
        sold: 0,
        images: [
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851"
        ],
        totalRatings: 0,
        varriants: [
            {
                "color": "red",
                "size": "42mm",
                "price": 2243223,
                "_id": "667958f41e22009b844fc75e"
            },
            {
                "color": "Blue",
                "size": "44mm",
                "price": 12341234,
                "_id": "667958f41e22009b844fc75f"
            }
        ],
        ratings: [],
        createdAt: "2024-06-24T11:31:00.800Z",
        updatedAt: "2024-06-24T11:31:00.800Z",
        __v: 0,
        varriantsByColor: {
                "red": [
                    {
                        "color": "red",
                        "size": "42mm",
                        "price": 2243223,
                        "_id": "667958f41e22009b844fc75e"
                    }
                ],
                "Blue": [
                    {
                        "color": "Blue",
                        "size": "44mm",
                        "price": 12341234,
                        "_id": "667958f41e22009b844fc75f"
                    }
                ]
            },
            varriantsBySize: {
                "42mm": [
                    {
                        "color": "red",
                        "size": "42mm",
                        "price": 2243223,
                        "_id": "667958f41e22009b844fc75e"
                    }
                ],
                "44mm": [
                    {
                        "color": "Blue",
                        "size": "44mm",
                        "price": 12341234,
                        "_id": "667958f41e22009b844fc75f"
                    }
                ]
            }
    },
    {
        _id: "667958f41e22009b844fc75d",
        title: "xiaomi redmi note 10",
        slug: "xiaomi-redmi-note-10",
        description: "<p>mo ta san pham</p>",
        brand: "Xiaomi",
        thumb: "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
        price: 2243223,
        category: "Smartphone",
        quantity: 123,
        sold: 0,
        images: [
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851"
        ],
        totalRatings: 0,
        varriants: [
            {
                "color": "red",
                "size": "42mm",
                "price": 2243223,
                "_id": "667958f41e22009b844fc75e"
            },
            {
                "color": "Blue",
                "size": "44mm",
                "price": 12341234,
                "_id": "667958f41e22009b844fc75f"
            }
        ],
        ratings: [],
        createdAt: "2024-06-24T11:31:00.800Z",
        updatedAt: "2024-06-24T11:31:00.800Z",
        __v: 0,
        varriantsByColor: {
                "red": [
                    {
                        "color": "red",
                        "size": "42mm",
                        "price": 2243223,
                        "_id": "667958f41e22009b844fc75e"
                    }
                ],
                "Blue": [
                    {
                        "color": "Blue",
                        "size": "44mm",
                        "price": 12341234,
                        "_id": "667958f41e22009b844fc75f"
                    }
                ]
            },
            varriantsBySize: {
                "42mm": [
                    {
                        "color": "red",
                        "size": "42mm",
                        "price": 2243223,
                        "_id": "667958f41e22009b844fc75e"
                    }
                ],
                "44mm": [
                    {
                        "color": "Blue",
                        "size": "44mm",
                        "price": 12341234,
                        "_id": "667958f41e22009b844fc75f"
                    }
                ]
            }
    },
    {
        _id: "667958f41e22009b844fc75d",
        title: "xiaomi redmi note 10",
        slug: "xiaomi-redmi-note-10",
        description: "<p>mo ta san pham</p>",
        brand: "Xiaomi",
        thumb: "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
        price: 2243223,
        category: "Smartphone",
        quantity: 123,
        sold: 0,
        images: [
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851"
        ],
        totalRatings: 0,
        varriants: [
            {
                "color": "red",
                "size": "42mm",
                "price": 2243223,
                "_id": "667958f41e22009b844fc75e"
            },
            {
                "color": "Blue",
                "size": "44mm",
                "price": 12341234,
                "_id": "667958f41e22009b844fc75f"
            }
        ],
        ratings: [],
        createdAt: "2024-06-24T11:31:00.800Z",
        updatedAt: "2024-06-24T11:31:00.800Z",
        __v: 0,
        varriantsByColor: {
                "red": [
                    {
                        "color": "red",
                        "size": "42mm",
                        "price": 2243223,
                        "_id": "667958f41e22009b844fc75e"
                    }
                ],
                "Blue": [
                    {
                        "color": "Blue",
                        "size": "44mm",
                        "price": 12341234,
                        "_id": "667958f41e22009b844fc75f"
                    }
                ]
            },
            varriantsBySize: {
                "42mm": [
                    {
                        "color": "red",
                        "size": "42mm",
                        "price": 2243223,
                        "_id": "667958f41e22009b844fc75e"
                    }
                ],
                "44mm": [
                    {
                        "color": "Blue",
                        "size": "44mm",
                        "price": 12341234,
                        "_id": "667958f41e22009b844fc75f"
                    }
                ]
            }
    },
    {
        _id: "667958f41e22009b844fc75d",
        title: "xiaomi redmi note 10",
        slug: "xiaomi-redmi-note-10",
        description: "<p>mo ta san pham</p>",
        brand: "Xiaomi",
        thumb: "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
        price: 2243223,
        category: "Smartphone",
        quantity: 123,
        sold: 0,
        images: [
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851",
            "https://cdn.shopify.com/s/files/1/1903/4853/products/z4_1024x1024.jpg?v=1491404851"
        ],
        totalRatings: 0,
        varriants: [
            {
                "color": "red",
                "size": "42mm",
                "price": 2243223,
                "_id": "667958f41e22009b844fc75e"
            },
            {
                "color": "Blue",
                "size": "44mm",
                "price": 12341234,
                "_id": "667958f41e22009b844fc75f"
            }
        ],
        ratings: [],
        createdAt: "2024-06-24T11:31:00.800Z",
        updatedAt: "2024-06-24T11:31:00.800Z",
        __v: 0,
        varriantsByColor: {
                "red": [
                    {
                        "color": "red",
                        "size": "42mm",
                        "price": 2243223,
                        "_id": "667958f41e22009b844fc75e"
                    }
                ],
                "Blue": [
                    {
                        "color": "Blue",
                        "size": "44mm",
                        "price": 12341234,
                        "_id": "667958f41e22009b844fc75f"
                    }
                ]
            },
            varriantsBySize: {
                "42mm": [
                    {
                        "color": "red",
                        "size": "42mm",
                        "price": 2243223,
                        "_id": "667958f41e22009b844fc75e"
                    }
                ],
                "44mm": [
                    {
                        "color": "Blue",
                        "size": "44mm",
                        "price": 12341234,
                        "_id": "667958f41e22009b844fc75f"
                    }
                ]
            }
    }
]
export default async function ProductListPage() {
  //   const dataResponse = await productApiRequest.getList();
  //   const {
  //     payload: { products },
  //   } = dataResponse;

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Danh sách sản phẩm</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center gap-x-10">
        <Label htmlFor="email">Sort by</Label>
        <Select>
          <SelectTrigger className="w-[180px] outline-0">
            <SelectValue placeholder="Random" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="random">Random</SelectItem>
            <SelectItem value="bestSelling">Best selling</SelectItem>
            <SelectItem value="alphaA2Z">Alphabetically, A-Z</SelectItem>
            <SelectItem value="alphaZ2A">Alphabetically, Z-A</SelectItem>
            <SelectItem value="priceH2L">Price, high to low</SelectItem>
            <SelectItem value="priceL2H">Price, low to high</SelectItem>
            <SelectItem value="dateN2O">Date, new to old</SelectItem>
            <SelectItem value="dateO2N">Date, old to new</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {products.map((product) => (
          <ProductCard key={product._id} product={product}/>
      ))}
      
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
