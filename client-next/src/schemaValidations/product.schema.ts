import z from 'zod'

export const CreateProductBody = z.object({
  name: z.string().min(1).max(256),
  price: z.coerce.number().positive(),
  description: z.string().max(10000),
  image: z.string().url()
})

export type CreateProductBodyType = z.TypeOf<typeof CreateProductBody>
export const VariantSchema = z.object({
  color: z.array(z.string()),
  size: z.array(z.string()),
  sexual: z.array(z.string()),
  origin: z.array(z.string()),
  material: z.array(z.string()),
})
export const ProductSchema = z.object({
  _id: z.string(),
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  brand: z.string(),
  thumb: z.string(),
  price: z.number(),
  discount: z.number(),
  percentDiscount: z.number(),
  category: z.string(),
  quantity: z.number(),
  sold: z.number(),
  images: z.array(z.string()),
  totalRatings: z.number(),
  varriants: VariantSchema,
  ratings: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
  __v: z.number(),
  // varriantsByColor: z.record(z.array(VariantSchema)),
  // varriantsBySize: z.record(z.array(VariantSchema)),
})
export type ProductType = z.TypeOf<typeof ProductSchema>

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
