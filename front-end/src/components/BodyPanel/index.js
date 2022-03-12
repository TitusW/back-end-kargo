import { Flex } from "@chakra-ui/react";
import React from "react";

function BodyPanel({children}) {
    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            alignItems="center"
            >
            {children}
        </Flex>
    )
}

export default BodyPanel;