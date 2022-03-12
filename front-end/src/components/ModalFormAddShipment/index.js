// import { Select } from "@chakra-ui/react"
import React, {useState} from "react"
import axios from 'axios'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button
  } from '@chakra-ui/react'

function ModalFormAddShipment({ isOpen, onOpen, onClose, data, selectedOption, valueSelect }) {

    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const [shipmentObj, setShipmentObj] = useState(null)

    const handleForm = () => {
        // axios.post("http://57fd-182-1-76-159.ngrok.io/api/v1/shipments/addShipment", {
        //     body: {
        //         "ShipmentNumber": "123",
        //         "LicenseNumber": 12312131,
        //         "Driver": "driver Budi",
        //         "Origin": "origin Budi",
        //         "Destination": "String Budi",
        //         "LoadingDate": "2022-03-02T17:04:00.000Z",
        //         "Status": "status1",
        //         "Truck": "truck 1",
        //         "CreatedAt": "2022-03-02T17:04:00.000Z",
        //         "UpdatedAt": "2022-03-02T17:04:00.000Z"
        //     }
        // })
        // .then((response) => {
        //     setShipmentObj(response.data);
        // });
    }

    return (
        <>
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Add Shipment</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                <FormLabel>Origin</FormLabel>
                <Input ref={initialRef} placeholder='Origin' />
                </FormControl>
                <br/>
                <FormControl>
                <FormLabel>Destination</FormLabel>
                <Input ref={initialRef} placeholder='Destination' />
                </FormControl>
                <br/>
                <FormControl>
                <FormLabel>Truck Type</FormLabel>
                <input type="date" id="loading-date" name="LoadingDate"/>
                </FormControl>
                <br/>
                {/* <FormControl>
                <FormLabel>STNK</FormLabel>
                <Input ref={initialRef} placeholder='STNK' />
                </FormControl>

                <FormControl>
                <FormLabel>KIR</FormLabel>
                <Input ref={initialRef} placeholder='KIR' />
                </FormControl> */}
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={handleForm()}>
                Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}

export default ModalFormAddShipment;