import { Select } from "@chakra-ui/react";
import React from "react";

function DropdownMenu({ data, selectedOption, valueSelect }) {
    return (
        <div class="flex align-center mx-2">
            <Select onChange={ e => selectedOption(e.target.value)}
            variant='unstyled'
            placeholder="Type"
            value={valueSelect}
            id="optionSelect" 
            name="optionSelect"
            class="border-none">
                {data.map((eachOption, key) => {
                    let result = eachOption.replace( /([A-Z])/g, " $1" );
                    let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
                    return(
                        <option key={key} value={eachOption}>{finalResult}</option>
                    )
                })}
            </Select>
        </div>
    )
}

export default DropdownMenu;