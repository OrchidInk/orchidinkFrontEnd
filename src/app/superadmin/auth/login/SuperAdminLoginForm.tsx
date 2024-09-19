"use client";
import { Box, Flex, Heading, FormControl, FormLabel, Input, Button, Text, Link, Image, Switch, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const SuperAdminLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <Flex minH="100vh">
      {/* Left Side (Form Section) */}
      <Flex 
        flex={1}
        align="center" 
        justify="center" 
        p={10}
        bg="white"
      >
        <Box w="full" maxW="md">
          <Heading mb={4} fontSize="3xl" fontWeight="bold" color="blue.500">
           Super Admin Нэвтрэх хэсэг 
          </Heading>
         

          <FormControl id="email" mb={4}>
            <FormLabel>И-Мэйл</FormLabel>
            <Input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="И-Мэйл" 
              size="lg" 
              focusBorderColor="blue.400" 
              required 
            />
          </FormControl>

          <FormControl id="password" mb={4}>
            <FormLabel>Нууц үг</FormLabel>
            <Input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Нууц үг" 
              size="lg" 
              focusBorderColor="blue.400" 
              required 
            />
          </FormControl>

          <HStack justify="space-between" align="center" mb={6}>
            <HStack align="center">
              <Switch 
                isChecked={rememberMe} 
                onChange={() => setRememberMe(!rememberMe)} 
                id="remember-me" 
              />
              <FormLabel htmlFor="remember-me" mb="0" fontSize="sm">
                Намайг сана
              </FormLabel>
            </HStack>
            <Link color="blue.500" href="#">Нууц үгээ мартсан уу?</Link>
          </HStack>

          <Button 
            w="full" 
            colorScheme="blue" 
            size="lg" 
            onClick={handleLogin}
            bgGradient="linear(to-r, blue.400, blue.600)"
          >
            НЭВТРЭХ
          </Button>

          <Text mt={6} textAlign="center">
            Бүртгэл байхгүй юу?{" "}
            <Link color="blue.500" href="#">Бүртгүүлэх</Link>
          </Text>
        </Box>
      </Flex>

      {/* Right Side (Image Section) */}
      <Box 
        flex={1}
        bgGradient="linear(to-r, blue.600, pink.500)"
        display={{ base: 'none', md: 'block' }}
        position="relative"
      >
        <Image 
          src="\background\superadmin\login.jpg" 
          alt="Login background" 
          objectFit="cover"
          w="full"
          h="100vh"
        />
      </Box>
    </Flex>
  );
};

export default SuperAdminLoginForm;
