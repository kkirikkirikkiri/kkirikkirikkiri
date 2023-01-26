import Button from "components/common/atoms/Button";
import HorizontalBlank from "components/common/atoms/HorizontalBlank";
import Section from "components/common/atoms/Section";
import LoginInput from "components/login/LoginInput";
import { FC, useCallback } from "react";
import styled from "styled-components";
interface UserInfoInputProps {
  onNext: () => void;
}
const UserInfoInput: FC<UserInfoInputProps> = ({ onNext }) => {
  const handleClick = useCallback(() => {
    onNext();
  }, []);
  return (
    <>
      <Section direction="column" gap={12}>
        <LoginInput placeholder="아이디를 입력해 주세요" />
        <LoginInput placeholder="비밀번호를 입력해 주세요" />
        <LoginInput placeholder="비밀번호를 다시 입력해 주세요" />
        <LoginInput placeholder="닉네임을 입력해 주세요" />
      </Section>
      <HorizontalBlank height={32} />
      <Button onClick={handleClick}>인증하기</Button>
    </>
  );
};

const AuthInputContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  & > a {
    position: absolute;
    font-weight: 500;
    right: 13px;
    font-size: 12px;
    line-height: 100%;
    color: #78c3ed;
  }
`;

export default UserInfoInput;
