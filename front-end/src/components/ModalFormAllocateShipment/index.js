// import { Select } from "@chakra-ui/react"
import React from "react"

function ModalFormAllocateShipment({isOpen, onOpen, onClose, data, selectedOption, valueSelect, shipmentId }) {

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
            <ModalHeader>Allocate Shipment {shipmentId}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                <FormLabel>Truck Id</FormLabel>
                <Input ref={initialRef} placeholder='Truck ID' />
                </FormControl>
                <br/>
                <FormControl>
                <FormLabel>Driver Id</FormLabel>
                <Input ref={initialRef} placeholder='Driver ID' />
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

export default ModalFormAllocateShipment;