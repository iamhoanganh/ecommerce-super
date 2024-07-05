import React from 'react';
import ToggleGroupSelection from "@/components/toggle-group-selection";

function VariantSelect({options, title} : {options: string[], title: string}) {
    return (
        <div className="flex items-center mb-2">
            <b className="mr-3 basis-[100px]">{title}:</b>
            <ToggleGroupSelection options={options}/>
        </div>
    );
}

export default VariantSelect;