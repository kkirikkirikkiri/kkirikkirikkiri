import { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";
const CheckBox: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  ...inputProps
}) => {
  return (
    <CheckBoxContainer>
      <input type="checkbox" {...inputProps} id={inputProps.id} />
      <label htmlFor={inputProps.id}>{children}</label>
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
  input + label {
    display: flex;
    gap: 8px;
  }
  input + label:before {
    display: block;
    content: "";
    width: 22px;
    height: 22px;
    background-image: url("/img/icon/checkbox.svg");
  }
  input:checked + label:before {
    display: block;
    content: "";
    background-image: url("/img/icon/checkbox_checked.svg");
  }
`;

export default CheckBox;
