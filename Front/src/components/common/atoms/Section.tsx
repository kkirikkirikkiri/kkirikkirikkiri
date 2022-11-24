import { CSSProperties, FC, ReactNode } from "react";
import styled from "styled-components";

interface ISectionProps {
  children: ReactNode | ReactNode[];
  margin?: CSSProperties["margin"];
  className?: string;
  padding?: CSSProperties["padding"];
  gap?: CSSProperties["gap"];
  direction?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  flex?: CSSProperties["flex"];
  width?: CSSProperties["width"];
}
const Section: FC<ISectionProps> = ({
  children,
  flex,
  gap,
  direction,
  margin,
  padding,
  width,
  className,
}) => {
  return (
    <Container
      flex={flex}
      gap={gap}
      direction={direction}
      margin={margin}
      padding={padding}
      style={{ gap, flex, flexDirection: direction, margin, padding, width }}
      className={className}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<Omit<ISectionProps, "children">>`
  display: flex;
`;

export default Section;
