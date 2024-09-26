'use client';

import {
  Box,
  Flex,
  Button,
  VStack,
  Text,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  IconButton,
  Divider,
} from '@chakra-ui/react';
import {
  FaHome,
  FaLayerGroup,
  FaClipboard,
  FaUser,
  FaTools,
  FaList,
  FaPlus,
  FaCog,
} from 'react-icons/fa';

// Custom Scrollbar Style for Smooth Scrolling
const scrollbarStyles = {
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'teal.500',
    borderRadius: '8px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'gray.800',
  },
};

const Sidebar = () => {
  return (
    <Flex
      as="nav"
      direction="column"
      bg="gray.900"
      color="white"
      w="260px"
      minH="100vh"
      p={4}
      borderRight="1px solid"
      borderColor="gray.700"
      overflowY="auto"
      css={scrollbarStyles} // Apply custom scrollbar
    >
      {/* Sidebar Header */}
      <Box mb={6}>
        <Text fontSize="2xl" fontWeight="bold" color="teal.400">
          Orchid Admin
        </Text>
      </Box>

      {/* Project Select & Add Button */}
      <Flex justify="space-between" mb={6}>
        <Button
          size="sm"
          bg="gray.700"
          leftIcon={<FaList />}
          _hover={{ bg: 'gray.600' }}
          color="whiteAlpha.900"
        >
          Select Project
        </Button>
        <IconButton
          aria-label="Add Project"
          icon={<FaPlus />}
          size="sm"
          bg="teal.400"
          _hover={{ bg: 'teal.500' }}
          color="white"
        />
      </Flex>

      {/* MAIN Section Title */}
      <Text fontSize="sm" color="gray.400" mb={4}>
        MAIN
      </Text>

      {/* Sidebar Navigation */}
      <VStack align="start" spacing={3}>
        <Accordion allowToggle w="full" defaultIndex={[0]}>
          <AccordionItem border="none">
            <AccordionButton
              _hover={{ bg: 'gray.700' }}
              _expanded={{ bg: 'teal.600', color: 'white' }} // Clicked/expanded item
            >
              <Box flex="1" textAlign="left" display="flex" alignItems="center">
                <Icon as={FaHome} mr={2} />
                My Dashboard
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pl={8} pb={4}>
              <Text cursor="pointer" _hover={{ color: 'teal.400' }}>
                Analysis
              </Text>
              <Text cursor="pointer" _hover={{ color: 'teal.400' }}>
                My Wallet
              </Text>
              <Text cursor="pointer" _hover={{ color: 'teal.400' }}>
                IoT
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border="none">
            <AccordionButton
              _hover={{ bg: 'gray.700' }}
              _expanded={{ bg: 'teal.600', color: 'white' }}
            >
              <Box flex="1" textAlign="left" display="flex" alignItems="center">
                <Icon as={FaLayerGroup} mr={2} />
                Unique Dashboard
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pl={8} pb={4}>
              <Text cursor="pointer" _hover={{ color: 'teal.400' }}>
                CRM Management
              </Text>
              <Text cursor="pointer" _hover={{ color: 'teal.400' }}>
                eCommerce
              </Text>
              <Text cursor="pointer" _hover={{ color: 'teal.400' }}>
                Fitness Analytics
              </Text>
              <Text cursor="pointer" _hover={{ color: 'teal.400' }}>
                HR & Project
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* More Sections Here */}
        </Accordion>

        {/* Applications Section */}
        <Accordion allowToggle w="full">
          <AccordionItem border="none">
            <AccordionButton
              _hover={{ bg: 'gray.700' }}
              _expanded={{ bg: 'teal.600', color: 'white' }}
            >
              <Box flex="1" textAlign="left" display="flex" alignItems="center">
                <Icon as={FaClipboard} mr={2} />
                Applications
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pl={8} pb={4}>
              <Text cursor="pointer" _hover={{ color: 'teal.400' }}>
                Calendar
              </Text>
              <Text cursor="pointer" _hover={{ color: 'teal.400' }}>
                Todo App
              </Text>
              <Text cursor="pointer" _hover={{ color: 'teal.400' }}>
                Contacts
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        {/* Account Section */}
        <Accordion allowToggle w="full">
          <AccordionItem border="none">
            <AccordionButton
              _hover={{ bg: 'gray.700' }}
              _expanded={{ bg: 'teal.600', color: 'white' }}
            >
              <Box flex="1" textAlign="left" display="flex" alignItems="center">
                <Icon as={FaUser} mr={2} />
                Account
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pl={8} pb={4}>
              <Text cursor="pointer" _hover={{ color: 'teal.400' }}>
                Profile
              </Text>
              <Text cursor="pointer" _hover={{ color: 'teal.400' }}>
                Settings
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        {/* Authentication Section */}
        <Accordion allowToggle w="full">
          <AccordionItem border="none">
            <AccordionButton
              _hover={{ bg: 'gray.700' }}
              _expanded={{ bg: 'teal.600', color: 'white' }}
            >
              <Box flex="1" textAlign="left" display="flex" alignItems="center">
                <Icon as={FaTools} mr={2} />
                Authentication
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pl={8} pb={4}>
              <Text cursor="pointer" _hover={{ color: 'teal.400' }}>
                Login
              </Text>
              <Text cursor="pointer" _hover={{ color: 'teal.400' }}>
                Register
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>

      {/* Divider between sections */}
      <Divider mt={8} mb={4} borderColor="gray.700" />

      {/* Resources Section Title */}
      <Text fontSize="sm" color="gray.400" mb={4}>
        RESOURCES
      </Text>

      <VStack align="start" spacing={3}>
        <Text cursor="pointer" _hover={{ color: 'teal.400' }}>
          Layouts
        </Text>
        <Text cursor="pointer" _hover={{ color: 'teal.400' }}>
          Modals Popups
        </Text>
        <Text cursor="pointer" _hover={{ color: 'teal.400' }}>
          Widgets
        </Text>
        <Text cursor="pointer" _hover={{ color: 'teal.400' }}>
          Documentation
        </Text>
        <Text cursor="pointer" _hover={{ color: 'teal.400' }}>
          Changelog{' '}
          <Box as="span" ml={2} bg="teal.400" px={2} py={1} fontSize="xs" borderRadius="md" color="white">
            v1.2.6
          </Box>
        </Text>
      </VStack>

      {/* Footer Icons */}
      <Flex justifyContent="space-between" mt="auto" pt={4}>
        <IconButton aria-label="Settings" icon={<FaCog />} bg="gray.700" _hover={{ bg: 'gray.600' }} />
        <IconButton aria-label="Logout" icon={<FaPlus />} bg="gray.700" _hover={{ bg: 'gray.600' }} />
      </Flex>
    </Flex>
  );
};

export default Sidebar;