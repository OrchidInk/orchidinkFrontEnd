import { useEffect, ReactNode } from "react";
import StyledMegaMenu from "./StyledMegaMenu";
import { Box, Flex } from "@chakra-ui/react";
import CategoryMenuItem from "../CategoryMenuItem";

interface MegaMenu2Props {
  data: {
    id: number;
    name: string;
    href: string;
    icon?: ReactNode;
    child?: {
      id: number;
      name: string;
      href: string;
      icon?: ReactNode;
      child?: any[];
    }[];
  }[];
}

const MegaMenu2 = ({ data }: MegaMenu2Props) => {
  useEffect(() => {
    const bigCategoryContentHeight = document.getElementById('big_category_content')?.offsetHeight;

    const categorySubMenuTags = document.querySelectorAll('#mini_category_menu > #categorySubMenu');
    for (let i = 0; i < categorySubMenuTags.length; i++) {
      categorySubMenuTags[i].setAttribute("style", `height: ${bigCategoryContentHeight}px; overflow: auto`);
    }
  }, []);

  return (
    <StyledMegaMenu>
      <div id="mini_category_menu">
        <Box
          bg="white"
          boxShadow="md"
          ml="1rem"
          py="0.5rem"
          borderRadius="md"
        >
          {data?.map((item) => (
            <CategoryMenuItem
              href={item.href}
              icon={item.icon}
              key={item.id}
              title={item.name}
              caret={item.child && item.child.length > 0}
            >
              {item.child && (
                <StyledMegaMenu>
                  <Box
                    bg="white"
                    boxShadow="md"
                    ml="1rem"
                    py="0.5rem"
                    borderRadius="md"
                  >
                    {item.child?.map((childItem) => (
                      <CategoryMenuItem
                        href={childItem.href}
                        icon={childItem.icon}
                        key={childItem.id}
                        title={childItem.name}
                        caret={childItem.child && childItem.child.length > 0}
                      />
                    ))}
                  </Box>
                </StyledMegaMenu>
              )}
            </CategoryMenuItem>
          ))}
        </Box>
      </div>
    </StyledMegaMenu>
  );
};

export default MegaMenu2;
