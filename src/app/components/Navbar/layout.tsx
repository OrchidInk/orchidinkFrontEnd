import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

interface NavbarLayoutProps {
  children: ReactNode;
}

const NavbarLayout: React.FC<NavbarLayoutProps> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Header at the top */}
      <Header />

      {/* Main content in the middle */}
      <Box as="main" flex="1" maxW="container.xl" mx="auto" my={8} px={4}>
        {children}
      </Box>

      {/* Footer at the bottom */}
      <Footer />
    </Box>
  );
};

export default NavbarLayout;