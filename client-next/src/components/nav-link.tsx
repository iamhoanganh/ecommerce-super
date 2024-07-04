import Link from 'next/link'
import {cn} from "@/lib/utils";


function NavLink({ className, href, name, customClassName }: { className?: string, href: string; name: string, customClassName?:string }) {
    return (
        <Link href={href} passHref legacyBehavior className={className}>
            <a className={cn("accent-red-600 py-3 w-11/12", customClassName)}>{name}</a>
        </Link>
    )
}

export default NavLink