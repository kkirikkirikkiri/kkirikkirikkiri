import Button from "components/common/atoms/Button";
import HorizontalBlank from "components/common/atoms/HorizontalBlank";
import Section from "components/common/atoms/Section";
import Input from "components/Input";
import { FC, useCallback, useState } from "react";
import styled from "styled-components";
interface AuthEmailProps {
  onNext: () => void;
}
const AuthEmail: FC<AuthEmailProps> = ({ onNext }) => {
  const handleClick = useCallback(() => {
    onNext();
  }, []);
  const [auth, isAuth] = useState(false);
  return (
    <>
      <Section direction="column" gap={12}>
        <Input
          borderType="line"
          placeholder="이메일을 입력해 주세요"
          addonNext={
            <AuthButton onClick={() => isAuth((prev) => !prev)}>
              인증번호 보내기
            </AuthButton>
          }
        />
        <Input borderType="line" placeholder="인증번호를 입력해 주세요" />
      </Section>
      <HorizontalBlank height={32} />
      <Button onClick={handleClick} disabled={!auth}>
        인증하기
      </Button>
    </>
  );
};

const AuthButton = styled.a`
  margin-right: 13px;
  font-size: 12px;
  color: #78c3ed;
`;

export default AuthEmail;
