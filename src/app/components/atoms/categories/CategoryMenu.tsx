"use client";
import { Box, chakra } from "@chakra-ui/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import CategoryMenuCard from "./CategoryMenuCard";

interface Category {
  id: number;
  name: string;
  href: string;
}

interface CategoryMenuProps {
  open?: boolean;
  categoryData: Category[];
  children: React.ReactElement;
}

const Wrapper = chakra(Box);

const CategoryMenu: React.FC<CategoryMenuProps> = ({
  open: isOpen = false,
  categoryData,
  children,
}) => {
  const [open, setOpen] = useState(isOpen);
  const [varCategoryData, setVarCategoryData] = useState<Category[]>(categoryData);

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

  const transformedCategoryData = varCategoryData.map((category) => ({
    ...category,
    href: category.href || `/categories/${category.id}`,
  }));

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

      <CategoryMenuCard open={open} categoryData={transformedCategoryData} />
    </Wrapper>
  );
};

export default CategoryMenu;
