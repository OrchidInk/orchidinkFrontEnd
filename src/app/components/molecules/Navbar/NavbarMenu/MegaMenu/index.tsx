import {
  Box,
  Grid,
  GridItem,
  List,
  ListItem,
  Text,
  Link,
  useTheme,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Card from "@/components/atoms/card";
import FlexRowCenter from "@/components/atoms/flex-box/FlexRowCenter";
import React from "react";

// TypeScript interfaces
interface SubItem {
  title: string;
  url: string;
}

interface CategoryItem {
  title: string;
  child: SubItem[];
}

interface MegaMenuProps {
  title: string;
  menuList: CategoryItem[][];
}

// Function to determine grid size
const gridSize = (length: number): number => {
  switch (length) {
    case 1:
      return 12;
    case 2:
      return 6;
    case 3:
      return 4;
    case 4:
      return 3;
    default:
      return 3;
  }
};

// MegaMenu Component
const MegaMenu: React.FC<MegaMenuProps> = ({ title, menuList }) => {
  const theme = useTheme();

  // Chakra UI color mode sensitive hover styles
  const hoverColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Box
      position="relative"
      cursor="pointer"
      transition="color 150ms ease-in-out"
      _hover={{
        color: theme.colors.primary,
        ".menu-list": {
          display: "block",
        },
      }}
    >
      <FlexRowCenter alignItems="flex-end" gap={1}>
        {title}
        <ChevronDownIcon // Updated to ChevronDownIcon from Chakra
          color="gray.500"
          fontSize="1.1rem"
        />
      </FlexRowCenter>

      <Box
        as="nav"
        position="absolute"
        top="100%"
        left="50%"
        transform="translateX(-50%)"
        zIndex={2}
        display="none"
        className="menu-list"
      >
        <Card
          boxShadow="md"
          mt={4}
          overflow="hidden"
          sx={{ minWidth: [800, 1000] }}
        >
          <Grid templateColumns={`repeat(${menuList.length}, 1fr)`} gap={4}>
            {menuList.slice(0, 4).map((category, key) => (
              <GridItem
                key={key}
                py={4}
                bg={key % 2 === 0 ? hoverColor : "transparent"} // Conditional styling for odd rows
              >
                {category.map((item) => (
                  <List key={item.title}>
                    <Text as="h6" mb={2} pl={4}>
                      {item.title}
                    </Text>

                    {item.child.map((sub) => (
                      <Link href={sub.url} key={sub.title}>
                        <ListItem
                          px={8}
                          py={2}
                          _hover={{ backgroundColor: hoverColor }}
                        >
                          {sub.title}
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                ))}
              </GridItem>
            ))}
          </Grid>
        </Card>
      </Box>
    </Box>
  );
};

export default MegaMenu;
