import { useState, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { banner1, banner2, banner3 } from '@/@core/utils/image/imagePath';

const HeroSection = () => {
  const [currentBanner, setCurrentBanner] = useState(banner2);
  const banners = [banner2, banner1, banner3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => {
        const currentIndex = banners.indexOf(prevBanner);
        const nextIndex = (currentIndex + 1) % banners.length;
        return banners[nextIndex];
      });
    }, 4800);

    return () => clearInterval(interval);
  }, [banners]);

  const decorativeDiv = (
    <Flex w="100%" h="10px">
      <Box flex="1" bg="#67c1f5" />
      <Box flex="1" bg="#f5a623" />
      <Box flex="1" bg="#7ed321" />
      <Box flex="1" bg="#9013fe" />
      <Box flex="1" bg="#d0021b" />
      <Box flex="1" bg="#67c1f5" />
      <Box flex="1" bg="#f5a623" />
      <Box flex="1" bg="#7ed321" />
      <Box flex="1" bg="#9013fe" />
      <Box flex="1" bg="#d0021b" />
      <Box flex="1" bg="#67c1f5" />
      <Box flex="1" bg="#f5a623" />
      <Box flex="1" bg="#7ed321" />
      <Box flex="1" bg="#9013fe" />
      <Box flex="1" bg="#d0021b" />
      <Box flex="1" bg="#67c1f5" />
      <Box flex="1" bg="#f5a623" />
      <Box flex="1" bg="#7ed321" />
      <Box flex="1" bg="#9013fe" />
      <Box flex="1" bg="#d0021b" />
    </Flex>
  );

  return (
    <Box>
      <Box >{decorativeDiv}</Box>
      <Box as="section" minH="60vh" w="90%" margin="0 auto" textAlign="center">

        <Box
          bgImage={`url(${currentBanner})`}
          bgPosition="center"
          bgSize="contain"
          bgRepeat="no-repeat"
          minH="60vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* Content goes here */}
        </Box>

      </Box>
      <Box>{decorativeDiv}</Box>
    </Box>
  );
};

export default HeroSection;
