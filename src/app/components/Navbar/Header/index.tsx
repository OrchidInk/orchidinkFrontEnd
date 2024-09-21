'use client'
import { Box, Flex,  Text, Input, Select, IconButton, Badge } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const Header = () => {
  const t = useTranslations('Index');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      as="header"
      bg="white"
      color="gray.800"
      position="sticky"
      top="0"
      zIndex="1000"
      boxShadow={isScrolled ? '0 8px 12px rgba(0, 0, 0, 0.1)' : 'none'}
      backdropFilter="blur(10px)"
      transition="box-shadow 0.3s ease"
    >
      {/* Main navigation */}
      <Flex
        justify="space-between"
        align="center"
        maxW="container.xl"
        mx="auto"
        px={4}
        py={4}
      >
        {/* Left side - Logo and Categories */}
        <Flex align="center">
          {/* Logo */}
          <Box mr={6}>
            <Text fontSize="2xl" fontWeight="bold" color="gray.800">orchid</Text>
          </Box>
        </Flex>

        {/* Center - Search bar */}
        <Flex flex="1" maxW="500px" mx={4} bg="gray.50" borderRadius="md" align="center">
          <IconButton
            aria-label="Search"
            icon={<FiSearch />}
            bg="transparent"
            _hover={{ bg: "transparent" }}
            color="gray.500"
          />
          <Input
            placeholder={t('Search')}
            variant="unstyled"
            px={2}
            color="gray.800"
          />
          <Select variant="unstyled" maxW="150px" placeholder="All Categories" textColor="gray.600">
            <option value="option1">Electronics</option>
            <option value="option2">Fashion</option>
            <option value="option3">Home Appliances</option>
          </Select>
        </Flex>

        {/* Right side - Navigation and Icons */}
        <Flex align="center">
          {/* User and Cart Icons */}
          <Flex align="center" gap={4}>
            <IconButton
              aria-label="User Account"
              icon={<FiUser />}
              variant="ghost"
              color="gray.600"
              _hover={{ color: 'gray.800' }}
            />
            <Box position="relative">
              <IconButton
                aria-label="Shopping Cart"
                icon={<FiShoppingCart />}
                variant="ghost"
                color="gray.600"
                _hover={{ color: 'gray.800' }}
              />
              <Badge
                position="absolute"
                top="-1"
                right="-1"
                bg="red.500"
                color="white"
                borderRadius="full"
                px={2}
                fontSize="xs"
              >
                3
              </Badge>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
