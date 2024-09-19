import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode, FC } from 'react';

interface FlexBoxProps extends BoxProps {
  children: ReactNode;
}

const FlexBox: FC<FlexBoxProps> = ({ children, ...props }) => (
  <Box display="flex" {...props}>
    {children}
  </Box>
);

export default FlexBox;
