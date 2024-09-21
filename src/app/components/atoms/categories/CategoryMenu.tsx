"use client"
import { Box, chakra } from "@chakra-ui/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import CategoryMenuCard from "./CategoryMenuCard"; // Assuming this is your custom component

interface CategoryMenuProps {
  open?: boolean;
  categoryData: any[]; // Adjust type based on actual category data structure
  children: React.ReactElement;
}

// Styled component using Chakra UI's chakra() function
const Wrapper = chakra(Box);

const CategoryMenu: React.FC<CategoryMenuProps> = ({
  open: isOpen = false,
  categoryData,
  children,
}) => {
  const [open, setOpen] = useState(isOpen);
  const [varCategoryData, setVarCategoryData] = useState(categoryData);

  const popoverRef = useRef(open);
  popoverRef.current = open;

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen((prevOpen) => !prevOpen);
  };

  const handleDocumentClick = useCallback(() => {
    if (popoverRef.current && !isOpen) setOpen(false);
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => window.removeEventListener("click", handleDocumentClick);
  }, [handleDocumentClick]);

  useEffect(() => {
    setVarCategoryData(categoryData);
  }, [categoryData]);

  return (
    <Wrapper
      position="relative"
      cursor="pointer"
      sx={{
        "& .dropdown-icon": {
          transition: "all 250ms ease-in-out",
          transform: open ? "rotate(90deg)" : "rotate(0deg)",
        },
      }}
    >
      {React.cloneElement(children, {
        open,
        onClick: toggleMenu,
        className: `${children.props.className}`,
      })}

      {/* CategoryMenuCard should accept Chakra UI props or styles */}
      <CategoryMenuCard open={open} categoryData={varCategoryData} />
    </Wrapper>
  );
};

export default CategoryMenu;
