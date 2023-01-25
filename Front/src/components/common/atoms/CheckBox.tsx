import { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";
const CheckBox: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  ...inputProps
}) => {
  return (
    <CheckBoxContainer>
      <input type="checkbox" {...inputProps} />
      <span>{children}</span>
    </CheckBoxContainer>
  );
};
const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #424242;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  span {
    position: relative;
    cursor: pointer;
    display: inline-block;
    width: 22px;
    height: 22px;
    margin-right: 10px;
    border-radius: 11px;
    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }
  input:checked ~ span:after {
    display: block;
  }
  span:after {
    left: 5px;
    top: 1px;
    width: 4px;
    height: 8px;
    border: solid #424242;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export default CheckBox;
