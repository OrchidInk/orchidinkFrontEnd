"use client"; // Add this to declare the component as a Client Component

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";
import clsx from "clsx";
import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, style, className, ...props }) => {
  // Get current pathname using usePathname
  const pathname = usePathname();

  // Check if the route matches the current pathname
  const checkRouteMatch = () => {
    if (href === "/") return pathname === href;
    return pathname?.includes(href); // Ensure pathname is not undefined
  };

  const currentRoute = checkRouteMatch();

  const activeColor = useColorModeValue("blue.500", "blue.300");
  const inactiveColor = useColorModeValue("inherit", "inherit");

  return (
    <ChakraLink
      as={Link}
      href={href}
      style={style}
      className={clsx(className)}
      color={currentRoute ? activeColor : inactiveColor}
      _hover={{
        color: activeColor,
      }}
      transition="color 150ms ease-in-out"
      {...props}
    >
      {children}
    </ChakraLink>
  );
};

export default NavLink;
