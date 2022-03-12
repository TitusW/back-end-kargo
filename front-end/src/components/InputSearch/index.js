import React from "react";
import { FaSearch } from 'react-icons/fa'
import { Flex, Input, InputLeftElement, InputGroup } from "@chakra-ui/react";

function InputSearch({ filterList, valueInput }) {
    return (
        // <div class="drop-shadow-md mx-4 my-4">
        //     <div class="flex flex-row rounded-3xl align-center bg-white w-64 h-9">
        //         <div class="flex align-center justify-center mr-2 pl-4">
        //             <FaSearch/>
        //             {/* <img alt="search icon" src={FaSearch} /> */}
        //         </div>
        //         <div class="flex align-center">
        //             <input type="text" 
        //             id="search" 
        //             name="search" 
        //             placeholder="Search" 
        //             class="border-none"
        //             value={valueInput}
        //             onChange={ e => filterList(e.target.value) }/>
        //         </div>
        //     </div>
        // </div>
        <Flex>
            <InputGroup size='md' borderColor="#CBD5E0">
            <InputLeftElement
            pointerEvents='none'
            children={<FaSearch color='gray.300' />}
            />
            <Input type='text' placeholder='Search' 
                bgColor="white"
                value={valueInput}
                onChange={ e => filterList(e.target.value) }
            />
            </InputGroup>
        </Flex>
    )
}

export default InputSearch;