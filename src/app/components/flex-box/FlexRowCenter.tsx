import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode, FC } from 'react';

interface FlexRowCenterProps extends BoxProps {
  children: ReactNode;
}

const FlexRowCenter: FC<FlexRowCenterProps> = ({ children, ...props }) => (
  <Box display="flex" justifyContent="center" alignItems="center" {...props}>
    {children}
  </Box>
);

export default FlexRowCenter;
