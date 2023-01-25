import { FC, MouseEventHandler, ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";
interface IButtonProps {
  children?: ReactNode | ReactNode[];
  background?: CSSProperties["background"];
  border?: CSSProperties["border"];
  color?: CSSProperties["color"];
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
const Button: FC<IButtonProps> = ({ children, onClick, ...buttonProps }) => {
  return (
    <ButtonContainer {...buttonProps} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<
  Pick<IButtonProps, "background" | "color" | "border">
>`
  cursor: pointer;
  height: 44px;
  border: ${({ border }) => border ?? "none"};
  background: ${({ background }) => background ?? "inherit"};
  color: ${({ color }) => color ?? "inherit"};
  border-radius: 30px;
  width: 100%;
  font-weight: 400;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Button;
