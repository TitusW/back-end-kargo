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

function ModalFormAddEditDriver({ isOpen, onOpen, onClose, data, selectedOption, valueSelect }) {

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
            <ModalHeader>Add/ Edit Driver</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                <FormLabel>Driver Name</FormLabel>
                <Input ref={initialRef} placeholder='Driver Name' />
                </FormControl>
                <br/>
                <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input ref={initialRef} placeholder='Phone Number' />
                </FormControl>
                <br/>
                {/* <FormControl>
                <FormLabel>ID Card</FormLabel>
                <Input ref={initialRef} placeholder='ID Card' />
                </FormControl>

                <FormControl>
                <FormLabel>Driver License</FormLabel>
                <Input ref={initialRef} placeholder='Driver License' />
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

export default ModalFormAddEditDriver;