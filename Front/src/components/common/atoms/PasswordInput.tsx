import Input, { InputProps } from "components/common/atoms/Input";
import Image from "next/image";
import { ForwardedRef, forwardRef, useState } from "react";
import styled from "styled-components";

const PasswordInput = (
  inputProps: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [passwordVisible, isPasswordVisible] = useState(false);
  return (
    <Input
      ref={ref}
      borderType="line"
      placeholder="비밀번호 입력"
      {...inputProps}
      type={passwordVisible ? "text" : "password"}
      addonNext={
        <PasswordIconConatiner>
          <Image
            src="/img/icon/passwordIcon.svg"
            onClick={() => isPasswordVisible((prev) => !prev)}
            width={22}
            height={22}
          />
        </PasswordIconConatiner>
      }
    />
  );
};

const PasswordIconConatiner = styled.a`
  margin-right: 16px;
`;
export default forwardRef<HTMLInputElement, InputProps>(PasswordInput);
