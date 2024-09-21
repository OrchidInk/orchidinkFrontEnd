import { Img } from '@chakra-ui/react';
import { FC } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  height?: number | string;
  mb?: number | string;
}

const Image: FC<ImageProps> = ({ src, alt, height, mb }) => {
  return <Img src={src} alt={alt} height={height} mb={mb} />;
};

export default Image;
