import { type ClassValue, clsx } from "clsx"
import { UseFormSetError } from "react-hook-form"
import { twMerge } from "tailwind-merge"
import { EntityError } from "./http"
import { toast } from "@/components/ui/use-toast"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const handleErrorApi = ({error, setError, duration} : {error: any, setError?: UseFormSetError<any>, duration?: number}) => {
  if (error instanceof EntityError && setError) {
    error.payload.errors.forEach((item) => {
        setError(item.field, { message: item.message, type: 'server' })
    })
  }
  else {
    toast({
      title: "Lỗi",
      description: error.payload.message ?? "loi khong xac dinh",
      variant: "destructive",
      duration: duration ?? 5000,
    })
  }
}
export const normalizePath = (path: string) => {
  return path.startsWith("/") ? path.slice(1) : path
}
export const slugify = (...args: (string | number)[]): string => {
const value = args.join(' ')

  return value
      .normalize('NFD') // split an accented letter in the base letter and the acent
      .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
      .replace(/\s+/g, '-') // separator
}
export const formatPrice = (price: number) => {
  return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replaceAll(".", ",")
}