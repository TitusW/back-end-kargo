import React, { useState, useEffect } from 'react'
import axios from "axios";
import { IoMdAddCircleOutline } from 'react-icons/io'
import { Select, useDisclosure } from '@chakra-ui/react'
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
import ModalFormAddShipment from '../components/ModalFormAddShipment';

function Shipments() {
    const itemsPerPage = 10;
    const { isOpen: addShipmentIsOpen, onOpen: addShipmentOnOpen, onClose: addShipmentOnClose } = useDisclosure()

    const [allDataCharacters, setAllDataCharacters] = useState([]);
    const [dataShipments, setDataShipments] = useState([])
    const [perPageCharacters, setPerPageCharacters] = useState([]);
    const [filterShipment, setFilterShipment] = useState("");
    // const [filterSkin, setFilterSkin] = useState("");
    const [filterText, setFilterText] = useState("");
    // const [pageOffset, setPageOffset] = useState(0);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    // const [dataLength, setDataLength] = useState(0);
    // const { data, loading, error } = useQuery(GET_ALL_CHARACTERS, {
    //     onCompleted: (data) => {
    //         if(dataShipments){
    //             // setAllDataCharacters(dataShipments);
    //             // setFilteredCharacters(dataShipments);
    //             // setPerPageCharacters(dataShipments.slice(0, itemsPerPage));
    //             // setDataLength(dataShipments.length);
    //         }else{
    //             setAllDataCharacters(data.allPeople.people);
    //             setFilteredCharacters(data.allPeople.people);
    //             setPerPageCharacters(data.allPeople.people.slice(0, itemsPerPage));
    //             // setDataLength(data.allPeople.people.length);
    //         }
    //     }
    // });

    useEffect(() => {
        axios.get('https://347e-182-1-101-68.ngrok.io/api/v1/shipments/all').then((response) => {
            console.log(response.data.data)
            setDataShipments(response.data.data);
            setAllDataCharacters(response.data.data);
            setFilteredCharacters(response.data.data);
            // setPerPageCharacters(response.data.slice(0, itemsPerPage));
          });
    },[]);

    // const handleForm = () => {
    //     axios.post("http://57fd-182-1-76-159.ngrok.io/api/v1/shipments/addShipment", {
    //         body: {
    //             "ShipmentNumber": "123",
    //             "LicenseNumber": 12312131,
    //             "Driver": "driver Budi",
    //             "Origin": "origin Budi",
    //             "Destination": "String Budi",
    //             "LoadingDate": "2022-03-02T17:04:00.000Z",
    //             "Status": "status1",
    //             "Truck": "truck 1"
    //         }
    //     })
    // }

    const navigate = useNavigate()
    const filterCharacters = (filterStr) => {
        setFilterText(filterStr);
        let charListTmp = allDataCharacters.filter((shipmentObj) => {
            let shipmentObjGender = shipmentObj.gender.replace(/(^\w{1}|\.\s*\w{1})/gi, function(toReplace) {
                return toReplace.toUpperCase();
            });
            let shipmentObjfilterShipment = filterShipment.replace(/(^\w{1}|\.\s*\w{1})/gi, function(toReplace) {
                return toReplace.toUpperCase();
            });
            // if(shipmentObjGender.includes(shipmentObjfilterShipment) && shipmentObj.skinColor.includes(filterSkin) && shipmentObj.name.toLowerCase().includes(filterStr)){
            //     return shipmentObj
            // }
            return ""
        })
        setFilteredCharacters(charListTmp)
        // setDataLength(charListTmp.length)
        setPerPageCharacters(charListTmp.slice(0, itemsPerPage));
        }
    const filterShipmentFunc = (filterStr) => {
        if(filterStr === 'allGender') 
            filterStr = '';
        setFilterShipment(filterStr);
        let charListTmp = allDataCharacters.filter((shipmentObj) => {
            let shipmentObjGender = shipmentObj.gender.replace(/(^\w{1}|\.\s*\w{1})/gi, function(toReplace) {
                return toReplace.toUpperCase();
            });
            let shipmentObjfilterShipment = filterStr.replace(/(^\w{1}|\.\s*\w{1})/gi, function(toReplace) {
                return toReplace.toUpperCase();
            });
            // if(shipmentObjGender.includes(shipmentObjfilterShipment) && shipmentObj.skinColor.includes(filterSkin) && shipmentObj.name.toLowerCase().includes(filterText)){
            //     return shipmentObj
            // }
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
                            <DropdownMenu data={genderList} selectedOption={filterShipmentFunc} valueSelect={filterShipment}/>
                        </Flex>
                    </Flex>
                    <Flex>
                        <Button alignItems="center" onClick={addShipmentOnOpen}>
                            <IoMdAddCircleOutline></IoMdAddCircleOutline>
                            <Flex marginX="1"></Flex>
                            Add Shipment
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
                            <Th>No.</Th>
                            <Th>Shipment</Th>
                            <Th>License</Th>
                            <Th>Driver Name</Th>
                            <Th>Origin</Th>
                            <Th>Destination</Th>
                            <Th>Loading Date</Th>
                            <Th>Status</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {dataShipments.map((shipmentObj, key) => {
                            return(
                            <Tr height="30px" key={key} class="odd:bg-white even:bg-slate-100 h-12 hover:bg-slate-300" onClick={() => navigate(`/shipmentObjs/${shipmentObj.id}`)}>
                                <Td>{key+1}</Td>
                                <Td>{shipmentObj.ShipmentNumber}</Td>
                                <Td>{shipmentObj.LicenseNumber}</Td>
                                <Td>{shipmentObj.Driver}</Td>
                                <Td>{shipmentObj.Origin}</Td>
                                <Td>{shipmentObj.Destination}</Td>
                                <Td>{shipmentObj.LoadingDate}</Td>
                                <Td>{shipmentObj.Status}</Td>
                                <Td><Button>Action</Button></Td>
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
            <ModalFormAddShipment onOpen={addShipmentOnOpen} isOpen={addShipmentIsOpen} onClose={addShipmentOnClose}/>
        </div>
    )
}

export default Shipments;