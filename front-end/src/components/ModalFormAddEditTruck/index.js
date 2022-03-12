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

function ModalFormAddEditTruck({ isOpen, onOpen, onClose, data, selectedOption, valueSelect }) {
    

    const initialRef = React.useRef()
    const finalRef = React.useRef()

    const licenseTypeList = ['type1', 'type2']
    const truckTypeList = ['type1', 'type2']

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
            <ModalHeader>Add/ Edit Truck</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                <FormLabel>License Number</FormLabel>
                <Input ref={initialRef} placeholder='License Number' />
                </FormControl>
                <br/>
                <FormControl>
                <FormLabel>License Type</FormLabel>
                <DropdownMenu data={licenseTypeList} selectedOption={null} valueSelect={null}/>
                </FormControl>
                <br/>
                <FormControl>
                <FormLabel>Truck Type</FormLabel>
                <DropdownMenu data={truckTypeList} selectedOption={null} valueSelect={null}/>
                </FormControl>
                <br/>
                <FormControl>
                <FormLabel>Production Year</FormLabel>
                    <Input ref={initialRef} placeholder='Production Year' />
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

export default ModalFormAddEditTruck;