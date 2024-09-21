import Link from "next/link";
import { Box, Grid, Image, Flex } from "@chakra-ui/react";
import StyledMegaMenu from "./StyledMegaMenu";

// Define the types for the props
interface MegaMenu1Props {
  data: {
    categories?: {
      href?: string;
      title: string;
      subCategories?: { href: string; title: string }[];
    }[];
    rightImage?: { href: string; imgUrl: string };
    bottomImage?: { href: string; imgUrl: string };
  };
  minWidth?: string | number;
}

const MegaMenu1 = ({ data, minWidth = "760px" }: MegaMenu1Props) => {
  const { categories, rightImage, bottomImage } = data || {};

  return categories ? (
    <StyledMegaMenu>
      <Box
        bg="white"
        boxShadow="md"
        ml="1rem"
        minWidth={minWidth}
        borderRadius="md"
      >
        <Flex px={6} py={4} alignItems="unset">
          <Box flex="1 1 0">
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
              {categories.map((item, ind) => (
                <Box key={ind}>
                  {item.href ? (
                    <Link href={item.href}>
                      <a className="title-link">{item.title}</a>
                    </Link>
                  ) : (
                    <Box className="title-link">{item.title}</Box>
                  )}

                  {item.subCategories?.map((sub, ind) => (
                    <Link href={sub.href} key={ind}>
                      <a className="child-link">{sub.title}</a>
                    </Link>
                  ))}
                </Box>
              ))}
            </Grid>
          </Box>

          {rightImage && (
            <Box mt={6}>
              <Link href={rightImage.href}>
                <a>
                  <Image
                    src={rightImage.imgUrl}
                    width={137}
                    height={318}
                    alt="banner"
                  />
                </a>
              </Link>
            </Box>
          )}
        </Flex>

        {bottomImage && (
          <Link href={bottomImage.href}>
            <a>
              <Box position="relative" height="150px" width="100%">
                <Image
                  src={bottomImage.imgUrl}
                  alt="banner"
                  objectFit="cover"
                  objectPosition="center"
                  width="100%"
                  height="100%"
                />
              </Box>
            </a>
          </Link>
        )}
      </Box>
    </StyledMegaMenu>
  ) : null;
};

export default MegaMenu1;
