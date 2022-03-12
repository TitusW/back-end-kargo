// import { Select } from "@chakra-ui/react"
import React from "react"

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
                <Button colorScheme='blue' mr={3}>
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