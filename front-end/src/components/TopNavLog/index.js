import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react';

function TopNavLog({}) {
  const [authenticated, setauthenticated] = useState(false);

  const handleOut = () =>{
    localStorage.setItem('auth', false);
  }
    return (
      <Flex
      justify="space-between"
      position="fixed"
      align={{ base: 'stretch', md: 'center' }}
      background="#fff"
      maxW="100%"
      minH={20}
      px={200}
      w="100%"
      direction={{ base: 'column', md: 'row' }}
    >
      <Stack
        position={{ base: 'relative', md: 'static' }}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        display={{ base: 'flex', md: 'flex' }}
        w={{ base: '100%', md: 'auto' }}
        pb={{ base: 4, md: 0 }}
        marginTop="15px"
      >
        <Link to="/login">
          <Text color="#2892d2" fontSize="32px">TMS</Text>
        </Link>
        <Flex
          align="center"
          px={2}
          fontWeight="bold"
          color="grey"
          transition="0.25s"
          _hover={{ color: 'blue.500' }}
        >
          <Text color="#6C7284" fontSize="32px"> | </Text>
        </Flex>
        <Flex
            align="center"
            px={2}
            fontWeight="bold"
            color="grey"
            transition="0.25s"
            _hover={{ color: 'blue.500' }}
          >
            <Text color="#6C7284">Kargo Transport Management System</Text>
          </Flex>
      </Stack>
    </Flex>
    )
}

export default TopNavLog;