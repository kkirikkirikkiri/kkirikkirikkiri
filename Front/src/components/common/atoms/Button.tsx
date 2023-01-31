import { FC, MouseEventHandler, ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode | ReactNode[];
  background?: CSSProperties["background"];
  border?: CSSProperties["border"];
  color?: CSSProperties["color"];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
const Button: FC<IButtonProps> = ({
  children,
  onClick,
  disabled,
  ...buttonProps
}) => {
  return (
    <ButtonContainer {...buttonProps} onClick={onClick} disabled={disabled}>
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
  background: ${({ background }) => background ?? "#78C3ED"};
  color: ${({ color }) => color ?? "#EEF6FA"};
  border-radius: 30px;
  width: 100%;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    background: #c2c2c2;
    color: #ffffff;
  }
`;
export default Button;
