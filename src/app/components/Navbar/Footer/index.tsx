import { FC } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Grid,
  GridItem,
  IconButton,
  Input,
  Button,
  Text,
  Flex,
} from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import Image from '../../Image';


interface IconItem {
  icon: React.ElementType;
  url: string;
}

const aboutLinks: string[] = [
  'Нэвтрэх',
  'Бүртгүүлэх',
  'Миний захиалгууд',
  'Миний оноо',
];

const customerCareLinks: string[] = [
  'Бидний тухай',
  'Үйлчилгээний нөхцөл',
  'Холбоо барих',
  'Тусгай үнийн санал авах хүсэлт илгээх',
];

const iconList: IconItem[] = [
  {
    icon: FaFacebook,
    url: 'https://www.facebook.com/',
  },
  {
    icon: FaTwitter,
    url: 'https://twitter.com/',
  },
  {
    icon: FaInstagram,
    url: 'https://www.instagram.com/',
  },
];

const Footer: FC = () => {
  const linkColor = 'gray.500';
  const linkHoverColor = 'gray.300';

  return (
    <Box as="footer" bg="#222935" color="white" py={10}>
      <Container maxW="container.xl">
        <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={6}>
          <GridItem>
            <Link href="/" passHref>
              <Image mb={4} height={120} src="/public/assets/images/uba_logo_white.png" alt="logo" />
            </Link>
            <Text mb={4} color="gray.500">
              Та и-мэйл хаягаа үлдээгээд шинэ бүтээгдэхүүний үйлчилгээ болон урамшууллын талаар мэдээлэл аваарай
            </Text>
            <Input
              placeholder="и-мэйл оруулах хэсэг"
              mb={4}
              textAlign="center"
              bg="white"
              color="black"
            />
            <Button width="full" colorScheme="blue">
              Бүртгүүлэх
            </Button>
          </GridItem>

          <GridItem>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Бүртгэл
            </Text>
            {aboutLinks.map((item, index) => (
              <Box key={index} mb={2}>
                <Link href="/" passHref>
                  <Text color={linkColor} _hover={{ color: linkHoverColor }}>
                    {item}
                  </Text>
                </Link>
              </Box>
            ))}
          </GridItem>

          <GridItem>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Компани
            </Text>
            {customerCareLinks.map((item, index) => (
              <Box key={index} mb={2}>
                <Link href="/" passHref>
                  <Text color={linkColor} _hover={{ color: linkHoverColor }}>
                    {item}
                  </Text>
                </Link>
              </Box>
            ))}
          </GridItem>

          <GridItem>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Бүтээгдэхүүн, үйлчилгээ
            </Text>
            {['Брендүүд', 'Хүргэлт', 'Буцаалт', 'Түгээмэл асуулт хариулт'].map((item, index) => (
              <Box key={index} mb={2}>
                <Link href="/" passHref>
                  <Text color={linkColor} _hover={{ color: linkHoverColor }}>
                    {item}
                  </Text>
                </Link>
              </Box>
            ))}

            <Flex mt={4} gap={2}>
              {iconList.map((item, index) => (
                <a href={item.url} target="_blank" rel="noreferrer" key={index}>
                  <IconButton
                    aria-label={`Link to ${item.url}`}
                    icon={<item.icon />}
                    variant="outline"
                    colorScheme="whiteAlpha"
                  />
                </a>
              ))}
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
