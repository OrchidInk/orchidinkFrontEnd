import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./bar";
import Header from "./header";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex minH="100vh">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box flex="1" bg="gray.50">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <Box p={6}>
          {children}
        </Box>
      </Box>
    </Flex>
  );
}
