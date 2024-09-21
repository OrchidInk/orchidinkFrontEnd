import { Box, chakra } from "@chakra-ui/react";
import CategoryMenuItem from "@/components/atoms/categories/CategoryMenuItem";
import MegaMenu1 from "@/components/atoms/categories/mega-menu/MegaMenu1";
import MegaMenu2 from "@/components/atoms/categories/mega-menu/MegaMenu2";

interface CategoryMenuCardProps {
  open: boolean;
  position?: "absolute" | "relative" | "unset";
  categoryData: Array<{
    id: string | number;
    name: string;
    href: string;
    child?: any[];
  }>;
}

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
        const MegaMenu = item.child ? megaMenu["MegaMenu2"] : megaMenu["MegaMenu1"];
        return (
          <CategoryMenuItem
            key={item.id}
            href={item.href}
            title={item.name}
            caret={!!item.child}
          >
            <MegaMenu data={item.child || []} />
          </CategoryMenuItem>
        );
      })}
    </Wrapper>
  );
};

export default CategoryMenuCard;
