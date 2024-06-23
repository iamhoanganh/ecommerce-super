import z from 'zod'

export const AccountRes = z
    .object({
            success: z.boolean(),
            rs: z.object({
                _id: z.string(),
                firstname: z.string(),
                lastname: z.string(),
                email: z.string(),
                mobile: z.string(),
                role: z.string(),
                wishlist: z.array(z.string()),
                isBlocked: z.boolean(),
                cart: z.array(z.string()),
                createdAt: z.string(),
                updatedAt: z.string(),
                __v: z.number(),
                address: z.string(),
                avatar: z.string(),
                passwordChangedAt: z.string()
            })
        }
    )
    .strict()

export type AccountResType = z.TypeOf<typeof AccountRes>

export const UpdateMeBody = z.object({
    name: z.string().trim().min(2).max(256)
})

export type UpdateMeBodyType = z.TypeOf<typeof UpdateMeBody>
