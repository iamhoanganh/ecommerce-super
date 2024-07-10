"use client"
import React, {useEffect, useRef} from "react";
import {
    Command,
    CommandEmpty,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import productApiRequest from "@/apiRequests/product";
import {ProductType} from "@/schemaValidations/product.schema";
import {clsx} from "clsx";
import {useRouter} from "next/navigation";
import Image from "next/image";
import envConfig from "@/config";

export function useOutsideClick(handleFunction =  () => {}, listenCapturing = true){
    const ref = useRef<HTMLDivElement |null>(null)
    useEffect(() => {
        function handleClick(e : any) {
            if(ref.current && !ref.current.contains(e.target)) handleFunction();
        }
        document.addEventListener("click", handleClick, listenCapturing);
        return () => document.removeEventListener("click", handleClick, listenCapturing); // parameter true is important for bubble up
    }, [handleFunction, listenCapturing]);
    return ref;
}
export default function CommandSearch({customWrapperClassname} : {customWrapperClassname?: string}) {
    const [searchValue, setSearchValue] = React.useState("");
    const [open, setOpen] = React.useState(false)
    const [listProduct, setListProduct] = React.useState<ProductType[]>([])
    const ref = useOutsideClick(() => setOpen(false))
    const router = useRouter()
    const handleValueChange = (value: string) => {
        setSearchValue(value);
        setOpen(value.length > 0)
    };
    useEffect(() => {
        async function fetchProduct() {
            const {payload : {products}} = await productApiRequest.getList(`?title=${searchValue}&limit=8`)
            setListProduct(products)
        }
        fetchProduct()
    }, [searchValue])
    return (
        <Command ref={ref} className={"rounded-lg border shadow-md relative" + customWrapperClassname}>
            <CommandInput className="h-[36px]" placeholder="Nhập sản phẩm muốn tìm..." value={searchValue} onValueChange={handleValueChange}/>
            <CommandList className={clsx("absolute w-full top-[40px] z-10 bg-white",open ? "block" : "hidden ")}>
                {listProduct.map((item, index) => (
                    <CommandItem className="gap-x-3 " key={item._id + index} value={item.title + item._id} onSelect={() => {
                        router.push(`/products/${item._id}`)
                    }}>
                        <Image src={envConfig.NEXT_PUBLIC_API_URL + item.thumb} alt={item.title} width={32} height={32} className="w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] object-cover" />
                        <span>{item.title}</span>
                    </CommandItem>
                ))}
                <CommandEmpty>Không tìm thấy sản phẩm.</CommandEmpty>
            </CommandList>
        </Command>
    )
}