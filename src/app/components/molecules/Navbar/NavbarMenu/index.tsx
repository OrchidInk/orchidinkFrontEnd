// "use client";
// import {
//   Box,
//   Button,
//   MenuItem,
//   BoxProps,
// } from "@chakra-ui/react";
// import {
//   ChevronDownIcon,
//   ChevronRightIcon,
//   ArrowForwardIcon,
//   ArrowBackIcon,
// } from "@chakra-ui/icons";
// import NavLink from "@/components/atoms/nav-link";
// import FlexBox from "@/components/atoms/flex-box/FlexBox";
// import Card from "@/components/atoms/card";
// import Category from "@/components/icons/Category";
// import { Paragraph } from "@/components/atoms/typography";
// import CategoryMenu from "@/components/atoms/categories/CategoryMenu";
// import MegaMenu from "./MegaMenu";
// import MegaMenu2 from "./MegaMenu2";
// import { useSettings } from "@/hooks/useSettings";
// import { useTranslations } from 'next-intl';

// // Define the structure of navigation items
// interface NavigationItem {
//   title: string;
//   megaMenu: boolean;
//   megaMenuWithSub: boolean;
//   url?: string;
//   child?: NavigationItem[]; // Recursive type for nested children
// }

// // Define expected CategoryItem and MenuItem types for MegaMenu and MegaMenu2
// interface CategoryItem {
//   title: string;
//   url?: string;
//   child?: CategoryItem[];
// }

// interface MenuItem {
//   title: string;
//   url?: string;
// }

// interface Category {
//   id: number; // Added an ID as per Category type
//   name: string;
//   url?: string;
//   icon?: React.ReactNode;
//   child?: Category[];
// }

// interface NavbarMenuProps {
//   navListOpen?: boolean;
//   hideCategories?: boolean;
//   elevation?: number;
//   border?: boolean;
//   categoryData?: NavigationItem[]; // Update categoryData type
// }

// const navLinkStyle = {
//   cursor: "pointer",
//   transition: "color 150ms ease-in-out",
//   _hover: {
//     color: "blue.500",
//   },
//   "&:lastChild": {
//     marginRight: 0,
//   },
// };

// const StyledNavLink = (props: React.ComponentProps<typeof NavLink>) => (
//   <NavLink style={navLinkStyle} {...props} />
// );

// const ParentNav = ({ children }: { children: React.ReactNode }) => (
//   <Box
//     _hover={{
//       color: "blue.500",
//       "& > .parent-nav-item": {
//         display: "block",
//       },
//     }}
//   >
//     {children}
//   </Box>
// );

// const ParentNavItem = ({ children }: { children: React.ReactNode }) => (
//   <Box
//     position="absolute"
//     top={0}
//     left="100%"
//     zIndex={5}
//     pl={2}
//     display="none"
//     className="parent-nav-item"
//     _dark={{ color: "blue.500" }}
//   >
//     {children}
//   </Box>
// );

// const NavBarMenuWrapper = ({
//   children,
// }: {
//   children: React.ReactNode;
//   border: boolean;
// }) => (
//   <div className="w-full flex justify-between ">
//     {children}
//   </div>
// );

// const InnerContainer = ({ children, ...props }: BoxProps & { children: React.ReactNode }) => (
//   <Box
//     height="100%"
//     display="flex"
//     alignItems="center"
//     justifyContent="space-between"
//     width="100%"
//     px="10%"
//     pt="10px"
//     {...props}
//   >
//     {children}
//   </Box>
// );

// const CategoryMenuButton = () => {
//   const t = useTranslations('Index');

//   return (
//     <Button
//       width="278px"
//       height="40px"
//       bg="gray.100"
//       display="flex"
//       justifyContent="space-between"
//       alignItems="center"
//     >
//       <Category fontSize="small" />
//       <Paragraph fontWeight="600" ml={4} color="gray.600">
//         {t('Categories')}
//       </Paragraph>
//       <ChevronRightIcon />
//     </Button>
//   );
// };

// const ChildNavsWrapper = ({ children }: { children: React.ReactNode }) => (
//   <Box
//     zIndex={5}
//     left="50%"
//     top="100%"
//     display="none"
//     position="absolute"
//     transform="translate(-50%, 0%)"
//     className="child-nav-item"
//   >
//     {children}
//   </Box>
// );

// // Transform NavigationItem[] into the expected CategoryItem[][] for MegaMenu
// const transformToCategoryItems = (navigationItems: NavigationItem[]): CategoryItem[][] => {
//   return navigationItems.map(item => {
//     return item.child?.map(subItem => ({
//       title: subItem.title,
//       url: subItem.url,
//       child: subItem.child || []
//     })) || [];
//   });
// };

// // Transform NavigationItem[] into MenuItem[] for MegaMenu2
// const transformToMenuItems = (navigationItems: NavigationItem[]): MenuItem[] => {
//   return navigationItems.map(item => ({
//     title: item.title,
//     url: item.url,
//   }));
// };

// // Transform NavigationItem[] into Category[] for CategoryMenu
// const transformToCategories = (navigationItems: NavigationItem[]): Category[] => {
//   return navigationItems.map((item, index) => ({
//     id: index + 1,  // Provide unique IDs
//     name: item.title,
//     url: item.url || '',
//     icon: undefined,  // or map to an appropriate icon if available
//     child: transformToCategories(item.child || []), // Recursive transformation for children
//   }));
// };

// const NavbarMenu: React.FC<NavbarMenuProps> = ({
//   navListOpen = false,
//   hideCategories = false,
//   border = true,
//   categoryData,
// }) => {
//   const { settings } = useSettings();
//   const t = useTranslations('Index');

//   // Render nested navigation items
//   const renderNestedNav = (list: NavigationItem[] = [], isRoot = false) => {
//     return list.map((nav) => {
//       if (isRoot) {
//         if (nav.megaMenu) {
//           const transformedMenuList = transformToCategoryItems(nav.child || []);
//           return (
//             <MegaMenu key={nav.title} title={nav.title} menuList={transformedMenuList} />
//           );
//         }
//         if (nav.megaMenuWithSub) {
//           const transformedMenuList = transformToMenuItems(nav.child || []);
//           return (
//             <MegaMenu2 key={nav.title} title={nav.title} menuList={transformedMenuList} />
//           );
//         }
//         if (nav.url) {
//           return <StyledNavLink key={nav.title} href={nav.url}>{nav.title}</StyledNavLink>;
//         }
//         if (nav.child) {
//           return (
//             <FlexBox
//               key={nav.title}
//               alignItems="center"
//               position="relative"
//               flexDirection="column"
//               _hover={{ "& > .child-nav-item": { display: "block" } }}
//             >
//               <FlexBox alignItems="flex-end" gap={1} sx={navLinkStyle}>
//                 {nav.title}
//                 <ChevronDownIcon color="gray.500" />
//               </FlexBox>
//               <ChildNavsWrapper>
//                 <Card mt={2.5} py={1} minWidth="200px">
//                   {renderNestedNav(nav.child)}
//                 </Card>
//               </ChildNavsWrapper>
//             </FlexBox>
//           );
//         }
//       } else {
//         if (nav.url) {
//           return (
//             <NavLink href={nav.url} key={nav.title}>
//               <MenuItem>{nav.title}</MenuItem>
//             </NavLink>
//           );
//         }
//         if (nav.child) {
//           return (
//             <ParentNav key={nav.title}>
//               <MenuItem>
//                 <Box as="span">{nav.title}</Box>
//                 {settings.direction === "ltr" ? (
//                   <ArrowForwardIcon />
//                 ) : (
//                   <ArrowBackIcon />
//                 )}
//               </MenuItem>
//               <ParentNavItem>
//                 <Card py="0.5rem" minWidth="230px">
//                   {renderNestedNav(nav.child)}
//                 </Card>
//               </ParentNavItem>
//             </ParentNav>
//           );
//         }
//       }
//     });
//   };

//   const navbarMenuNavigations: NavigationItem[] = [
//     {
//       title: t('Home'),
//       megaMenu: false,
//       megaMenuWithSub: false,
//       url: "/en",
//       child: []
//     },
//     {
//       title: t('DiscountProducts'),
//       megaMenu: false,
//       megaMenuWithSub: false,
//       url: "/product/search/items?discount=true",
//       child: []
//     },
//     {
//       title: t('NewProducts'),
//       megaMenu: false,
//       megaMenuWithSub: false,
//       url: "/product/search/items?new=true",
//       child: []
//     }
//   ];

//   return (
//     <NavBarMenuWrapper border={border}>
//       {!hideCategories ? (
//         <InnerContainer>
//           <CategoryMenu open={navListOpen} categoryData={transformToCategories(categoryData || [])}>
//             <CategoryMenuButton />
//           </CategoryMenu>
//           <FlexBox gap={4}>{renderNestedNav(navbarMenuNavigations, true)}</FlexBox>
//         </InnerContainer>
//       ) : (
//         <InnerContainer justifyContent="center">
//           <FlexBox gap={4}>{renderNestedNav(navbarMenuNavigations, true)}</FlexBox>
//         </InnerContainer>
//       )}
//     </NavBarMenuWrapper>
//   );
// };

// export default NavbarMenu;

import React from 'react'

const index = () => {
  return (
    <div>
      
    </div>
  )
}

export default index
