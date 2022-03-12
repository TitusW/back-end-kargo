import React, { useState, useEffect } from 'react'
import axios from "axios";
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
import ModalFormAddEditDriver from '../components/ModalFormAddEditDriver';

function Drivers() {
    const itemsPerPage = 10;
    const baseUrl = "https://3494-180-244-136-209.ngrok.io"
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [dataDrivers, setDataDrivers] = useState([])
    const [allDataCharacters, setAllDataCharacters] = useState([]);
    const [perPageCharacters, setPerPageCharacters] = useState([]);
    const [filterGender, setFilterGender] = useState("");
    const [filterSkin, setFilterSkin] = useState("");
    const [filterText, setFilterText] = useState("");
    const [pageOffset, setPageOffset] = useState(0);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    // const [dataLength, setDataLength] = useState(0);
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    // const { data, loading, error } = useQuery(GET_ALL_CHARACTERS, {
    //     onCompleted: (data) => {
    //         if(dataDrivers){
    //             setAllDataCharacters(dataDrivers);
    //             setFilteredCharacters(dataDrivers);
    //             setPerPageCharacters(dataDrivers.slice(0, itemsPerPage));
    //             // setDataLength(dataDrivers.length);
    //         }else{
    //             setAllDataCharacters(data.allPeople.people);
    //             setFilteredCharacters(data.allPeople.people);
    //             setPerPageCharacters(data.allPeople.people.slice(0, itemsPerPage));
    //             // setDataLength(data.allPeople.people.length);
    //         }
    //     }
    // });

    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/drivers`).then((response) => {
            console.log(response);
            setDataDrivers(response.data);
          });
    },[]);

    const navigate = useNavigate()
    const filterCharacters = (filterStr) => {
        setFilterText(filterStr);
        let charListTmp = allDataCharacters.filter((driverObj) => {
            let driverObjGender = driverObj.gender.replace(/(^\w{1}|\.\s*\w{1})/gi, function(toReplace) {
                return toReplace.toUpperCase();
            });
            let driverObjfilterGender = filterGender.replace(/(^\w{1}|\.\s*\w{1})/gi, function(toReplace) {
                return toReplace.toUpperCase();
            });
            if(driverObjGender.includes(driverObjfilterGender) && driverObj.skinColor.includes(filterSkin) && driverObj.name.toLowerCase().includes(filterStr)){
                return driverObj
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
        let charListTmp = allDataCharacters.filter((driverObj) => {
            let driverObjGender = driverObj.gender.replace(/(^\w{1}|\.\s*\w{1})/gi, function(toReplace) {
                return toReplace.toUpperCase();
            });
            let driverObjfilterGender = filterStr.replace(/(^\w{1}|\.\s*\w{1})/gi, function(toReplace) {
                return toReplace.toUpperCase();
            });
            if(driverObjGender.includes(driverObjfilterGender) && driverObj.skinColor.includes(filterSkin) && driverObj.name.toLowerCase().includes(filterText)){
                return driverObj
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
                            Add Driver
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
                            <Th>Driver Name</Th>
                            <Th>Phone Number</Th>
                            <Th>Created At</Th>
                            <Th>Status</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {dataDrivers.map((driverObj, key) => {
                            return(
                            <Tr height="30px" key={key} class="odd:bg-white even:bg-slate-100 h-12 hover:bg-slate-300" onClick={() => navigate(`/driverObjs/${driverObj.id}`)}>
                                <Td>{key+1}</Td>
                                <Td>{driverObj.Name}</Td>
                                <Td>{driverObj.Phone_number}</Td>
                                <Td>{driverObj.Created_at}</Td>
                                <Td>{driverObj.Status}</Td>
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
            <ModalFormAddEditDriver onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
        </div> 
    )
}

export default Drivers;