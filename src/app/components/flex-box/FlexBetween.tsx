import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode, FC } from 'react';

interface FlexBetweenProps extends BoxProps {
  children: ReactNode;
}

const FlexBetween: FC<FlexBetweenProps> = ({ children, ...props }) => (
  <Box display="flex" justifyContent="space-between" alignItems="center" {...props}>
    {children}
  </Box>
);

export default FlexBetween;
