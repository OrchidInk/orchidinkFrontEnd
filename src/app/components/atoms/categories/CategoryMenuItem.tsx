import Link from "next/link";
import { Box, MenuItem as ChakraMenuItem } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { ReactNode } from "react";
import { useSettings } from "@/hooks/useSettings"; // Adjust the import path as needed

interface CategoryMenuItemProps {
  href: string;
  title: string;
  caret?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
}

const CategoryMenuItem = ({ href, title, caret = true, icon, children }: CategoryMenuItemProps) => {
  const { settings } = useSettings();

  return (
    <Box
      _hover={{
        ".category-dropdown-link": {
          color: "primary.500",
          bg: "gray.100",
        },
        ".mega-menu": {
          display: "block",
        },
      }}
    >
      <Link href={href}>
        <ChakraMenuItem className="category-dropdown-link" display="flex" alignItems="center" px="4" py="2" minW="278px" cursor="pointer" transition="all 250ms ease-in-out">
          {icon && <Box fontSize="small" color="inherit">{icon}</Box>}
          <Box className="title" flex="1" pl="3">
            {title}
          </Box>
          {caret && (
            settings.direction === "ltr" ? (
              <ChevronRightIcon fontSize="small" />
            ) : (
              <ChevronLeftIcon fontSize="small" />
            )
          )}
        </ChakraMenuItem>
      </Link>

      {children}
    </Box>
  );
};

export default CategoryMenuItem;
