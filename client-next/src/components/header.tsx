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
import logo from "../../public/chodocutot-logo.png"
import {Button} from "@/components/ui/button";
import categoryApiRequest from "@/apiRequests/category";
import NavLink from "@/components/nav-link";
import CommandSearch from "@/components/command-search";


export default async function Header() {
    const {payload: {prodCategories}} = await categoryApiRequest.getCategoriesList()

    return (
        <header className="border-b-2 px-3 fixed top-0 left-0 right-0 bg-white z-50 border-amber-500">
            <div className='w-main flex items-center justify-between h-[80px] max-w-screen-lg m-auto'>
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
                <div className="flex gap-x-4 items-center relative">
                    <div className={"absolute right-12 min-w-[300px] top-0.5 hidden sm:block"}>
                        <CommandSearch />
                    </div>
                    <ModeToggle/>
                </div>
            </div>
        </header>
    )
}