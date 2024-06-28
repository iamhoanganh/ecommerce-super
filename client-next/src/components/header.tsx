import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import ButtonLogout from "./button-loggout";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import Image from "next/image";
import logo from "../../public/logo.png"

export default function Header() {
    return (
        <header className="border-b-2">
            <div className='w-main flex justify-between h-[110px] py-[35px]  max-w-screen-lg m-auto'>
                <div className="flex gap-x-2.5">
                    <Link href='/'>
                        <Image src={logo} alt="logo" width={234} height={50} className='w-[234px] object-contain'/>
                    </Link>
                    <div className="flex gap-x-2.5">
                        <Link href='/'>Trang chủ</Link>
                        <Link href='/products'>Sản phẩm</Link>
                    </div>
                </div>
                <div className='flex text-[13px]'>
                    <Command>
                        <CommandInput placeholder="Type a command or search..."/>
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="Suggestions">
                                <CommandItem>Calendar</CommandItem>
                                <CommandItem>Search Emoji</CommandItem>
                                <CommandItem>Calculator</CommandItem>
                            </CommandGroup>
                            <CommandSeparator/>
                            <CommandGroup heading="Settings">
                                <CommandItem>Profile</CommandItem>
                                <CommandItem>Billing</CommandItem>
                                <CommandItem>Settings</CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </div>
            </div>
        </header>
    )
}