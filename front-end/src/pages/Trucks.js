import React, { useState, useEffect } from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { useDisclosure } from '@chakra-ui/react'
import { Button, Flex } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
  } from '@chakra-ui/react'
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_ALL_CHARACTERS } from '../apollo/queries';
import DropdownMenu from '../components/DropdownMenu';
import InputSearch from '../components/InputSearch';
import BodyPanel from '../components/BodyPanel';
import LoadingComponent from '../components/LoadingComponent';
import ModalFormAddEditTruck from '../components/ModalFormAddEditTruck';

function Trucks({dataCharacters}) {
    const itemsPerPage = 10;
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [allDataCharacters, setAllDataCharacters] = useState([]);
    const [perPageCharacters, setPerPageCharacters] = useState([]);
    const [filterGender, setFilterGender] = useState("");
    const [filterSkin, setFilterSkin] = useState("");
    const [filterText, setFilterText] = useState("");
    const [pageOffset, setPageOffset] = useState(0);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [openModalDialog, setOpenModalDialog] = useState(false);
    // const [dataLength, setDataLength] = useState(0);
    const { data, loading, error } = useQuery(GET_ALL_CHARACTERS, {
        onCompleted: (data) => {
            if(dataCharacters){
                setAllDataCharacters(dataCharacters);
                setFilteredCharacters(dataCharacters);
                setPerPageCharacters(dataCharacters.slice(0, itemsPerPage));
                // setDataLength(dataCharacters.length);
            }else{
                setAllDataCharacters(data.allPeople.people);
                setFilteredCharacters(data.allPeople.people);
                setPerPageCharacters(data.allPeople.people.slice(0, itemsPerPage));
                // setDataLength(data.allPeople.people.length);
            }
        }
    });

    useEffect(() => {
        
    },[data, loading]);

    const navigate = useNavigate()
    const filterCharacters = (filterStr) => {
        setFilterText(filterStr);
        let charListTmp = allDataCharacters.filter((character) => {
            let characterGender = character.gender.replace(/(^\w{1}|\.\s*\w{1})/gi, function(toReplace) {
                return toReplace.toUpperCase();
            });
            let characterfilterGender = filterGender.replace(/(^\w{1}|\.\s*\w{1})/gi, function(toReplace) {
                return toReplace.toUpperCase();
            });
            if(characterGender.includes(characterfilterGender) && character.skinColor.includes(filterSkin) && character.name.toLowerCase().includes(filterStr)){
                return character
            }
            return ""
        })
        setFilteredCharacters(charListTmp)
        // setDataLength(charListTmp.length)
        setPerPageCharacters(charListTmp.slice(0, itemsPerPage));
        }
    const filterGenderFunc = (filterStr) => {
        if(filterStr === 'allGender') 
            filterStr = '';
        setFilterGender(filterStr);
        let charListTmp = allDataCharacters.filter((character) => {
            let characterGender = character.gender.replace(/(^\w{1}|\.\s*\w{1})/gi, function(toReplace) {
                return toReplace.toUpperCase();
            });
            let characterfilterGender = filterStr.replace(/(^\w{1}|\.\s*\w{1})/gi, function(toReplace) {
                return toReplace.toUpperCase();
            });
            if(characterGender.includes(characterfilterGender) && character.skinColor.includes(filterSkin) && character.name.toLowerCase().includes(filterText)){
                return character
            }
            return ""
        })
        setFilteredCharacters(charListTmp)
        // setDataLength(charListTmp.length)
        setPerPageCharacters(charListTmp.slice(0, itemsPerPage));
    }
    const genderList = ['allGender', 'male', 'female', 'n/a']
    if (error) {
        return <p>{error.message}</p>;
    }
    
    return (
        <div>
            <BodyPanel>
                <Flex alignItems="center" marginTop="200px" width="50vw" justifyContent="space-between">
                    <Flex>
                        <InputSearch filterList={filterCharacters} valueInput={filterText} />
                        <Flex dropShadow="md" marginX="10" justifyContent="center" alignItems="center" bgColor="white" borderRadius="5px" width="150px" height="38px">
                            <DropdownMenu data={genderList} selectedOption={filterGenderFunc} valueSelect={filterGender}/>
                        </Flex>
                    </Flex>
                    <Flex>
                        <Button alignItems="center" onClick={onOpen}>
                            <IoMdAddCircleOutline></IoMdAddCircleOutline>
                            <Flex marginX="1"></Flex>
                            Add Truck
                        </Button>
                    </Flex>
                </Flex>
                <Flex marginTop="20px">
                {loading ? (
                    <LoadingComponent />
                    ): (
                <Table variant='simple' bgColor="white" borderRadius="10px" width="60vw">
                    <Thead>
                        <Tr>
                            <Th>License Number</Th>
                            <Th>Truck Type</Th>
                            <Th>Plate Type</Th>
                            <Th>Production Year</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {perPageCharacters.map((character, key) => {
                            return(
                            <Tr height="30px" key={key} class="odd:bg-white even:bg-slate-100 h-12 hover:bg-slate-300" onClick={() => navigate(`/characters/${character.id}`)}>
                                <Td>{key+1+pageOffset}</Td>
                                <Td>{character.name}</Td>
                                <Td>{character.gender}</Td>
                                <Td>{character.birthYear}</Td>
                                <Td>{character.species ? character.species.name : "null"}</Td>
                            </Tr>
                            )
                        })}
                    </Tbody>
                    <Tfoot>
                    </Tfoot>
                    </Table>
                    )}
                </Flex>
            </BodyPanel>
            <ModalFormAddEditTruck onOpen={onOpen} isOpen={isOpen} onClose={onClose}/>
        </div>
    )
}

export default Trucks;