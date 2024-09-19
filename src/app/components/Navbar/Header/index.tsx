import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as="header" bg="blue.500" color="white" py={4}>
      <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
        <Text fontSize="xl" fontWeight="bold">Logo</Text>
        <Flex gap={4}>
          <Link href="/" _hover={{ textDecoration: 'none', color: 'gray.300' }}>Home</Link>
          <Link href="/about" _hover={{ textDecoration: 'none', color: 'gray.300' }}>About</Link>
          <Link href="/contact" _hover={{ textDecoration: 'none', color: 'gray.300' }}>Contact</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
