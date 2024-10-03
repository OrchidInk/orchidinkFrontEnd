'use client'
import { Box, Flex, Text, IconButton, Badge, Menu, MenuButton, MenuItem, MenuList, Button, MenuDivider, Input, Select, Divider } from '@chakra-ui/react';
import { FiSearch, FiUser, FiShoppingCart, FiHeart, FiGlobe, FiChevronDown } from 'react-icons/fi';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MenuBar from './MenuBar';
import { FiGift } from 'react-icons/fi'; // Import any icon you want to use

const menuItems = [
  { label: 'BESTSELLERS', icon: FiGift },
  { label: 'PROBLEM SOLVERS', icon: FiGift },
  { label: 'SKIN', icon: FiGift },
  { label: 'HAIR', icon: FiGift },
  { label: 'BODY', icon: FiGift },
  { label: 'SUN', icon: FiGift },
  { label: 'MAKE-UP', icon: FiGift },
  { label: 'WELLBEING', icon: FiGift },
  { label: 'BABY & CHILD', icon: FiGift },
  { label: 'MEN', icon: FiGift },
  { label: 'OFFERS', icon: FiGift, isHighlighted: true },
];

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

  const changeLanguage = (newLocale: string) => {
    // router.push(router.pathname, router.asPath, { locale: newLocale });
  };

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
        pt={4}
      >
        {/* Left side - Logo and Menus */}
        <Flex align="center">
          {/* Logo */}
          <SearchBar />
        </Flex>
        <Flex align="center">
          {/* Logo */}
          <Box mr={6}>
            <Text fontSize="2xl" fontWeight="bold" color="gray.800">Orchid</Text>
          </Box>
        </Flex>

        {/* Right side - Icons */}
        <Flex align="center">
          <Flex align="center" gap={4}>
            {/* Language Switcher */}
            <Menu>
              <MenuButton as={IconButton} aria-label="Change language" icon={<FiGlobe />} variant="ghost" color="gray.600" _hover={{ color: 'gray.800' }} />
              <MenuList>
                <MenuItem onClick={() => changeLanguage('en')}>en</MenuItem>
                <MenuItem onClick={() => changeLanguage('mn')}>mn</MenuItem>
              </MenuList>
            </Menu>
            <IconButton
              aria-label="User Account"
              icon={<FiUser />}
              variant="ghost"
              color="gray.600"
              _hover={{ color: 'gray.800' }}
            />
            <IconButton
              aria-label="Product liked"
              icon={<FiHeart />}
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
      <Divider orientation="horizontal" borderColor="gray.300" my={2} w="80%" mx="auto" />
      <MenuBar items={menuItems} />
      <Divider orientation="horizontal" borderColor="gray.300" my={2} mx="auto" />
    </Box>
  );
};

export default Header;
