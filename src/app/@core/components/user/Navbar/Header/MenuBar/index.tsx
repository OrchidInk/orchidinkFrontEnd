import { Box, Flex, Text, Icon } from '@chakra-ui/react';

interface MenuItem {
  label: string;
  icon?: any;
  isHighlighted?: boolean;
}

interface MenuBarProps {
  items: MenuItem[];
}

const MenuBar: React.FC<MenuBarProps> = ({ items }) => {
  return (
    <Box as="nav" bg="white">
      <Flex
        justify={{ base: 'flex-start', md: 'center' }}
        gap={{ base: 4, md: 8 }}
        maxW="container.xl"
        mx="auto"
        flexDirection={{ base: 'row', md: 'row' }}
        overflowX={{ base: 'scroll', md: 'initial' }}
        px={4}
        py={2}
      >
        {items.map((item, index) => (
          <Flex
            key={index}
            flexDirection="column"
            alignItems="center"
            minW={{ base: '80px', md: 'auto' }}
            cursor="pointer"
          >
            {item.icon && (
              <Icon
                as={item.icon}
                boxSize={{ base: '30px', md: '40px' }}
                color={item.isHighlighted ? 'red.500' : 'gray.800'}
                display={{ base: 'block', lg: 'none' }}
              />
            )}
            <Text
              fontWeight="bold"
              fontSize={{ base: 'xs', md: 'md' }}
              color={item.isHighlighted ? 'red.500' : 'gray.800'}
              _hover={{
                color: item.isHighlighted ? 'red.700' : 'gray.600',
              }}
            >
              {item.label}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default MenuBar;
