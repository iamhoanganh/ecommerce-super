"use client"
import React from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

function SortOption() {
    const searchParams = useSearchParams()
    const sort = searchParams.get('sort')
    const pathname = usePathname();
    const { replace, refresh } = useRouter();
    const category = searchParams.get('category')
    const handleSort = (value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set('sort', value);
        } else {
            params.delete('sort');
        }
        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <div className="flex items-center gap-x-10 py-6">
            <Label htmlFor="email">Sắp xếp theo</Label>
            <Select onValueChange={handleSort} defaultValue={searchParams.get('sort')?.toString()}>
                <SelectTrigger className="w-[180px] outline-0">
                    <SelectValue placeholder="Random"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="random">Ngẫu nhiên</SelectItem>
                    <SelectItem value="-sold">Bán chạy</SelectItem>
                    <SelectItem value="-title">Từ A đến Z</SelectItem>
                    <SelectItem value="title">Từ Z đến A</SelectItem>
                    <SelectItem value="-price">Giá cao &gt; thấp</SelectItem>
                    <SelectItem value="price">Giá thấp &gt; cao</SelectItem>
                    <SelectItem value="-createdAt">Mới đến cũ</SelectItem>
                    <SelectItem value="createdAt">Cũ đến mới</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}

export default SortOption;