import { useEffect, ReactNode } from "react";
import StyledMegaMenu from "./StyledMegaMenu";
import { Box } from "@chakra-ui/react";
import CategoryMenuItem from "../CategoryMenuItem";

interface CategoryChild {
  id: number;
  name: string;
  href: string;
  icon?: ReactNode;
  child?: CategoryChild[];
}

interface MegaMenu2Props {
  data: CategoryChild[];
}

const MegaMenu2 = ({ data }: MegaMenu2Props) => {
  useEffect(() => {
    const bigCategoryContentHeight = document.getElementById('big_category_content')?.offsetHeight;

    const categorySubMenuTags = document.querySelectorAll<HTMLDivElement>('#mini_category_menu > #categorySubMenu');
    if (bigCategoryContentHeight) {
      for (let i = 0; i < categorySubMenuTags.length; i++) {
        categorySubMenuTags[i].setAttribute("style", `height: ${bigCategoryContentHeight}px; overflow: auto`);
      }
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
              caret={!!item.child?.length} // Checks if the item has children
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
                    {item.child.map((childItem) => (
                      <CategoryMenuItem
                        href={childItem.href}
                        icon={childItem.icon}
                        key={childItem.id}
                        title={childItem.name}
                        caret={!!childItem.child?.length} // Recursive check for child elements
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
