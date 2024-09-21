import { Box, BoxProps } from "@chakra-ui/react";
import clsx from "clsx";

interface TypographyProps extends BoxProps {
  children: React.ReactNode;
  className?: string;
  ellipsis?: boolean;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
  as?: keyof JSX.IntrinsicElements;
}

const StyledBox = ({
  children,
  className,
  ellipsis,
  textTransform,
  as = "div",
  ...props
}: TypographyProps) => {
  return (
    <Box
      as={as}
      className={clsx(className)}
      textTransform={textTransform || "none"}
      whiteSpace={ellipsis ? "nowrap" : "normal"}
      overflow={ellipsis ? "hidden" : undefined}
      textOverflow={ellipsis ? "ellipsis" : undefined}
      {...props}
    >
      {children}
    </Box>
  );
};

export const H1 = (props: TypographyProps) => (
  <StyledBox as="h1" fontSize="30px" fontWeight="700" lineHeight="1.5" {...props} />
);
export const H2 = (props: TypographyProps) => (
  <StyledBox as="h2" fontSize="25px" fontWeight="700" lineHeight="1.5" {...props} />
);
export const H3 = (props: TypographyProps) => (
  <StyledBox as="h3" fontSize="20px" fontWeight="700" lineHeight="1.5" {...props} />
);
export const H4 = (props: TypographyProps) => (
  <StyledBox as="h4" fontSize="17px" fontWeight="600" lineHeight="1.5" {...props} />
);
export const H5 = (props: TypographyProps) => (
  <StyledBox as="h5" fontSize="16px" fontWeight="600" lineHeight="1.5" {...props} />
);
export const H6 = (props: TypographyProps) => (
  <StyledBox as="h6" fontSize="14px" fontWeight="600" lineHeight="1.5" {...props} />
);
export const Paragraph = (props: TypographyProps) => (
  <StyledBox as="p" fontSize="14px" {...props} />
);
export const Small = (props: TypographyProps) => (
  <StyledBox as="small" fontSize="12px" lineHeight="1.5" {...props} />
);
export const Span = (props: TypographyProps) => (
  <StyledBox as="span" lineHeight="1.5" {...props} />
);
export const Tiny = (props: TypographyProps) => (
  <StyledBox as="small" fontSize="10px" lineHeight="1.5" {...props} />
);