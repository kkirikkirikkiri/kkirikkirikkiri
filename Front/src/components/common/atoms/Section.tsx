import { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

interface ISectionProps {
  children: ReactNode | ReactNode[];
  margin?: string;
  className?: string;
  padding?: string;
  gap?: number;
  direction?: "column" | "column-reverse" | "row" | "row-reverse";
  justify?:
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "stretch"
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "start"
    | "left"
    | "normal"
    | "right";
  align?:
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "start"
    | "self-end"
    | "self-start"
    | "baseline"
    | "normal"
    | "stretch";
  flex?: number | string;
}
const Section: FC<ISectionProps> = ({
  children,
  flex,
  gap,
  direction,
  margin,
  padding,
  className,
}) => {
  return (
    <Container
      flex={flex}
      gap={gap}
      direction={direction}
      margin={margin}
      padding={padding}
      className={className}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<Omit<ISectionProps, "children">>`
  display: flex;
  ${({ gap }) =>
    gap
      ? css`
          gap: ${gap}px;
        `
      : ""}
  ${({ flex }) =>
    flex
      ? css`
          flex: ${flex};
        `
      : ""}
  ${({ margin }) =>
    margin
      ? css`
          margin: ${margin};
        `
      : ""}
  ${({ padding }) =>
    padding
      ? css`
          padding: ${padding};
        `
      : ""}
  ${({ direction }) =>
    direction
      ? css`
          flex-direction: ${direction};
        `
      : ""}
`;

export default Section;
