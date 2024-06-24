import z from 'zod'

export const CreateProductBody = z.object({
  name: z.string().min(1).max(256),
  price: z.coerce.number().positive(),
  description: z.string().max(10000),
  image: z.string().url()
})

export type CreateProductBodyType = z.TypeOf<typeof CreateProductBody>
export const VarriantSchema = z.object({
  color: z.string(),
  size: z.string(),
  price: z.number(),
  _id: z.string(),
})
export const ProductSchema = z.object({
  _id: z.string(),
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  brand: z.string(),
  thumb: z.string(),
  price: z.object({
    min: z.number(),
    max: z.number()
  }),
  category: z.string(),
  quantity: z.number(),
  sold: z.number(),
  images: z.array(z.string()),
  totalRatings: z.number(),
  varriants: z.array(VarriantSchema),
  ratings: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
  __v: z.number(),
  varriantsByColor: z.record(z.array(VarriantSchema)),
  varriantsBySize: z.record(z.array(VarriantSchema)),
})

export const ProductRes = z.object({
  counts: z.number(),
  success: z.boolean(),
  productData: ProductSchema,
})

export type ProductResType = z.TypeOf<typeof ProductRes>

export const ProductListRes = z.object({
  success: z.boolean(),
  counts: z.number(),
  products: z.array(ProductSchema),
})

export type ProductListResType = z.TypeOf<typeof ProductListRes>

export const UpdateProductBody = CreateProductBody
export type UpdateProductBodyType = CreateProductBodyType
export const ProductParams = z.object({
  id: z.coerce.number()
})
export type ProductParamsType = z.TypeOf<typeof ProductParams>
