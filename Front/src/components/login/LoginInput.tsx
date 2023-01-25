import { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";

const LoginInput: FC<InputHTMLAttributes<any>> = (props) => {
  return <Input {...props} />;
};

const Input = styled.input`
  height: 44px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 12px;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 15px;
  ::placeholder {
    font-size: 12px;
    line-height: 100%;
    color: #bdbdbd;
  }
`;

export default LoginInput;
