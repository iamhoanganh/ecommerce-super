import z from 'zod'

export const RegisterBody = z
  .object({
    name: z.string().trim().min(2).max(256),
    email: z.string().email(),
    password: z.string().min(6).max(100),
    confirmPassword: z.string().min(6).max(100)
  })
  .strict()
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Mật khẩu không khớp',
        path: ['confirmPassword']
      })
    }
  })

export type RegisterBodyType = z.TypeOf<typeof RegisterBody>

export const RegisterRes = z.object({
  data: z.object({
    token: z.string(),
    expiresAt: z.string(),
    account: z.object({
      id: z.number(),
      name: z.string(),
      email: z.string()
    })
  }),
  message: z.string()
})

export type RegisterResType = z.TypeOf<typeof RegisterRes>

export const LoginBody = z
  .object({
    email: z.string().email(),
    password: z.string().min(6).max(100)
  })
  .strict()

export type LoginBodyType = z.TypeOf<typeof LoginBody>
export const LoginRes = z.object({
    userData: z.object({
        _id: z.string(),
        address: z.string(),
        createdAt: z.string(),
        avatar: z.string(),
        cart: z.array(z.object({
            color: z.string(),
            price: z.number(),
            product: z.string(),
            quantity: z.number(),
            thumbnail: z.string(),
            title: z.string(),
            _id: z.string(),
        })),
        email: z.string(),
        firstname: z.string(),
        isBlocked: z.boolean(),
        lastname: z.string(),
        mobile: z.string(),
        passwordChangedAt: z.string(),
        updatedAt: z.string(),
        wishlist: z.array(z.string()),
    }),
    accessToken: z.string(),
    success: z.boolean()

})

// export const LoginRes = RegisterRes

export type LoginResType = z.TypeOf<typeof LoginRes>
export const SlideSessionBody = z.object({}).strict()

export type SlideSessionBodyType = z.TypeOf<typeof SlideSessionBody>
export const SlideSessionRes = RegisterRes

export type SlideSessionResType = z.TypeOf<typeof SlideSessionRes>
