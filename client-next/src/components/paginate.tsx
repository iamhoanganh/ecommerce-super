"use client"
import React from 'react';
import {useSearchParams, usePathname, useRouter} from 'next/navigation'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";

function Paginate({productLength} : {productLength: number}) {
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get('page')) || 1
    const pageCount = Math.ceil(productLength / PAGE_SIZE)
    const next = currentPage === pageCount ? currentPage : currentPage + 1
    const prev = currentPage === 1 ? currentPage : currentPage - 1
    const pathname = usePathname();
    const { replace, refresh } = useRouter();
    const category = searchParams.get('category')
    const handlePage = (value: number) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set('page', String(value));
        } else {
            params.delete('page');
        }
        replace(`${pathname}?${params.toString()}`);
    }
    if (pageCount <= 1) return null
    return (
        <Pagination className="my-5">
            <PaginationContent>
                <PaginationItem onClick={() => handlePage(prev)}>
                    <PaginationPrevious/>
                </PaginationItem>
                <PaginationItem onClick={() => handlePage(next)}>
                    <PaginationNext/>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}

export default Paginate;