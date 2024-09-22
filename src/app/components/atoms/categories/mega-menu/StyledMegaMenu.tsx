import { Box, useTheme } from "@chakra-ui/react";
import { ReactNode } from "react";

// Define props interface for StyledMegaMenu
interface StyledMegaMenuProps {
  children: ReactNode;
}

const Wrapper = (props: { children: ReactNode }) => {
  const theme = useTheme();

  return (
    <Box
      display="none"
      position="absolute"
      left="100%"
      right="auto"
      top={0}
      zIndex={99}
      className="mega-menu"
      sx={{
        "& .title-link, & .child-link": {
          color: "inherit",
          fontWeight: 600,
          display: "block",
          padding: "0.5rem 0px",
        },
        "& .child-link": {
          fontWeight: 400,
        },
        "& .mega-menu-content": {
          padding: "0.5rem 0px",
          marginLeft: "1rem",
          borderRadius: 4,
          backgroundColor: theme.colors.white,
          boxShadow: theme.shadows.lg,
          transition: "all 250ms ease-in-out",
        },
      }}
    >
      {props.children}
    </Box>
  );
};

const StyledMegaMenu = ({ children }: StyledMegaMenuProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default StyledMegaMenu;
