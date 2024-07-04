import Link from "next/link";
import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"
import {FaBars} from "react-icons/fa6";
import {ModeToggle} from "./mode-toggle";
import Image from "next/image";
import logo from "../../public/logo.png"
import {Button} from "@/components/ui/button";
import categoryApiRequest from "@/apiRequests/category";
import NavLink from "@/components/nav-link";


export default async function Header() {
    const {payload: {prodCategories}} = await categoryApiRequest.getCategoriesList()

    return (
        <header className="border-b-2 px-3">
            <div className='w-main flex items-center justify-between h-[80px] max-w-screen-lg m-auto lg:h-[100px]'>
                <Sheet>
                    <SheetTrigger className="pl-2 sm:hidden">
                        <FaBars/>
                    </SheetTrigger>
                    <SheetContent side={"left"}>
                        <SheetHeader>
                            <SheetTitle>Chọn danh mục sản phẩm</SheetTitle>
                        </SheetHeader>
                        <SheetClose asChild>
                            <nav className="flex flex-col justify-center">
                                {prodCategories.map((category) =>
                                    <NavLink key={category._id} href={`/products/?category=${category.title}`} name={category.title} customClassName="py-5 text-center border-b-2 last:border-b-0"/>
                                )}
                            </nav>
                        </SheetClose>
                    </SheetContent>
                </Sheet>
                <Link href='/'>
                    <Image src={logo} alt="logo" width={234} height={50} className='w-[234px] object-contain'/>
                </Link>
                <ModeToggle/>
            </div>
        </header>
    )
}