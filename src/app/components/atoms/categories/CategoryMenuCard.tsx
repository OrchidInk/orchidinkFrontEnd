import { Box, chakra } from "@chakra-ui/react";
import CategoryMenuItem from "@/components/atoms/categories/CategoryMenuItem";
import MegaMenu1 from "@/components/atoms/categories/mega-menu/MegaMenu1";
import MegaMenu2 from "@/components/atoms/categories/mega-menu/MegaMenu2";

// Define the shape of subcategories and categories
interface SubCategory {
  id: number;
  name: string;
  href: string;
  icon?: React.ReactNode;
  child?: SubCategory[]; // Recursive type for subcategories
}

interface Category {
  id: number;
  name: string;
  href: string;
  icon?: React.ReactNode;
  child?: SubCategory[]; // Child categories are subcategories
}

interface CategoryMenuCardProps {
  open: boolean;
  position?: "absolute" | "relative" | "unset";
  categoryData: Category[]; // Use the Category type here
}

// Styled component using Chakra UI's chakra() function
const Wrapper = chakra(Box);

const CategoryMenuCard: React.FC<CategoryMenuCardProps> = ({
  open,
  position = "absolute",
  categoryData,
}) => {
  const megaMenu = {
    MegaMenu1,
    MegaMenu2,
  };

  return (
    <Wrapper
      id="big_category_content"
      sx={{
        left: 0,
        zIndex: 98,
        right: "auto",
        borderRadius: "4px",
        padding: "0.5rem 0px",
        transformOrigin: "top",
        boxShadow: "md",
        position: position || "unset",
        transition: "all 250ms ease-in-out",
        transform: open ? "scaleY(1)" : "scaleY(0)",
        backgroundColor: "white",
        top: position === "absolute" ? "calc(100% + 0.7rem)" : "0.5rem",
      }}
    >
      {categoryData?.map((item) => {
        // Determine the MegaMenu to use based on presence of child categories
        const MegaMenu = item.child ? megaMenu["MegaMenu2"] : megaMenu["MegaMenu1"];

        // Map the category data to the expected structure for MegaMenu
        const mappedData = {
          id: item.id, // Keep the top-level properties
          name: item.name,
          href: item.href,
          icon: item.icon, // Optional icon
          categories: item.child?.map(subItem => ({
            href: subItem.href,
            title: subItem.name,
            subCategories: subItem.child?.map(subSubItem => ({
              href: subSubItem.href,
              title: subSubItem.name,
            })) || [],
          })) || [],
          // Optionally include rightImage and bottomImage (if applicable)
          rightImage: undefined, // Replace with actual logic if needed
          bottomImage: undefined, // Replace with actual logic if needed
        };

        return (
          <CategoryMenuItem
            key={item.id}
            href={item.href}
            title={item.name}
            caret={!!item.child}
          >
            <MegaMenu data={[mappedData]} /> {/* Pass an array with the mapped data */}
          </CategoryMenuItem>
        );
      })}
    </Wrapper>
  );
};

export default CategoryMenuCard;
