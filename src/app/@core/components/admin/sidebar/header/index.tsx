'use client'
import {  Flex, Input, IconButton, Avatar, Text, HStack } from "@chakra-ui/react";
import { FaSearch, FaBell, FaCog, FaMoon, FaSun } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      px={6}
      py={4}
      bg="gray.800"
      color="white"
      boxShadow="md"
    >
      {/* Left Side - Search Input */}
      <HStack spacing={4}>
        <Text fontSize="lg" fontWeight="bold">Orchid</Text>
        <Input
          placeholder="Enter your search key word"
          size="sm"
          borderRadius="md"
          bg="gray.700"
          color="white"
          _placeholder={{ color: "gray.400" }}
        />
        <IconButton aria-label="Search" icon={<FaSearch />} size="sm" />
      </HStack>

      {/* Right Side - Icons */}
      <HStack spacing={4}>
        <IconButton aria-label="Toggle Dark Mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
        <IconButton aria-label="Notifications" icon={<FaBell />} />
        <IconButton aria-label="Settings" icon={<FaCog />} />
        <Avatar name="Chris" />
      </HStack>
    </Flex>
  );
};

export default Header;
