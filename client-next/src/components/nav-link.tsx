import Link from 'next/link'


function NavLink({ href, name }: { href: string; name: string }) {
    return (
        <Link href={href} passHref legacyBehavior>
            <a className="accent-red-600">{name}</a>
        </Link>
    )
}

export default NavLink