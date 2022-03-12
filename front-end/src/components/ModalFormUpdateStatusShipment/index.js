// import { Select } from "@chakra-ui/react"
import React from "react"
import DropdownMenu from "../DropdownMenu"

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

function ModalFormUpdateStatusShipment({ isOpen, onOpen, onClose, data, selectedOption, valueSelect, shipmentId }) {

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
            <ModalHeader>Update Status {shipmentId}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>

                <FormControl>
                <FormLabel>Status</FormLabel>
                <DropdownMenu data={genderList} selectedOption={filterGenderFunc} valueSelect={filterGender}/>
                </FormControl>
                <br/>
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

export default ModalFormUpdateStatusShipment;