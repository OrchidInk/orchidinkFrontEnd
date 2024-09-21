import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface CardProps extends BoxProps {
  hoverEffect?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  hoverEffect = false,
  children,
  className,
  ...rest
}) => {
  return (
    <div className={`w-full flex justify-between ${className}`}>
      {children}
    </div>
  );
};

export default Card;
