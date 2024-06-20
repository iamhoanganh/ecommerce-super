import { z } from "zod";

// config for env variables
const configSchema = z.object({
    NEXT_PUBLIC_API_URL: z.string()
})
const configProject = configSchema.safeParse({
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL

})

if (!configProject.success) {
    throw new Error("Cac gia tri cua env khong hop le")
}
const envConfig = configProject.data
export default envConfig