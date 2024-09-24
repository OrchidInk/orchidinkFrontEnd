'use client';

import React, { useState } from 'react';
import { 
  Box, Button, Input, FormControl, FormLabel, Heading, Text, Flex, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, useColorMode, useColorModeValue 
} from '@chakra-ui/react';
import { FaCog } from 'react-icons/fa';
import superAdminLogin from '@/@core/api/admins/superadmin/login/login';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  
  // For theme changing modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('black', 'white');

  const handleLogin = async () => {
    try {
      const data = await superAdminLogin(username, password);

      localStorage.setItem('token', data.token);

      router.push('/admin/home');
    } catch (error) {
      setError('Login failed, please check your credentials');
    }
  };

  const changeTheme = (theme: 'light' | 'dark') => {
    setColorMode(theme);
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg={bgColor}>
      <Box w="40%" p={10} boxShadow="md" borderRadius="md" bg={cardBgColor}>
        <Heading mb={6} color={textColor}>Admin Login</Heading>

        <FormControl mb={4}>
          <FormLabel color={textColor}>Нэвтрэх нэр</FormLabel>
          <Input
            type="text"
            placeholder="Нэвтрэх нэрээ оруулна уу"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel color={textColor}>Нэвтрэх</FormLabel>
          <Input
            type="password"
            placeholder="Нууц үгээ оруулна уу"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        {error && <Text color="red.500">{error}</Text>}

        <Button colorScheme="blue" width="full" onClick={handleLogin}>
          Нэвтрэх
        </Button>
      </Box>

      {/* Settings Icon for theme changer */}
      <IconButton 
        icon={<FaCog />} 
        position="fixed" 
        bottom="20px" 
        right="20px" 
        colorScheme="teal" 
        onClick={onOpen} 
        size="lg" 
        isRound 
        boxShadow="lg" 
        aria-label="Settings" 
      />

      {/* Settings Modal for theme change */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Theme тохиргоо</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap={2} mb={4}>
              <Button width="120px" height="40px" variant="outline" onClick={() => changeTheme('light')}>
                Light Mode
              </Button>
              <Button width="120px" height="40px" variant="outline" onClick={() => changeTheme('dark')}>
                Dark Mode
              </Button>
            </Flex>

            <Button colorScheme="blue" width="full" onClick={onClose}>
              Хадгалах
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default LoginPage;
