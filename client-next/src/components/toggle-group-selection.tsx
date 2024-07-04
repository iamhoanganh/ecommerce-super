import React from 'react';
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
function ToggleGroupSelection({options} : {options: string[]}) {
    return (
        <ToggleGroup type="single">
            {options.map((option, index) => (
                <ToggleGroupItem key={index} value={option} aria-label={`Toggle ${option}`}>{option.charAt(0).toUpperCase() + option.slice(1)}</ToggleGroupItem>
            ))}
        </ToggleGroup>
    );
}

export default ToggleGroupSelection;