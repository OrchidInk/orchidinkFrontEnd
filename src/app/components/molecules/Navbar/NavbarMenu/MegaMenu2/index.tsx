"use client";
import { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Avatar,
  Card,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { H6 } from "@/components/atoms/typography";
import FlexRowCenter from "@/components/atoms/flex-box/FlexRowCenter";
import { useSettings } from "@/hooks/useSettings";

interface SubMenuItem {
  title: string;
  url: string;
  img?: string;
  Icon?: React.ElementType;
}

interface MenuItem {
  title: string;
  child: SubMenuItem[];
}

interface MegaMenu2Props {
  title: string;
  menuList: MenuItem[];
}


const MegaMenu2: React.FC<MegaMenu2Props> = ({ title, menuList }) => {
  const { settings } = useSettings();
  const [openList, setOpenList] = useState(menuList[0].title);


  const categories = menuList.map((item) => item.title);
  const subMenus = menuList.find((item) => item.title === openList);


  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Box position="relative">
      <FlexRowCenter alignItems="flex-end" gap={2}>
        {title}
        <ChevronDownIcon fontSize="1.1rem" color="gray.500" />
      </FlexRowCenter>

      <Box
        position="absolute"
        top="100%"
        left="50%"
        transform="translateX(-50%)"
        zIndex={10}
        className="menu-list"
        bg="white"
        shadow="md"
        borderRadius="md"
      >
        <Card>
          <Flex>
            <Box width="200px">
              {categories.map((item) => (
                <Flex
                  key={item}
                  align="center"
                  px={4}
                  py={2}
                  cursor="pointer"
                  bg={openList === item ? bgColor : "transparent"}
                  _hover={{ bg: bgColor }}
                  onMouseEnter={() => setOpenList(item)}
                >
                  <Text fontWeight={openList === item ? "bold" : "normal"}>
                    {item}
                  </Text>
                  <ChevronRightIcon
                    fontSize="16px"
                    transform={
                      settings.direction === "rtl" ? "rotate(180deg)" : "rotate(0)"
                    }
                  />
                </Flex>
              ))}
            </Box>

            {/* Scrollable SubMenu */}
            <Box overflowY="auto" maxHeight="300px" flex="1" px={6} py={4}>
              {subMenus?.child.map((item: SubMenuItem, key: number) => (
                <Box key={key} mb={6}>
                  <H6 fontWeight="bold" mb={2}>
                    {item.title}
                  </H6>
                  <Box>
                    <Flex align="center" mb={2} cursor="pointer">
                      {item.img && (
                        <Avatar
                          src={item.img}
                          size="sm"
                          bg="gray.100"
                          mr={3}
                          borderRadius="md"
                        />
                      )}
                      {item.Icon && (
                        <item.Icon fontSize={16} style={{ marginRight: "8px" }} />
                      )}
                      <Text>{item.title}</Text>
                    </Flex>
                  </Box>
                </Box>
              ))}
            </Box>
          </Flex>
        </Card>
      </Box>
    </Box>
  );
};

export default MegaMenu2;
